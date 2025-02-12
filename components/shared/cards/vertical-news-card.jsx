import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React, { memo } from 'react'

const VerticalNewsCard = memo(({ data }) => {
  return (
    <article className='relative h-[354.83px] overflow-hidden rounded-3xl w-full'>
      <img src={data?.img} className='size-full object-cover' alt="" />
      <div className='size-full gap-4 pb-4 px-4 absolute z-[1] bg-gradient-to-t from-slate-800 to-slate-800/50 top-0 flex items-end flex-col justify-end left-0 text-white'>
        <div>
          <Badge className={"bg-blue-900 font-IranSans-Light py-[3px] px-3"}>
            تکنلوژی
          </Badge>
        </div>

        <div >
          <h3 className='text-[17px] line-clamp-3 font-IranSans-Bold text-end'>
            نگاهی به «کد منبع»؛ جذاب‌ترین نکات کتاب خاطرات جدید بیل گیتس
          </h3>
        </div>
        <div>
          <div className="flex-center gap-2 text-sm">
            <p>
              پیمان احمدی
            </p>
            <div className='w-2 h-4 bg-amber-500 rounded-lg'></div>
          </div>
          
        </div>

      </div>

      <Link href={`/articles/${data?.id}`} className='absolute size-full top-0 left-0 z-[2]'>
      </Link>
    </article>

  )
})

export default VerticalNewsCard