import { Card, Col, Table } from 'react-bootstrap'
import styles from './RightSidebar.module.css'

export default function RightSidebar() {
  const positionsData = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    Product: 'XXXX',
    Instrument: 'XXXX XXXX XXXX XXXX',
    Qty: '-0',
    Avg: '0000.00',
    LTP: '0000.00',
    pnl: '-00.00',
    Chg: '0.00%',
  }))
  return (
    <Col className={`px-4 py-2 rightSidebarScrollContainer`}>
      <div className={styles.rightColumn}>
        <p className="fs-5 pt-3">Positions (4)</p>

        <Table className="bg-white d-none d-lg-table" hover>
          <thead>
            <tr className="mediumFontSize">
              <th className="text-muted fw-normal">#</th>
              <th className="text-muted fw-normal">Products</th>
              <th className="text-muted fw-normal">Instrument</th>
              <th className="text-muted fw-normal">Qty.</th>
              <th className="text-muted fw-normal">Avg</th>
              <th className="text-muted fw-normal">LTP</th>
              <th className="text-muted fw-normal">P&L</th>
              <th className="text-muted fw-normal">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positionsData.map((item) => (
              <tr key={item.id} className="mediumFontSize">
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <span className="px-2 py-1" style={{ background: '#ECF2FD' }}>
                    {item.Product}
                  </span>
                </td>
                <td>{item.Instrument}</td>
                <td className="text-success">{item.Qty}</td>
                <td>{item.Avg}</td>
                <td>{item.LTP}</td>
                <td className="text-success">{item.pnl}</td>
                <td>{item.Chg}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {positionsData.map((item) => (
          <Card
            key={item.id}
            className="mt-3 d-block d-lg-none border-0 border-muted"
            style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
          >
            <Card.Body>
              <span>Time</span>
              <p className="fw-normal">{item.Time}</p>
              <div className="row">
                <div className="col-6 col-sm-4 col-md-3">
                  <span>Type</span>
                  <p className="fw-normal">{item.Type}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <span>Instrument</span>
                  <p className="fw-normal">{item.Instrument}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <span>Product</span>
                  <p className="fw-normal">{item.Product}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <span>Qty</span>
                  <p className="fw-normal">{item.Qty}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <span>LTP</span>
                  <p className="fw-normal">{item.LTP}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <span>Price</span>
                  <p className="fw-normal">{item.Price}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <span>Status</span>
                  <p className="fw-normal">{item.Status}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Col>
  )
}
