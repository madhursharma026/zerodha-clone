import Tabs from '@/components/Tabs/Tabs'
import { Button, Col, Table } from 'react-bootstrap'
import styles from './RightSidebar.module.css'

export default function RightSidebar() {
  const ipoData = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    instrument: 'XXXX',
    description: 'XXXXX XXXXX XXXXX XXXXX',
    dateFrom: 'XX',
    dateTo: 'XX',
    monthFrom: 'XXX',
    monthTo: 'XXX',
    priceRange: '000 - 000',
    minAmount: '0000',
    qty: '00',
  }))

  return (
    <Col className={`px-4 py-2 rightSidebarScrollContainer`}>
      <div className={styles.rightColumn}>
        <Tabs
          tabsName={['IPO', 'Govt. securities', 'Auctions']}
          activeTab={'IPO'}
        />
        <p className="fs-5 pt-3">IPOs (30)</p>
        <div className="table-responsive">
          <div className="table-responsive d-none d-md-block">
            <Table className="bg-white d-none d-md-table" hover>
              <thead>
                <tr className="mediumFontSize">
                  <th className="text-muted fw-normal">Instrument</th>
                  <th className="text-muted fw-normal">Date</th>
                  <th className="text-muted fw-normal">Price (₹)</th>
                  <th className="text-muted fw-normal">Min. amount (₹)</th>
                  <th className="text-muted fw-normal"></th>
                </tr>
              </thead>
              <tbody>
                {ipoData.map((item) => (
                  <tr key={item.id} className="mediumFontSize align-middle">
                    <td>
                      <div className="fw-semibold">{item.instrument}</div>
                      <div className="text-muted small">{item.description}</div>
                    </td>
                    <td>
                      <span>
                        {item.dateFrom}
                        <sup>th</sup> {item.monthFrom} — {item.dateTo}
                        <sup>th</sup> {item.monthTo}
                      </span>
                    </td>
                    <td>{item.priceRange}</td>
                    <td>
                      <div>{item.minAmount}</div>
                      <div className="text-muted small">{item.qty} Qty.</div>
                    </td>
                    <td className="text-end">
                      <Button variant="primary" className="rounded-1 px-3 py-1">
                        Pre-apply
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="d-block d-md-none">
            {ipoData.map((item) => (
              <div key={item.id} className="card mb-2 p-3 shadow-sm">
                <div className="fw-semibold">{item.instrument}</div>
                <div className="text-muted small">{item.description}</div>

                <div className="mt-2">
                  <div className="text-muted">Date</div>
                  <div>
                    {item.dateFrom}
                    <sup>th</sup> {item.monthFrom} — {item.dateTo}
                    <sup>th</sup> {item.monthTo}
                  </div>
                </div>

                <div className="mt-2">
                  <div className="text-muted">Price (₹)</div>
                  <div>{item.priceRange}</div>
                </div>

                <div className="mt-2">
                  <div className="text-muted">Min. amount (₹)</div>
                  <div>
                    {item.minAmount}{' '}
                    <span className="text-muted small">({item.qty} Qty.)</span>
                  </div>
                </div>

                <div className="text-end mt-3">
                  <Button variant="primary" className="rounded-1 px-3 py-1">
                    Pre-apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Col>
  )
}
