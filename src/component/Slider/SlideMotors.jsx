import React from 'react'
import Cards from '../Cards'
import { useFetching } from '../hooks/MyFetchSlider'
import { Carousel } from '../Carousel';
import { SwiperSlide } from 'swiper/react';

const SlideMotors = () => {

    return (
        <div>
            <Carousel>
                {useFetching('populMotors').map(({ url, title, price, id }) =>
                    <SwiperSlide key={id}>
                        <Cards img={url} title={title} price={price} id={id} />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    )
}

export default SlideMotors
