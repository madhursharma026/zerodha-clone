import Header from '@/components/Header/header'
import styles from '@/components/Header/header.module.css'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoFilterOutline } from 'react-icons/io5'

export default function Home() {
  return (
    <>
      <div className="bodyContainer">
        <Header />
      </div>
      <div className="containerWidthGlobalCSS">
        <Card
          className="border-0 rounded-0 mt-1 p-0 m-0"
          style={{
            boxShadow:
              '-4px 0 6px -2px rgba(0, 0, 0, 0.08), 4px 0 6px -2px rgba(0, 0, 0, 0.08)',
            height: '100vh',
          }}
        >
          <Card.Body className="px-2 py-0">
            <Row>
              <Col className={styles.leftColumn}>
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
              </Col>
              <Col></Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
