import React, { ReactNode } from 'react'

const Ad300x250 = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-auto lg:mx-0 w-[300px] block h-[250px] bg-gray-100' > {children} </div>
  )
}

export default Ad300x250