import { Col, Form, InputGroup, Table } from 'react-bootstrap'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoFilterOutline } from 'react-icons/io5'
import styles from './LeftSidebar.module.css'

export default function LeftSidebar() {
  const data = Array.from({ length: 35 }).map(() => ({
    name: 'NBCC',
    change: -4.43,
    percent: -3.9,
    price: 109.25,
  }))

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
        <Table responsive className="mediumFontSize border">
          <tbody>
            <tr style={{ height: '32px' }}>
              <td className="smallFontSize">Default</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {data.map((item, index) => (
              <tr key={index} style={{ height: '32px' }}>
                <td className="text-danger">{item.name}</td>
                <td style={{ maxWidth: '10px' }}>{item.change}%</td>
                <td style={{ maxWidth: '20px' }} className="text-danger">
                  {item.percent}% <span>▼</span>
                </td>
                <td style={{ maxWidth: '10px' }} className="text-danger">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  )
}
