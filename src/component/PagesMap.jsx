import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ShopContainer from './ShopContainer'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../const'

const PagesMap = ({ productName }) => {

  const history = useNavigate()

  return (
    <Container>
      <div >
        <Row className='mt-4'>
          <Col md={3}>
            <SideBar />
          </Col >
          <Col md={9} style={{ marginTop: '47px' }}>
            <ShopContainer >
              {productName.map(({ name, url, title, price, id }) =>
                <Col className='mt-3' key={id} md={4}>
                  <Cards id={id} name={name} img={url} title={title} price={price} />
                </Col>
              )}
            </ShopContainer>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default PagesMap
