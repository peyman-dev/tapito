import { Loader2 } from 'lucide-react'
import React from 'react'

const PrimaryButton = ({ children, className, disabled, ...props }) => {
    return (
        <button className={`w-full ${disabled ? "opacity-60" : "opacity-100"} h-10 rounded-md outline-none border border-Breeze-400 bg-Breeze-800 flex-center gap-2 px-4 text-sm text-white ${className}`} {...props} disabled={disabled}>
            {disabled ?
                <>
                    <Loader2 className='size-4 animate-spin' />
                    <span>
                        منتظر بمانید
                    </span>
                </>
                : children}
        </button>
    )

}


export default PrimaryButton