import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavBarIcons from '../component/NavBarIcons'
import ShopPageOneBlock from '../component/ShopPageOneBlock'


const ShopPages = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <ShopPageOneBlock/>
        </Col>
        <Col className='mt-5' md={12}>
          <NavBarIcons />
        </Col>
      </Row>
    </Container >
  )
}

export default ShopPages




