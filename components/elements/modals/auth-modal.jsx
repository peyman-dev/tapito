import { getLogin } from '@/app/actions'
import LoginLayout from '@/components/layouts/auth/login'
import RegisterLayout from '@/components/layouts/auth/register'
import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form'

const AuthModal = memo(() => {
    const [isFetching, setIsFetching] = useState(false)
    const [tab, setTab] = useState("LOGIN")
    const defaultValues = tab == "LOGIN" ? {
        identifier: "",
        password: ""
    } : {
        username: "",
        fullName: "",
        email: "",
        password: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: defaultValues
    })


    const onSubmit = async (data) => {
        try {
            setIsFetching(true)
            const payload = data
            const result = await getLogin(payload)
            console.log(result)
            setIsFetching(false)
        } catch (error) {

        }
    }

    const switchTab = () => {
        setTab(tab == "LOGIN" ? "REGISTER" : "LOGIN")
    }



    return (
        <section className='size-full child:w-1/2 h-[400px] flex-center'>
            {tab == "LOGIN" ? <LoginLayout tabSwitch={switchTab} /> : <RegisterLayout tabSwitch={switchTab} />}


            <div className='flex-center'>
                <img src="/images/login.svg" className='size-full scale-75 object-cover' alt="" />
            </div>
        </section>
    )

})

export default AuthModal