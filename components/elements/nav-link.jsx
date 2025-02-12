import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, exact, children, ...props }) => {
    return (
        <Link href={href || ""}>
            {children}
        </Link>
    )
}

export default NavLink