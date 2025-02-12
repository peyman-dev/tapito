import { Newspaper } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AuthorDetails = () => {
    return (
        <div className=' h-[260px] rounded-[20px] gap-6 overflow-hidden shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] bg-slate-100 flex'>
            <div className='h-full lg:min-w-[240px] bg-black'></div>
            <div className='size-full flex flex-col justify-between p-6'>
                <div>
                    <p className='text-zinc-900 font-IranSans-Bold text-2xl'>
                        پیمان احمدی
                    </p>
                    <p className='mt-2'>
                        {/* a description for author */}
                        <span className='text-zinc-600 font-IranSans-Medium text-sm'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                        </span>
                    </p>
                </div>
                <p className='text-zinc-600 font-IranSans-Medium text-sm'>

                    پیمان احمدی
                </p>


            </div>
        </div>
    )
}

export default AuthorDetails