"use client"
import React, { memo, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const WindowsCarousel = memo(() => {

    const items = [
        { id: 1, img: "https://picsum.photos/1600/900?1" },
        { id: 2, img: "https://picsum.photos/1600/900?2" },
        { id: 3, img: "https://picsum.photos/1600/900?3" }
    ]

    return (
        <div className='container lg:visible lg:block hidden invisible my-10 mt-20'>
            <Swiper
                loop
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                className='w-full h-[580px] rounded-3xl overflow-hidden'>
                {items.map((item) => (

                    <SwiperSlide key={item.id}>
                        <div className="size-full relative">
                            <img src={item.img} className='size-full object-cover' alt="" />
                            <div className='absolute top-0 right-0 bg-gradient-to-t from-black/60 z-50 size-full'></div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
})

export default WindowsCarousel