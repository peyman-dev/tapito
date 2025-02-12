import { getLogin } from '@/app/actions'
import { useModal } from '@/components/elements/modals/modal.element'
import PrimaryButton from '@/components/shared/buttons/primary-button'
import PrimaryInput from '@/components/shared/inputs/primary-input'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


const Message = ({ message, success, visible, setVisible }) => {
    // Timeout visibility
    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 3000)
    }, [])

    if (success && visible) {
        return (
            <div className='flex-center flex-col h-10 w-full rounded-md bg-green-500 text-white gap-2'>
                <p className='text-sm'>{message}</p>
            </div>
        )
    }

    if (!success && visible) {
        return (
            <div className='flex-center flex-col h-10 w-full rounded-md bg-red-500 text-white gap-2'>
                <p className='text-sm'>{message}</p>
            </div>
        )
    }

}


const LoginLayout = ({ tabSwitch }) => {
    const [isMessageVisible, setIsMessageVisible] = useState(false)
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            identifier: "",
            password: ""
        }
    })

    const { closeModal } = useModal()

    const onSubmit = async (data) => {
        try {
            setIsFetching(true)
            const response = await getLogin(data)

            if (response.success) {
                toast.success("شما با موفقیت وارد شدید", {
                    onClose: () => {
                        closeModal()
                    }
                })
            } else {
                setMessage("اطلاعات وارد شده صحیح نمی‌باشد.")
                setIsMessageVisible(true)
                setIsSuccess(false)
            }

        } catch (error) {
            setMessage("اطلاعات وارد شده صحیح نمی‌باشد.")
            setIsMessageVisible(true)
        } finally {
            setIsFetching(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='size-full child:size-full'>


            <div className='h-full flex-center flex-col gap-4 px-6'>
                <div className='flex-center flex-col gap-2'>
                    <p className='text-xl font-IranSans-Bold text-slate-800'> ورود</p>
                    <p className='text-sm text-zinc-500'>خوشحالیم که دوباره می‌بینیمت :)</p>
                </div>
                <PrimaryInput placeholder={"ایمیل یا نام کاربری"} register={register("identifier")} />
                <PrimaryInput type="password" placeholder={"رمز عبور"} register={register("password")} />
                <Message message={message} success={isSuccess} visible={isMessageVisible} setVisible={setIsMessageVisible} />
                <PrimaryButton disabled={isFetching}>
                    ورود
                </PrimaryButton>
                <div className='flex-center flex-col text-[13px] gap-2 mt-2'>
                    <div className="flex-center gap-2">
                        <span>
                            گذرواژه خود را فراموش کردید؟
                        </span>
                        <button type="button" className="text-Breeze-700">
                            بازیابی گذرواژه
                        </button>
                    </div>
                    <div className="flex-center gap-2">
                        <span>
                            حساب کاربری ندارید؟
                        </span>
                        <button type="button" className="text-Breeze-700" onClick={tabSwitch}>
                            ثبت نام کنید
                        </button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default LoginLayout