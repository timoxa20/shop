import React from 'react'
import { Container, Col, Carousel, Row, ThemeProvider } from 'react-bootstrap'
import slider from '../assets/slider.jpg'
import Cards from '../component/Cards'
import Stock from '../component/Stocks'
import SliderCarousel from '../component/SliderCarousel'

const ShopPageOneBlock = () => {
  return (
    <div>
      <div className='d-flex justify-content-between'>
          <Col md={8}>
            <SliderCarousel />
          </Col>
          <Col md={3} className='mt-5'>
            <Stock />
          </Col>
        </div>
    </div>
  )
}

export default ShopPageOneBlock
