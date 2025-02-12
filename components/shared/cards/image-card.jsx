import Link from 'next/link'
import React from 'react'

const ImageCard = ({ children, href, ...props }) => {
  return (
    <Link href={href} {...props} className='relative hover:child:scale-110 duration-500 child:duration-500 child:!size-full child:object-cover size-full object-cover'>
      {children}
    </Link>

  )
}

export default ImageCard