import React from 'react'
import Cards from '../Cards'
import { useFetching } from '../hooks/MyFetchSlider'
import { Carousel } from '../Carousel';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

const SlideTools = () => {
    
    const snow = useSelector(state => state.slider.snow)
    return (
        <div>
            <Carousel>
                {snow.map(({ url, title, price, id }) =>
                    <SwiperSlide key={id}>
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default SlideTools
