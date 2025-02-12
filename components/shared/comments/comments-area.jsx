import React from 'react'
import SectionTitle from '../section-title'

const CommentsArea = () => {
    return (
        <section className='mt-10'>
            <SectionTitle title={"نظرات ثبت شده"} fontSize={"text-xl"} />

            <div className='w-full h-[200px] flex-col gap-3 flex-center mt-5'>
                <img src="/images/no-comments.png" className='w-24 scale-90 object-cover' alt="" />
                <p className='text-center text-slate-500 font-IranSans-Light text-sm'>
                    فعلا نظری ثبت نشده است !
                </p>
            </div>
        </section>
    )
}

export default CommentsArea