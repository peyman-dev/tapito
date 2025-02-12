import Link from 'next/link'
import React from 'react'

const ArticleAuthor = () => {
    return (
        <div className='mt-5 flex items-center gap-1'>
            <img src="/images/authors/peyman.jpg" className='size-6 rounded-full object-cover' alt="" />
            <div className='flex items-center gap-1 text-xs text-slate-500 font-IranSans-Medium'>
                <p>
                    درج شده توسط
                </p>
                <Link href={"/author/name"}>
                    پیمان احمدی
                </Link>
            </div>
        </div>
    )
}

export default ArticleAuthor