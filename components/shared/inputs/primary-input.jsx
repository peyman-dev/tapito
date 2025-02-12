import React from 'react'
import WithErrorHandling from '../with-error-handling'

const PrimaryInput = ({
    children,
    register,
    placeholder,
    ...props
}) => {
    return (
        <input type="text" className='w-full h-10 rounded-md outline-none border border-Breeze-200 bg-Breeze-100 px-4 text-sm text-slate-800 placeholder:text-slate-500'
            autoComplete='off'
            {...props}
            placeholder={placeholder}
            {...register} />

    )
}

export default PrimaryInput