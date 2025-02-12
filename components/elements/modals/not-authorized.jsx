"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NotAuthorized = () => {
    const { replace } = useRouter()
    
    return (
        <div className='p-4 flex-center flex-col  py-10'>
            <Image
                src={"/images/not-authorized.png"}
                alt="not-authorized"
                width={1000}
                height={1000}
                className='size-64 object-cover scale-[0.75]'
            />
            <div className="flex-center flex-col gap-3">
                <p className='text-center text-sm'>
                    شما به این صفحه دسترسی ندارید
                </p>
                <Button onClick={() => replace("/")}>
                    بازگشت
                </Button>
            </div>
        </div>

    )
}

export default NotAuthorized