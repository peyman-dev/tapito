import withMemorize from '@/utils/wrappers/withMemorize'
import classNames from 'classnames'
import React from 'react'

const Component = ({
    title,
    className,
    fontSize,
    color
}) => {
    const cn = classNames(`font-IranSans-Bold  text-zinc-900 ${fontSize ? fontSize : "lg:text-3xl"}`)
    
    return (
        <div className={`flex items-center gap-2 lg:gap-3 ${className}`}>
            <div className={`lg:w-2 w-2 h-5 lg:h-6 rounded-md ${color ? color : "bg-black"}`}></div>
            <h3 className={cn}>
                {title}
            </h3>

        </div>
    )
}

const SectionTitle = withMemorize(Component)

export default SectionTitle