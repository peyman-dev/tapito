"use client"
import React from 'react'
import userStore from '../stores/user.store'

const useMe = () => {
    const { user, isLoggedIn } = userStore()

    return user
}

export default useMe