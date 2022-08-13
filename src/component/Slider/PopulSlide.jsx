import React from 'react'
import { SwiperSlide } from 'swiper/react';
import Cards from '../Cards'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFetching } from '../hooks/MyFetchSlider';
import { Carousel } from '../Carousel';

const PopulSlide = () => {


    return (
        <div>
            
            <Carousel>
                {useFetching('populSpare').map(({url, title, price, id}) =>
                    <SwiperSlide key={id} >
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default PopulSlide
