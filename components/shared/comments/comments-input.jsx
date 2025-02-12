import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const CommentsInput = ({ onChange }) => {
    return (
        <div dir="rtl" className='border overflow-hidden rounded-lg'> 
    
            <ReactQuill
                theme="snow"
                dir="rtl" 
                className='child:rounded-sm h-[140px] child:!border-0  child:!font-IranSans-Regular'
                modules={{ toolbar: false }}
                onChange={(value, delta, source, editor) => {
                    if (onChange) {
                        onChange(value);
                    }
                }}
                placeholder='متن خود را وارد نمائید'
            />
            <div className='p-3 gap-3 text-sm flex items-center justify-end'>
                <button>انصراف</button>
                <button className='rounded-full px-6 py-1.5 bg-slate-700 text-white font-IranSans-Medium'>
                    ایجاد نظر
                </button>
            </div>
        </div>
    );
};

export default CommentsInput;