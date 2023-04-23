import React from 'react'
import UpNextItem from './UpNextItem'

const UpNext = () => {
  return (
    <div className='w-full h-full flex flex-col justify-between items-center'>
      <span className=' text-yellow-400 text-left self-start font-semibold text-xl'>Up next</span>
      <UpNextItem/>
      <UpNextItem/>
      <UpNextItem/>
    </div>
  )
}

export default UpNext