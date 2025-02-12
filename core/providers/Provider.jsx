"use client"
import React, { useEffect } from 'react'
import ToastProvider from './toast-provider'
import { ModalProvider } from '@/components/elements/modals/modal.element'
import AuthProvider from './auth-provider'
import RouteProtectionProvider from './route-protection-provider'

const Provider = ({ children }) => {

    useEffect(() => {
        // On page changed scroll to top
        window.scrollTo({
            behavior: "smooth",
            top: 0,
            left: 0
        })
    }, [])


    return (
        <ModalProvider>
            <ToastProvider>
                <AuthProvider>
                    <RouteProtectionProvider>
                        {children}
                    </RouteProtectionProvider>
                </AuthProvider>
            </ToastProvider>
        </ModalProvider>
    )

}

export default Provider