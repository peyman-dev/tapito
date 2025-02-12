import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import VerticalNewsCard from '@/components/shared/cards/vertical-news-card'

const MobileCarousel = () => {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    const items = [
        {
            id: 1,
            img: "/images/image1.jpg"
        },
        {
            id: 2,
            img: "/images/image2.jpg"
        },
        {
            id: 3,
            img: "/images/image3.jpg"
        }
    ];

    return (
        <div className="h-[354.83px] overflow-hidden mt-16 w-[90%] mx-auto lg:hidden lg:invisible">
            <Carousel
                className="w-full relative"
                plugins={[autoplayPlugin.current]}
                opts={{

                    align: 'start',
                    loop: true,
                    dragFree: false,
                    containScroll: 'trimSnaps',
                    slidesToScroll: 1,
                }}
                dir="ltr"
                onMouseEnter={autoplayPlugin.current.stop}
                onMouseLeave={autoplayPlugin.current.reset}
            >
                <CarouselContent className="-ml-2">
                    {items?.map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-4/5 pl-2 min-w-[85%]"
                        >
                            <VerticalNewsCard data={_} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default MobileCarousel