import Link from 'next/link'
import React from 'react'
import { Link as LinkIcon } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
const ShareLinks = () => {
    return (
        <div className='flex items-center gap-3 text-slate-600'>
            <p className='font-IranSans-Bold '>
                اشتراک گذاری:
            </p>

            <div className="flex-center gap-3">
                <Link href={""}>
                    <LinkIcon className='size-4'/>
                </Link>
                <Link href={''}>
                <FaXTwitter />
                </Link>
                <Link href={''}>
                <FaWhatsapp />
                </Link>
                <Link href={''}>
                <FaTelegramPlane />
                </Link>
            </div>
        </div>
    )
}

export default ShareLinks