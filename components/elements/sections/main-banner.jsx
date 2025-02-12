"use client"

import withAnimation from '@/utils/wrappers/withAnimation'
import React from 'react'

const HomeMainBanner = ({ className }) => {
  // This data will be fetched from the backend, its gonna be dynamic.

  return (
    <div className={`container sm:!px-20 relative sm:flex-row flex-col-reverse gap-10 w-full bg-black flex items-center !justify-between sm:h-[250px] p-10 ${className}`}>
      <div className='absolute inset-0 size-full bg-[url("/images/set-of-social-media-icon-in-doodle-style-isolated-on-black-background-hand-drawn-set-social-media-theme-illustration-vector.jpg")] bg-contain bg-repeat opacity-15'></div>
      <div className='relative flex-center flex-col sm:text-start sm:!justify-start sm:items-start text-center z-10'>
        <h3 className='text-[50px] font-IranSans-ExtraBold !text-white opacity-100'>
          تپیتو
          <span className='block text-[21px] text-zinc-200 mt-2 font-IranSans-Medium'>
            ما را در شبکه‌های اجتماعی دنبال کنید
          </span>
        </h3>
        <button className='bg-white text-black px-6 text-sm py-2 rounded-[5px] font-IranSans-Bold  mt-5'>
          دنبال کردن
        </button>
      </div>
      <div className='text-white opacity-100 mx-auto relative !w-full md:block sm:max-w-max flex items-center justify-center md:!m-0 md:scale-125 h-full pl-10 '>

        <img src="/images/follow.png" alt="" className='mx-auto size-full' />
      </div>
    </div>
  )
}


export default withAnimation(HomeMainBanner)