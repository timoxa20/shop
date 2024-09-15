import React from 'react'
import Cards from '../Cards'
import { useFetching } from '../hooks/MyFetchSlider'
import { Carousel } from '../Carousel';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

const SlideAccessories = () => {
   
 const boats = useSelector(state => state.slider.boats)
    return (
        <div>
            <Carousel>
                {boats.map(({ url, title, price, id }) =>
                    <SwiperSlide key={id}>
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default SlideAccessories
