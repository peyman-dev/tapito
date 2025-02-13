"use client"
import Avatar from '@/components/elements/avatar';
import useMe from '@/core/hooks/use-me';
import { CalendarDays, User2 } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegMessage } from "react-icons/fa6";

const ArticleCard = () => {
    const me = useMe()
    const avatar = Avatar(me?._id)

    return (
        <article className='flex relative flex-col gap-4 md:gap-10 w-full md:flex-row md:h-[400px] p-4 border rounded-lg'>
            {/* Image Section */}
            <div className='w-full flex-center aspect-video md:h-full md:aspect-auto md:max-w-[40%]'>
                <img
                    src="/images/image1.jpg"
                    alt="Article cover"
                    className='size-full object-cover rounded-lg'
                />
            </div>

            {/* Content Container */}
            <div className='flex flex-col flex-1 gap-4 md:gap-6'>
                {/* Metadata Section */}
                <div className='flex flex-col gap-3'>
                    <p className='text-xs text-zinc-500'>
                        ۲۶ اسفند ۱۴۰۳
                    </p>

                    <div className="flex items-center gap-3">
                        <div dangerouslySetInnerHTML={{ __html: avatar }}></div>
                        <div>
                            <p className='text-sm font-medium'>
                                پیمان احمدی
                            </p>
                            <p className='text-xs text-zinc-500'>
                                @peymangeek
                            </p>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className='flex flex-col justify-between flex-1 gap-4'>
                    <div className='space-y-2'>
                        <h2 className='text-lg md:text-2xl font-IranSans-ExtraBold leading-tight'>
                            این یک عنوان تستی جهت تست می‌باشد
                        </h2>
                        <p className='text-sm md:text-base text-zinc-500 line-clamp-2'>
                            این یک عنوان تستی جهت تست می‌باشد
                        </p>
                    </div>

                    <button className='primary-gradient text-sm px-4 py-2 rounded-md w-full md:w-auto text-center'>
                        مشاهده مقاله
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ArticleCard