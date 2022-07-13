import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../component/SideBar'

const ATVSPages = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={4}>
          <SideBar  />
        </Col>
      </Row>

    </Container>
  )
}

export default ATVSPages
