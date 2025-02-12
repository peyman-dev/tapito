"use client"
import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import withCallback from '@/utils/wrappers/withCallback'
import { Carousel, CarouselContent } from '../ui/carousel'
import { cn } from '@/lib/utils'

const FlexCarousel = ({ children, className }) => {
    const autoPlay = useRef(Autoplay({
        stopOnInteraction: false,
    }))

    return (
        <Carousel
            className={cn(className)}
            plugins={[autoPlay.current]}
            onMouseEnter={() => autoPlay.current.stop()}
            onMouseLeave={() => autoPlay.current.reset()}
            opts={{
                loop: true,
                align: 'start',
                containScroll: 'trimSnaps',
                slidesToScroll: 1,
                dragFree: false
            }}
        >
            <CarouselContent className='!h-full child:!h-full child:!mx-2' dir='ltr'>
                {
                    children
                }
            </CarouselContent>
        </Carousel>
    )
}

export default withCallback(FlexCarousel, [])