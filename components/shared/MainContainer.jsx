import React, { memo } from 'react'

const MainContainer = memo(({ children, className }) => {
  return (
    <main className={className}>
      {children}
    </main>
  )
})

export default MainContainer