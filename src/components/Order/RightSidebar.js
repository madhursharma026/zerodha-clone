import Tabs from '@/components/Tabs/Tabs'
import { Card, Col, Table } from 'react-bootstrap'
import styles from './RightSidebar.module.css'

export default function RightSidebar() {
  const openOrderData = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    Time: '15:23:26',
    Type: 'BUY',
    Instrument: 'XXXXXXXXXX',
    Product: 'XXX',
    Qty: '0000',
    LTP: '00.00',
    Price: '000.00',
    Status: 'OPEN',
  }))
  const executedOrderData = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    Time: '15:23:26',
    Type: 'BUY',
    Instrument: 'XXXXXXXXXX',
    Product: 'XXX',
    Qty: '0000',
    LTP: '00.00',
    Price: '000.00',
    Status: 'Complete',
  }))
  return (
    <Col className={`px-4 py-2 rightSidebarScrollContainer`}>
      <div className={styles.rightColumn}>
        <Tabs
          tabsName={[
            'Orders',
            'GTT',
            'Backets',
            'SIP',
            'Alerts',
            'IPO',
            'Auctions',
          ]}
          activeTab={'Orders'}
        />
        <p className="fs-5 pt-3">Open Orders (4)</p>

        <Table className="bg-white d-none d-lg-table" hover>
          <thead>
            <tr className="mediumFontSize">
              <th className="text-muted fw-normal">Time</th>
              <th className="text-muted fw-normal">Type</th>
              <th className="text-muted fw-normal">Instrument</th>
              <th className="text-muted fw-normal">Product</th>
              <th className="text-muted fw-normal">Qty.</th>
              <th className="text-muted fw-normal">LTP</th>
              <th className="text-muted fw-normal">Price</th>
              <th className="text-muted fw-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {openOrderData.map((item) => (
              <tr key={item.id} className="mediumFontSize">
                <td>{item.Time}</td>
                <td>
                  <span className="px-2 py-1" style={{ background: '#ECF2FD' }}>
                    {item.Type}
                  </span>
                </td>
                <td>{item.Instrument}</td>
                <td>{item.Product}</td>
                <td>{item.Qty}</td>
                <td>{item.LTP}</td>
                <td>{item.Price}</td>
                <td>
                  <span className="px-2 py-1" style={{ background: '#ECECEC' }}>
                    {item.Status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <p className="fs-5 pt-3">Executed Orders (4)</p>

        <Table className="bg-white d-none d-lg-table" hover>
          <thead>
            <tr className="mediumFontSize">
              <th className="text-muted fw-normal">Time</th>
              <th className="text-muted fw-normal">Type</th>
              <th className="text-muted fw-normal">Instrument</th>
              <th className="text-muted fw-normal">Product</th>
              <th className="text-muted fw-normal">Qty.</th>
              <th className="text-muted fw-normal">LTP</th>
              <th className="text-muted fw-normal">Price</th>
              <th className="text-muted fw-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {executedOrderData.map((item) => (
              <tr key={item.id} className="mediumFontSize">
                <td>{item.Time}</td>
                <td>
                  <span className="px-2 py-1" style={{ background: '#ECF2FD' }}>
                    {item.Type}
                  </span>
                </td>
                <td>{item.Instrument}</td>
                <td>{item.Product}</td>
                <td>{item.Qty}</td>
                <td>{item.LTP}</td>
                <td>{item.Price}</td>
                <td>
                  <span className="px-2 py-1" style={{ background: '#ECECEC' }}>
                    {item.Status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {openOrderData.map((item) => (
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

        {executedOrderData.map((item) => (
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
