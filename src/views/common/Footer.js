import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

import { useTgLink } from 'hooks/useTgLink'

const Footer = () => {
  const { t, i18n } = useTranslation('layout')

  const tgLink = useTgLink(i18n.language)

  return (
    <FooterContainer as="footer" fluid="xl" className="wow fadeIn py-5">
      <Container>
        <Row className="pb-2">
          <Col sm={6} md={5} lg={7}>
            <img
              src="assets/img/cr-logo.svg"
              alt="CR Regions Logo"
              style={{ height: '50px' }}
            />

            <p className="py-2">
              {t('footer.A Community Supported Project of Cyber Republic')}
            </p>

            <h5 className="mt-4" style={{ color: '#318197' }}>
              {t('footer.Join the Community')}
            </h5>

            <p className="d-flex">
              <a href={tgLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  className="fa-2x mr-3"
                />{' '}
                {t('footer.Visit us on Telegram')}
              </a>
            </p>
          </Col>
          <Col sm={6} md={3} lg={3}>
            <h5 style={{ color: '#318197' }}>{t('footer.Resources')}</h5>

            <ul className="mt-4 resources-list">
              <li>
                <a
                  href="https://www.cyberrepublic.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.Cyber Republic Website')}
                </a>
              </li>
              <li>
                <a
                  href="https://elastos.info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.Elastos Info')}
                </a>
              </li>
              <li>
                <a
                  href="https://developer.elastos.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.Developer Website')}
                </a>
              </li>
              <li>
                <a
                  href="https://news.elastos.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.News & Updates')}
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <h5 style={{ color: '#318197' }}>{t('footer.Useful Links')}</h5>

            <ul className="mt-4 resources-list">
              <li>
                <a
                  href="https://www.elastoslinks.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.Elastos Links')}
                </a>
              </li>
              <li>
                <a
                  href="https://elanodes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.Elastos Supernodes')}
                </a>
              </li>
              <li>
                <a
                  href="https://elastos.academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.Elastos Academy')}
                </a>
              </li>
              <li>
                <a
                  href="https://nucleusconsole.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.Nucleus Console')}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4" style={{ fontSize: '0.8rem' }}>
            {t('footer.disclaimer')}
            <br />
            <br />
            {t('footer.rights_reserved')}
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled(Container)`
  @media (max-width: 1200px) {
    > .container {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
`
