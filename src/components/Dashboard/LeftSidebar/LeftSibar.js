import { useEffect, useRef, useState } from 'react'
import { Col, Form, InputGroup, Table } from 'react-bootstrap'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoFilterOutline } from 'react-icons/io5'
import io from 'socket.io-client'
import styles from './LeftSidebar.module.css'

export default function LeftSidebar() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const previousPricesRef = useRef({}) // holds old prices

  useEffect(() => {
    fetch('/api/socket') // trigger server socket init
    const socket = io({ path: '/api/socket_io' })

    socket.on('connect', () => {
      console.log('🟢 Connected to WebSocket')
    })

    socket.on('prices', (prices) => {
      const prev = previousPricesRef.current

      const pricesArray = Object.entries(prices).map(([name, price]) => {
        const previous = prev[name]

        let change = 0
        let percent = 0

        if (previous !== undefined && previous !== 0) {
          change = price - previous
          percent = (change / previous) * 100
        }

        return {
          name,
          price: price.toFixed(2),
          change: change.toFixed(2),
          percent: percent.toFixed(2),
        }
      })

      previousPricesRef.current = prices
      setData(pricesArray)
      setLoading(false)
    })

    return () => socket.disconnect()
  }, [])

  return (
    <Col className={`${styles.leftColumn} ${styles.leftColumnDisplay} pt-3`}>
      <InputGroup className="mb-3">
        <InputGroup.Text className="rounded-0">
          <HiMagnifyingGlass />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search eg: infy bse, nifty fut, index fund, etc"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text className="rounded-0">
          <IoFilterOutline />
        </InputGroup.Text>
      </InputGroup>

      <div className={styles.scrollContainer}>
        <Table
          responsive
          className="mediumFontSize border"
          style={{ tableLayout: 'fixed', width: '100%' }}
        >
          <tbody>
            <tr className={styles.tableRow}>
              <td className="smallFontSize fw-bold">Token</td>
              <td className="smallFontSize fw-bold">Change</td>
              <td className="smallFontSize fw-bold">%</td>
              <td className="smallFontSize fw-bold">Price</td>
            </tr>

            {loading ? (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              data.map((item, index) => {
                const isProfit = parseFloat(item.change) > 0
                return (
                  <tr key={index} className={styles.tableRow}>
                    <td className={styles.tableColumn}>{item.name}</td>
                    <td
                      className={`${
                        isProfit ? 'text-success' : 'text-danger'
                      } ${styles.tableColumn}`}
                    >
                      {isProfit ? `+${item.change}` : item.change}
                    </td>
                    <td
                      className={`${
                        isProfit ? 'text-success' : 'text-danger'
                      } ${styles.tableColumn}`}
                    >
                      {isProfit ? `+${item.percent}% ▲` : `${item.percent}% ▼`}
                    </td>
                    <td
                      className={`${
                        isProfit ? 'text-success' : 'text-danger'
                      } ${styles.tableColumn}`}
                    >
                      ${item.price}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </Table>
      </div>
    </Col>
  )
}
