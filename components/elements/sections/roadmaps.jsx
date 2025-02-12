import { Badge } from '@/components/ui/badge'
import React from 'react'
import { FaReact, FaNewspaper } from 'react-icons/fa6'
import { IconBase } from 'react-icons'

const Roadmaps = () => {
    return (
        <section className='grid grid-cols-4 gap-4 mb-40'>
            <article className='w-full h-[180px] p-6 text-white rounded-2xl bg-gradient-to-bl from-sky-600 to-sky-950'>
                <div className="h-full flex flex-col justify-between">
                    <div className='space-y-2'>
                        <FaReact className='text-5xl' />
                        <p>
                            برنامه نویسی
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Badge className={"max-w-max px-3"}>
                            نمایش بیشتر
                        </Badge>
                    </div>
                </div>
            </article>
            <article className='w-full h-[180px] from-blue-500 to-sky-400 p-6 text-white rounded-2xl bg-gradient-to-bl'>
                <div className="h-full flex flex-col justify-between">
                    <div className='space-y-2'>
                        <p>
                            تکنولوژی
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Badge className={"max-w-max px-3"}>
                            نمایش بیشتر
                        </Badge>
                    </div>
                </div>
            </article>
            <article className='w-full h-[180px] p-6 text-white rounded-2xl bg-gradient-to-bl'>
                <div className="h-full flex flex-col justify-between">
                    <div className='space-y-2'>
                        <FaReact className='text-5xl' />
                        <p>
                            برنامه نویسی
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Badge className={"max-w-max px-3"}>
                            نمایش بیشتر
                        </Badge>
                    </div>
                </div>
            </article>
            <article className='w-full h-[180px] p-6 text-white rounded-2xl bg-gradient-to-bl'>
                <div className="h-full flex flex-col justify-between">
                    <div className='space-y-2'>
                        <FaReact className='text-5xl' />
                        <p>
                            برنامه نویسی
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Badge className={"max-w-max px-3"}>
                            نمایش بیشتر
                        </Badge>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Roadmaps