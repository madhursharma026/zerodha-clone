import RightSidebar from '@/components/Bids/RightSidebar'
import LeftSidebar from '@/components/Dashboard/LeftSidebar/LeftSibar'
import Header from '@/components/Header/header'
import { useEffect, useState } from 'react'
import { Card, Row } from 'react-bootstrap'

export default function Bids() {
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    const height = document.documentElement.scrollHeight
    setScreenHeight(height)
    localStorage.setItem('screenHeight', height.toString())
  }, [])

  return (
    <>
      <div className="bodyContainer">
        <Header headerTitle="Dashboard" />
      </div>

      <div className="containerWidthGlobalCSS">
        <Card
          className="border-0 rounded-0 mt-1 p-0 m-0"
          style={{
            boxShadow:
              '-4px 0 6px -2px rgba(0, 0, 0, 0.08), 4px 0 6px -2px rgba(0, 0, 0, 0.08)',
            minHeight: '100vh',
          }}
        >
          <Card.Body className="px-2 py-0">
            <Row>
              <LeftSidebar />
              <RightSidebar />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
