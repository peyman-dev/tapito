import React from 'react'

const withMap = (items, Component) => {
  return (
    items.map((item, index) => (
        <Component key={index} {...item} />
    ))
  )
}

export default withMap