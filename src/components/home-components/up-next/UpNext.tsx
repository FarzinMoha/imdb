import React, { useState } from 'react'
import UpNextItem from './UpNextItem'
import Link from 'next/link'
import ArrowRightIcon from '@/icon/ArrowRightIcon'
import { pallet } from '@/pallet/pallete'

const UpNext = () => {
  const [iconColor , setIconColor] = useState(pallet.white)
  return (
    <div className='w-full h-full flex flex-col justify-between items-center'>
      <span className=' text-yellow-400 text-left self-start font-semibold text-xl'>Up next</span>
      <UpNextItem/>
      <UpNextItem/>
      <UpNextItem/>
      <Link onMouseEnter={()=>setIconColor(pallet.imdbYellow)} onMouseLeave={()=>setIconColor(pallet.white)} href='/' className='text-white text-left self-start font-semibold text-xl hover:text-yellow-400'>Browse trailers <ArrowRightIcon width={14} height={14} color={iconColor}/></Link>
    </div>
  )
}

export default UpNext