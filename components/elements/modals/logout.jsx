"use client"

import withMemorize from "@/utils/wrappers/withMemorize";
import {Button} from "@heroui/button";
import {useState} from "react";
import {logout} from "@/app/actions";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

function LogoutModal() {
    const [isLoading, setIsLoading] = useState(false);
    const {refresh} = useRouter()


    const logoutAction = async () => {
        try {
            setIsLoading(true);
            const response = await logout()

            if (response.success) {
                setIsLoading(false);
                refresh()
            } else {
                toast.error("عملیات ناموفق بود, لطفا دوباره تلاش کنید")
                return false;
            }
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="flex-center flex-col gap-6 p-8">

            <div className='w-full flex-center h-[280px] '>
                <img
                    alt={"خروج از حساب"}
                    src={"/images/logout.png"}
                    className={' object-cover scale-75'}
                />

            </div>
            <div>
                <p className={"text-zinc-800"}>
                    آیا از انجام این کار اطمینان دارید؟
                </p>
            </div>
            <div className={'flex-center gap-4'}>

                <Button variant={"solid"} color={"primary"} size={"md"} radius={"sm"}>
                    انصراف
                </Button>

                <Button isLoading={isLoading} onClick={logoutAction} variant={"solid"} color={"danger"} size={"md"}
                        radius={"sm"}>
                    تائید, خروج
                </Button>
            </div>
        </div>
    )
}

export default withMemorize(LogoutModal)