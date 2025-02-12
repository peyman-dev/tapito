import withMemorize from '@/utils/wrappers/withMemorize'
import React from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

const ContentEditor = ({ value, setValue }) => {
    return (
        <div>
            <ReactQuill
                value={value}
                onChange={(value, delta, source, editor) => {
                    setValue(value)
                }}
                className='w-full h-[300px] border-none child:!border-none child:bg-zinc-50 [&_.ql-toolbar]:bg-zinc-100 rounded-lg '

            />
        </div>
    )
}


export default withMemorize(ContentEditor)