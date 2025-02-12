"use client"

import * as React from "react"
import { LockKeyhole, LogOut, MessageCircle, Settings, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Avatar from "../avatar"
import Link from "next/link"

export function ProfileDropdown({ user }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const seed = user?._id // Replace with actual user data or random seed

  const avatar = Avatar(seed)

  return (
    <DropdownMenu open={isOpen} dir="rtl" onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="outline-none ring-0 child:outline-none child:ring-0">
        <button className="flex-center size-14 bg-zinc-100 rounded-2xl">
          <div
            className="size-14 child:scale-[.8] rounded-full"
            dangerouslySetInnerHTML={{ __html: avatar }}
          ></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 absolute left-0 !top-full" // اضافه کردن absolute و تنظیم top و left
        style={{ position: 'absolute', top: '120%', left: 0, zIndex: 1000 }} // تنظیمات پوزیشن
        side="left"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal flex items-center gap-2 text-xs">
          <div
            className="size-12 child:scale-[.8] bg-white flex-center rounded-full"
            dangerouslySetInnerHTML={{ __html: avatar }}
          ></div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.fullName}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup className="text-slate-700">
          {
            user.role == "ADMIN" && (
              <DropdownMenuItem >
                <Link className="flex items-center text-Breeze-800 gap-2" href="/dashboard">
                  <LockKeyhole className="ml-2 h-4 w-4" />
                  <span>پنل مدیریت</span>
                </Link>
              </DropdownMenuItem>
            )}
          <DropdownMenuItem >
            <Link className="flex items-center gap-2" href="/profile">
              <User className="ml-2 h-4 w-4" />
              <span>حساب کاربری</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center gap-2" href="/notifications">
              <MessageCircle className="ml-2 h-4 w-4" />
              <span>اعلانات</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center gap-2" href="/settings">
              <Settings className="ml-2 h-4 w-4" />
              <span>تنظیمات</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className=" text-red-600 p-1">
          <div className="flex items-center gap-2 h-8 rounded-md bg-red-500/10 px-2 w-full text-xs">
            <LogOut className="ml-2 h-4 w-4" />
            <span>خروج از حساب</span>
          </div>

        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}