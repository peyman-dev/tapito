import Content from '@/components/layouts/dashboard/dashboard.content'
import Sidebar from '@/components/layouts/dashboard/sidebar'
import React from 'react'

const DashboardLayout = ({ children }) => {


  return (
    <main className='flex bg-white gap-10 min-h-screen'>
      <Sidebar />
      <Content children={children} />
    </main> 
  )
}

export default DashboardLayout