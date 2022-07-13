import React from 'react'
import { Container, Col, Carousel, Row, ThemeProvider } from 'react-bootstrap'
import slider from '../assets/slider.jpg'
import Cards from '../component/Cards'
import Stock from '../component/Stocks'

const ShopPages = () => {
  return (
    <Container>
      <Row>
        <div className='d-flex justify-content-between'>
          <Col
            md={8}
          >
            <Carousel
              className='mt-5'
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
          >
            <Col md={3} className='mt-5'>
              <Stock />
            </Col>
          </ThemeProvider>

        </div>
      </Row>
    </Container >
  )
}

export default ShopPages
