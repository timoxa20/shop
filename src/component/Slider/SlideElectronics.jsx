import React from 'react'
import Cards from '../Cards'
import { useFetching } from '../hooks/MyFetchSlider'
import { Carousel } from '../Carousel';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

const SlideElectronics = () => {
    
const jetskis = useSelector(state => state.slider.jetskis)
    return (
        <div>
            <Carousel>
                {jetskis.map(({ url, title, price, id }) =>
                    <SwiperSlide key={id}>
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default SlideElectronics
