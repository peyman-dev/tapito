import React, { useEffect, useRef } from 'react'

const useOutsideDetect = (action) => {
    const ref = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                action()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [ref])

    return ref
}

export default useOutsideDetect 