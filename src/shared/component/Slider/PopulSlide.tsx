import React from 'react'
import { SwiperSlide } from 'swiper/react';
import Cards from '../Cards'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Carousel } from '../Carousel';
import { useSelector } from 'react-redux';

const PopulSlide = () => {

    const atvs = useSelector(state => state.slider.atvs)


    return (
        <div>
            
            <Carousel>
                {atvs.map(({url, title, price, id}) =>
                    <SwiperSlide key={id} >
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default PopulSlide
