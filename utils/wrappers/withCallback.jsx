"use client"
import React, { useCallback } from 'react'

const withCallback = (WrappedComponent, callback) => {
    return (props) => {
        const memoizedCallback = useCallback(callback, [])

        return <WrappedComponent
            {...props}
            callback={memoizedCallback}
        />
    }
}

export default withCallback