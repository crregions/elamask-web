import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const DApps = () => {
  const { t } = useTranslation('dapps')

  return (
    <Container>
      <Row className="mt-5 wow fadeInUp">
        <Col className="p-4" xs={12} sm={10}>
          <h2>{t('title')}</h2>

          <p className="my-3">{t('body')}</p>

        </Col>
      </Row>
    </Container>
  )
}

export default DApps
