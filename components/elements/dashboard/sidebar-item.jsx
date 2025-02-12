import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const SidebarItem = ({ icon, title, href }) => {
    return (
        <AnimatePresence>
            <div className='h-10 w-full flex items-center px-2 primary-gradient shadow-inner shadow-zinc-400/60 select-none cursor-pointer rounded-full child:!bg-transparent'>
                <div className='!size-10 child:size-5 opacity-80 rounded bg-zinc-50 flex-center'>
                    {icon}
                </div>
                <p>
                    {title}
                </p>
            </div>
        </AnimatePresence>
    )
}


export default SidebarItem