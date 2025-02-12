import React from 'react'

const WithErrorHandling = ({ children, error, className }) => {
    return (
        <>
            {children}
            {
                error && (
                    <p className={`text-red-500 text-sm ${className}`}> * {error}</p>
                )
            }
        </>
    )
}

export default WithErrorHandling