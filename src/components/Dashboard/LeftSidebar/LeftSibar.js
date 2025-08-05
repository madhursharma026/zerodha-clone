import { useEffect, useState } from 'react'
import { Col, Form, InputGroup, Table } from 'react-bootstrap'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoFilterOutline } from 'react-icons/io5'
import styles from './LeftSidebar.module.css'

export default function LeftSidebar() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('/api/fetchPrices')
        const json = await res.json()
        if (json.success) {
          const pricesArray = Object.entries(json.prices).map(
            ([name, price]) => ({
              name,
              price: price.toFixed(2),
              change: (Math.random() * 10 - 5).toFixed(2), // Simulated
              percent: (Math.random() * 10 - 5).toFixed(2), // Simulated
            })
          )
          setData(pricesArray)
        }
      } catch (err) {
        console.error('Error fetching prices:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
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

      <div className="row">
        <div className="col-6">
          <p className="smallFontSize">SCALPING 19/sep (97 / 250)</p>
        </div>
        <div className="col-6">
          <p className="smallFontSize text-primary text-end">+ New Group</p>
        </div>
      </div>

      <div className={`${styles.scrollContainer}`}>
        <Table
          responsive
          className="mediumFontSize border"
          style={{ tableLayout: 'fixed', width: '100%' }}
        >
          <tbody>
            <tr className={styles.tableRow}>
              <td className="smallFontSize">Default</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {loading ? (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={`text-danger ${styles.tableColumn}`}>
                    {item.name}
                  </td>
                  <td className={styles.tableColumn}>{item.change}%</td>
                  <td className={`text-danger ${styles.tableColumn}`}>
                    {item.percent}% <span>▼</span>
                  </td>
                  <td className={`text-danger ${styles.tableColumn}`}>
                    ${item.price}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </Col>
  )
}
