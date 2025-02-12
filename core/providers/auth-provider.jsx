import React, { useEffect, useState } from 'react'
import { getMe } from '@/app/actions'
import userStore from '../stores/user.store'
import { Loader2 } from 'lucide-react'

const AuthProvider = ({ children }) => {
    const { setUser } = userStore()
    const [isLoading, setIsLoading] = useState(true)

    const fetchMe = async () => {
        try {
            const res = await getMe()
            setUser(JSON.parse(JSON.stringify(res?.data)))
        } catch (error) {
            console.error('Failed to fetch user data', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMe()
    }, [])

    if (isLoading) {
        return <div className='size-full fixed top-0 right-0 flex-center bg-black/50 z-[70]'>
            <div className='size-[320px] rounded-md bg-white flex-center'>
                <Loader2 className='text-4xl animate-spin' />
            </div>

        </div>
    }

    return <>{children}</>
}

export default AuthProvider