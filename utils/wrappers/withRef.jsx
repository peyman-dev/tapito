"use client"
import React, { useRef } from 'react'

const withRef = (Component) => {
    return (props) => {
        const ref = useRef(null)
        return <Component {...props} ref={ref} />
    }
}

export default withRef