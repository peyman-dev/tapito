"use client"
import withMemorize from '@/utils/wrappers/withMemorize'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, Home } from 'lucide-react'
import Logo from '@/components/elements/logo'
import SidebarItem from '@/components/elements/dashboard/sidebar-item'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => setIsOpen(!isOpen)

    const animates = {
        width: isOpen ? 300 : 80,
        paddingLeft: isOpen ? 14 : 0,
        paddingRight: isOpen ? 14 : 0,
    }


    return (
        <AnimatePresence>
            <motion.aside
                transition={{ duration: 0.8 }}
                initial={{ width: 80 }}
                animate={animates}
                className='h-screen relative border-l w-20 flex items-center justify-between flex-col py-4'>
                <div className="w-full">
                    <Logo />
                    <div className='w-full mt-6 space-y-1'>
                        <SidebarItem
                            icon={<Home />}
                            title={"داشبورد"}
                        />
                            <SidebarItem
                            icon={<Home />}
                            title={"داشبورد"}
                        />
                            <SidebarItem
                            icon={<Home />}
                            title={"داشبورد"}
                        />
                            <SidebarItem
                            icon={<Home />}
                            title={"داشبورد"}
                        />
                            <SidebarItem
                            icon={<Home />}
                            title={"داشبورد"}
                        />
                    </div>
                </div>
                <div>3</div>
                <button onClick={toggleSidebar} className='absolute px-1 max-w-max border-l border-y py-2 rounded-l-full top-0 bottom-0 -left-6 bg-white max-h-max m-auto'>
                    <ChevronLeft className={`size-4 duration-300 transition-all ${isOpen ? "rotate-180" : ""}`} />
                </button>
            </motion.aside>
        </AnimatePresence>
    )
}

export default withMemorize(Sidebar)