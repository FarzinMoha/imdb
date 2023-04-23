import { navLeftItemProps } from '@/type/type'
import React from 'react'

const NavLeftItem = ({leftIcon , rightIcon , content}:navLeftItemProps) => {
  return (
    <div className='p-2 mx-2 flex justify-center items-center cursor-pointer text-white hover:bg-lighterBlack rounded whitespace-nowrap'>
        {leftIcon && <span>{leftIcon}</span>}
        <span>{content}</span>
        {rightIcon && <span>{rightIcon}</span> }
        </div>
  )
}

export default NavLeftItem