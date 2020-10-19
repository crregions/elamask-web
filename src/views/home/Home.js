import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <HomeContainer className="home">
      <Container fluid="xl">
        <Row className="ml-3 mt-3 pb-5 wow fadeInUp" height={425}>
          <Col className="d-flex flex-column justify-content-center pt-3">
            <h3>
              {t(
                'hero.title',
                'Home'
              )}
            </h3>
          </Col>
        </Row>
      </Container>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: top right;
`
