import useTheme from '@/hooks/useTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Col, Offcanvas, Row } from 'react-bootstrap'
import { FaRegBell } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { IoIosMenu } from 'react-icons/io'
import styles from './header.module.css'

const Header = ({ headerTitle }) => {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className={styles.headerBoxShadow}>
        <div className="containerWidthGlobalCSS px-sm-2 px-4 align-items-center justify-content-between">
          <Row>
            <Col className={styles.leftColumn}>
              <div className={`d-flex flex-wrap gap-3 ${styles.customFlexGap}`}>
                <div className="mediumFontSize text-muted">
                  NIFTY 50 <br className={styles.whenWillBRCome} />
                  <span className="text-danger">24837.00</span>{' '}
                  <span className="smallFontSize">-225.10 (-0.90%)</span>
                </div>
                <br className={styles.whenWillBRCome} />
                <div className="mediumFontSize text-muted">
                  SENSEX <br className={styles.whenWillBRCome} />
                  <span className="text-danger">81463.09</span>{' '}
                  <span className="smallFontSize">-721.08 (-0.88%)</span>
                </div>
              </div>
            </Col>

            <Col xs="auto" className={styles.verticalDivider}></Col>

            <Col>
              <div className={styles.verticalCenterText}>
                <Link className="text-decoration-none" href="/">
                  <img
                    src="https://kite.zerodha.com/static/images/kite-logo.svg"
                    alt="#ImgNotFound"
                    width={'21px'}
                    height={'14px'}
                  />
                </Link>
                <div className="w-100 text-end">
                  <Link
                    href={'/'}
                    className={`mediumFontSize ${
                      pathname === '/' ? 'text-danger' : ''
                    } text-decoration-none px-3 ${styles.navMenuHoverStyle}`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href={'/orders'}
                    className={`mediumFontSize ${
                      pathname === '/orders' ? 'text-danger' : ''
                    } text-decoration-none px-3 ${styles.navMenuHoverStyle}`}
                  >
                    Orders
                  </Link>
                  <Link
                    href={'/holdings'}
                    className={`mediumFontSize ${
                      pathname === '/holdings' ? 'text-danger' : ''
                    } text-decoration-none px-3 ${styles.navMenuHoverStyle}`}
                  >
                    Holdings
                  </Link>
                  <Link
                    href={'/positions'}
                    className={`mediumFontSize ${
                      pathname === '/positions' ? 'text-danger' : ''
                    } text-decoration-none px-3 ${styles.navMenuHoverStyle}`}
                  >
                    Positions
                  </Link>
                  <Link
                    href={'/bids'}
                    className={`mediumFontSize ${
                      pathname === '/bids' ? 'text-danger' : ''
                    } text-decoration-none px-3 ${styles.navMenuHoverStyle}`}
                  >
                    Bids
                  </Link>
                  <Link
                    href={'/funds'}
                    className={`mediumFontSize ${
                      pathname === '/funds' ? 'text-danger' : ''
                    } text-decoration-none px-3 ${styles.navMenuHoverStyle}`}
                  >
                    Funds
                  </Link>
                  <span
                    className={`mediumFontSize px-3 ${styles.navMenuHoverStyle}`}
                  >
                    <FiShoppingCart />
                  </span>
                  <span
                    className={`mediumFontSize px-3 ${styles.navMenuHoverStyle}`}
                  >
                    <FaRegBell />
                  </span>
                  <span
                    className={`mediumFontSize px-3 ${styles.navMenuHoverStyle}`}
                  >
                    XXX123
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className={`${styles.headerBoxShadowAfter1125px} containerWidthGlobalCSS px-2 align-items-center justify-content-between py-2`}
      >
        <div className="row">
          <div className="col-4">
            <Link className="text-decoration-none" href="/">
              <img
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                alt="#ImgNotFound"
                width={'21px'}
                height={'14px'}
              />
            </Link>
          </div>
          <div className="col-4 text-center">
            <span className="text-center">
              <span className="fs-5">{headerTitle}</span>
            </span>
          </div>
          <div className="col-4 text-end">
            <span className={`mediumFontSize px-3 ${styles.navMenuHoverStyle}`}>
              <FiShoppingCart />
            </span>
            <span
              className={`mediumFontSize px-3 ${styles.navMenuHoverStyle}`}
              onClick={handleShow}
            >
              <IoIosMenu />
            </span>
            <span
              className={`mediumFontSize d-md-inline d-none px-3 ${styles.navMenuHoverStyle}`}
            >
              XXX123
            </span>
          </div>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className={styles.headerOffCanvasDisplay}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link href="/" className="text-decoration-none">
              <img
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                alt="#ImgNotFound"
                width="21px"
                height="14px"
              />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="d-flex flex-column">
            {[
              { href: '/', label: 'Dashboard' },
              { href: '/orders', label: 'Orders' },
              { href: '/holdings', label: 'Holdings' },
              { href: '/positions', label: 'Positions' },
              { href: '/bids', label: 'Bids' },
              { href: '/funds', label: 'Funds' },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`mediumFontSize py-2 ${
                  pathname === href ? 'text-danger' : ''
                } text-decoration-none ${styles.navMenuHoverStyle}`}
                onClick={handleClose}
              >
                {label}
              </Link>
            ))}

            <div className="d-flex align-items-center gap-3 mt-3 px-1">
              <span className={`mediumFontSize ${styles.navMenuHoverStyle}`}>
                <FiShoppingCart />
              </span>
              <span className={`mediumFontSize ${styles.navMenuHoverStyle}`}>
                <FaRegBell />
              </span>
              <span className={`mediumFontSize ${styles.navMenuHoverStyle}`}>
                XXX123
              </span>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
