import React from 'react'
import Cards from '../Cards'
import { useFetching } from '../hooks/MyFetchSlider'
import { Carousel } from '../Carousel';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

const SlideMotors = () => {
    
    const boat = useSelector(state => state.slider.boat)
    return (
        <div>
            <Carousel>
                {boat.map(({ url, title, price, id }) =>
                    <SwiperSlide key={id}>
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default SlideMotors
