import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ShopContainer from '../component/ShopContainer'
import SideBar from '../component/SideBar'

const ATVSPages = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={3}>
          <SideBar  />
        </Col >
        <Col md={9} style={{marginTop: '62px'}}>
        <ShopContainer/>
        </Col>
      </Row>

    </Container>
  )
}

export default ATVSPages
