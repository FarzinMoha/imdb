import { pallet } from '@/pallet/pallete'
import { titleProps } from '@/type/type'
import React from 'react'

const Title = ({title}:titleProps) => {
  return (
    <h2 className='font-black text-4xl mt-10 mb-7 ' style={{color:pallet.imdbYellow}}>
        {title}
    </h2>
  )
}

export default Title