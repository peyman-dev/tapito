import { Badge } from '@/components/ui/badge'
import withMemorize from '@/utils/wrappers/withMemorize'
import { ArrowLeft, Circle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MostViewedCard = ({ ...props }) => {
    console.log(props)
    return (
        <article className='relative flex aspect-9/16 basis-4/5 lg:basis-auto w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden sm:aspect-3/4 sm:w-96 select-none'>
            <Image src={props.image} alt={props.title} fill className='object-cover' />
            <div className='absolute size-full h-[100%] bg-gradient-to-t from-black from-0% via-black/75 to-transparent bottom-0 left-0 right-0 p-5 flex flex-col justify-end items-end' dir='ltr'>
                <h4 className='text-white text-2xl font-bold'>
                    <blockquote>
                        <span className="px-1">
                            {props.title}
                        </span>
                    </blockquote>
                </h4>
                <p dir='rtl' className='text-xs line-clamp-2 mt-2 text-white/80'>
                    {props.description}
                </p>
                <div className='w-[90%] mx-auto h-px bg-white/20 my-6'></div>
                <div dir='rtl' className='flex items-center w-full justify-between'>
                    <div>

                        <p className='text-white text-sm font-IranSans-DemiBold'>
                            پیمان احمدی
                        </p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-r to-amber-200 font-IranSans-DemiBold mt-1 text-[10px] from-indigo-400'>
                            بنیان گذار تپیتو
                        </p>
                    </div>
                    <button className='px-4 py-1.5 bg-zinc-800 text-white flex-center text-xs gap-1'>
                        مطالعه بیشتر <ArrowLeft size={16} />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default withMemorize(MostViewedCard)