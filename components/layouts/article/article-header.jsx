import ArticleAuthor from '@/components/shared/article-author'
import ShareLinks from '@/components/shared/share-links'
import React, { memo } from 'react'

const ArticleHeader = memo(() => {
    return (
        <section className='w-full flex-between child:lg:w-1/2 h-[80vh] gap-10'>
            <div className='h-[65%] flex flex-col justify-between'>
                <div>
                    <h2 className='text-3xl font-IranSans-ExtraBold text-slate-800 leading-[46px]'>
                        میلی در یک بیانیه اعلام کرد: ۴۷۸ کیلوگرم طلا در بانک کارگشایی سپرده گذاشته‌ایم
                    </h2>
                    <p className='mt-5 font-IranSans-Medium text-slate-500'>
                        میلی می‌گوید مجموع تعهدش به کاربران، ۵۴۵ کیلوگرم طلای ۱۸ عیار است.

                    </p>
                </div>
                <div className='space-y-5'>
                    <ArticleAuthor />
                    <ShareLinks />
                </div>
            </div>
            <div>
                <img src="/images/microsoft-banner.png" className='rounded-2xl' alt="" />
            </div>
        </section>
    )
})

export default ArticleHeader