import React from 'react'
import Cards from '../Cards'
import { useFetching } from '../hooks/MyFetchSlider'
import { Carousel } from '../Carousel';
import { SwiperSlide } from 'swiper/react';

const SlideTires = () => {
    return (
        <div>
            <Carousel>
                {useFetching('populTires').map(({ url, title, price, id }) =>
                    <SwiperSlide key={id}>
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default SlideTires
