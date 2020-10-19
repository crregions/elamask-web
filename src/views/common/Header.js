import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'

import { LANG } from 'config/constants'

const Header = () => {
  const { t, i18n } = useTranslation(['common', 'layout'])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
  }

  const { logoSrc, flagIcon } = useMemo(() => {
    switch (i18n.language) {
      case LANG.EN:
        return { logoSrc: logoSrcEN, flagIcon: flagUS }
      case LANG.ZH:
        return { logoSrc: logoSrcZH, flagIcon: flagZH }
      default:
        return { logoSrc: logoSrcEN, flagIcon: flagUS }
    }
  }, [i18n.language])

  return (
    <HeaderContainer as="header" fluid="xl">
      <Container>
        <div className="row small center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 wow fadeInDown top__element">
            <Navbar expand="lg" variant="light">
              <Navbar.Brand href="#">
                <img src={logoSrc} alt="logo" style={{ height: '100px' }} />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="ml-auto">
                  <Nav.Link className="mx-2" href="#home">
                    {t('layout:header.Home')}
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="#apps">
                    {t('layout:header.Apps')}
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="#home">
                    {t('layout:header.Developers')}
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="https://docs.elamask.com" target="_blank">
                    {t('layout:header.Guides')}
                  </Nav.Link>
                  <NavDropdown
                    className="mx-2"
                    title={flagIcon}
                    id="collapsible-nav-dropdown-2"
                  >
                    <NavDropdown.Item onClick={() => changeLanguage('en')}>
                      {flagUS} {t('layout:header.lang.en')}
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => changeLanguage('zh')}>
                      {flagZH} {t('layout:header.lang.zh')}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default Header

const flagUS = (
  <img src="/assets/img/country-flags/US.png" height={24} alt="EN" />
)

const flagZH = (
  <img src="/assets/img/country-flags/ZH.png" height={24} alt="中文" />
)

const logoSrcEN = 'assets/img/elamask-logo-text.png'

const logoSrcZH = 'assets/img/elamask-logo-text.png'

const HeaderContainer = styled(Container)`
  @media (max-width: 1200px) {
    > .container {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
`

const CRContainer = styled.div`
  @media (max-width: 576px) {
    background-color: #0a4754;
  }

  .cr-logo {
    height: 25px;
    cursor: pointer;
  }
`

function noop(){}
