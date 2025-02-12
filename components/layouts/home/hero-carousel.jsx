"use client"
import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import MobileCarousel from './sliders/mobile.hero'
import WindowsCarousel from './sliders/windows.carousel'


const HeroSlider = memo(() => {

    return (
        <>
            <WindowsCarousel />
            <MobileCarousel />
        </>
    )
})

export default HeroSlider