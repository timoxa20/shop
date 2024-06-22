import React from 'react'
import {  Carousel } from 'react-bootstrap'
import slider from '../shared/assets/slider.jpg'

const SliderCarousel = () => {
    return (
        <>
        <Carousel className='mt-5' >
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
        </>
    )
}

export default SliderCarousel
