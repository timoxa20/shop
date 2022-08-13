import { useRef} from "react";
import {Swiper} from 'swiper/react';
import SwiperClass, {Navigation} from 'swiper';

import 'swiper/css';

const breakpoints = {
    577: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 15
    },
    769: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 30
    },
    1025: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 30
    },
    1200: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 30
    },
}



export const Carousel = ({children}) => {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }

    const onSwiper = (swiper) => {
        setTimeout(() => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
        })
    }

    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={15}
                navigation={navigation}
                onSwiper={onSwiper}
                breakpoints={breakpoints}
                loop={true}
            >
                {children}
            </Swiper>
        </>
    )
}
