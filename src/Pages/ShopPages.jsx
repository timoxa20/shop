import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavBarIcons from '../component/NavBarIcons'
import Sale from '../component/Sale/Sale'
import ShopPageOneBlock from '../component/ShopPageOneBlock'
import Tabsk from '../component/Tabs'
import Footer from '../component/footer/Footer'


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
        <Col className='mt-5' md={12}>
          <Tabsk/>
        </Col>
        <Col className='mt-5' md={12}>
          <Sale/>
        </Col>
      </Row>
    </Container >
  )
}

export default ShopPages




