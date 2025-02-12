"use client"
import { MoonIcon, Search, User2 } from 'lucide-react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AuthButton from '../elements/auth-button';
import { GiHamburgerMenu } from "react-icons/gi";

const ClientHeader = () => {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const windowScroll = window.scrollY;

            if (windowScroll > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <header className='pb-10'>
            {/* Windows navbar */}
            <nav className='w-full h-20 fixed bg-white z-50'>
                <div className='container child:max-h-max child:flex child:items-center child:gap-4 h-full flex items-center justify-between'>
                    <div className='!gap-10'>
                        <Link href="/" className='size-10 font-sans font-bold text-2xl bg-gradient-to-tr from-zinc-950 to-zinc-700  text-white flex-center'>
                            T
                        </Link>

                        <div className="flex text-zinc-800 text-[15px] font-IranSans-Regular items-center gap-6">
                       
                            <Link href={""}>
                                تکنولوژی
                            </Link>
                            <Link href="">
                                برنامه نویسی
                            </Link>
                            <Link href="">
                                بیزنس
                            </Link>
                            <Link href="/contact-us">
                            تماس با ما
                            </Link>
                        </div>


                    </div>
                    <div>
                        <AuthButton />
                    </div>

                </div>

            </nav>

        </header>
    )
}

export default ClientHeader