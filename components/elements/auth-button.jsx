'use client'
import {User2} from 'lucide-react'
import React, {useEffect} from 'react'
import AuthModal from './modals/auth-modal'
import {useModal} from './modals/modal.element'
import userStore from '@/core/stores/user.store'
import ProfileDropdown from './profile/dropdown'

const AuthButton = () => {
    const {openModal, setModalSize} = useModal()
    const {user, isLoggedIn} = userStore()

    useEffect(() => {
        setModalSize("3xl")
    }, [user])


    if (isLoggedIn) {
        return (
            <ProfileDropdown user={user}/>
        )
    } else {
        return (
            <button className='flex-center gap-2 px-4 py-2.5 rounded-md bg-Breeze-900 pt-2 text-sm text-white min-w-max'
                    onClick={() => openModal(() => <AuthModal/>)}>
                <span>
                    <User2/>
                </span>
                <span>
                    ورود | ثبت نام
                </span>
            </button>
        )
    }
}

export default AuthButton