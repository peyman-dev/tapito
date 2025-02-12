import Link from 'next/link'
import React from 'react'

const SidebarNewsCard = () => {
  return (
    <Link href={""} className='flex items-center gap-4 h-[80px]'>
        <div className='min-w-[80px] min-h-[80px] rounded-md bg-gradient-to-tr from-black to-zinc-700'></div>
        <div className='flex flex-col justify-between h-full'>
            <h3 className='font-IranSans-Medium text-slate-700 text-sm'>
            اپل احتمالاً پاوربیتس پرو 2 را 23 بهمن معرفی می‌کند
            </h3>
            <p className='text-slate-400 text-xs'>
                9 دقیقه پیش
            </p>
        </div>
    </Link>
  )
}

export default SidebarNewsCard