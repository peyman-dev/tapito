import React, { memo } from 'react'

const Container = memo(({ children, className }) => {

    return (
        <section className={`container ${className} w-[90%] mx-auto lg:w-full`}>
            {children}
        </section>
    )
})

export default Container