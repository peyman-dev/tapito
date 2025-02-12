import { Button } from '@/components/ui/button'
import { Image, ImagePlus } from 'lucide-react'
import React, { useState } from 'react'

const FileUploader = ({ onFileSelect }) => {
    const [file, setFile] = useState(null)
    return (
        <div className='mt-4'>
            <p className='text-xs text-zinc-500'>
                تصویر مقاله
            </p>
            <div className='mt-4 w-full h-[240px] border border-dashed relative flex-center flex-col gap-3 rounded-lg'>
                <Image className='size-56 opacity-5 absolute'/>
                <p className='text-xs text-zinc-500'>
                    {file?.name || "فایل مورد نظر خود را انتخاب کنید"}
                </p>
                <Button className='text-xs !px-4 flex-center gap-2'>
                    <ImagePlus className='size-4' />
                    افزودن فایل
                </Button>
            </div>
        </div>
    )
}

export default FileUploader