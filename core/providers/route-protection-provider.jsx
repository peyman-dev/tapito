"use client"
import React, { useEffect, useState } from 'react'
import useMe from '../hooks/use-me'
import { usePathname, useRouter } from 'next/navigation'
import protectedRoutes from '../routes/protected.routes'
import { useModal } from '@/components/elements/modals/modal.element'
import NotAuthorized from '@/components/elements/modals/not-authorized'

const RouteProtectionProvider = ({ children }) => {
  const me = useMe()
  const route = usePathname()
  const [isProtected, setIsProtected] = useState(false)
  const { openModal } = useModal()

  const navigate = useRouter()
  const isUserAdmin = me?.role === "ADMIN"

  useEffect(() => {
    protectedRoutes.forEach(_route => String(route).startsWith(_route) && !isUserAdmin && setIsProtected(true))
  }, [isUserAdmin, route])

  useEffect(() => {
    if (isProtected) {
      openModal(<NotAuthorized />, {
        onClose: () => {
          navigate.replace("/")
        }
      })
    }
  }, [isProtected])

  return (
    <>
      {children}
    </>
  )

}


export default RouteProtectionProvider