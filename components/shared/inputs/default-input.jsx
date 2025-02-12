import React from 'react'

const Input = ({
    ...props
}) => {
    return (
        <div>
            <input className='w-full h-9 text-zinc-800 outline-none focus:ring-2 ring-offset-2 px-4 text-sm border rounded-lg'
                placeholder={props["placeholder"]}
            />
        </div>
    )
}

export default Input