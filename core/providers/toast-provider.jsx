import React from 'react'
import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastProvider = ({ children }) => {
    return (
        <>
            <ToastContainer
                transition={Bounce}
                autoClose={2500}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
                className={"child:!font-IranSans-Regular !font-IranSans-Regular"}
                position='top-right'
            />
            {children}
        </>
    )
}

export default ToastProvider