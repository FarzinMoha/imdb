import SlideItem from '@/components/components/slider/SlideItem'
import SlideShow from '@/components/components/slider/SlideShow'
import WhatWatchSlideItem from '@/components/components/slider/WhatWatchSlideItem'
import InsideTitle from '@/components/title/InsideTitle'
import Title from '@/components/title/Title'
import ArrowRightIcon from '@/icon/ArrowRightIcon'
import { pallet } from '@/pallet/pallete'
import Link from 'next/link'
import React from 'react'

const WhatToWatch = () => {
  const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
  return (
    <section className="flex flex-col w-screen justify-start items-start px-10 py-5 max-[1024px]:px-7 max-[1024px]:py-10 max-[400px]:px-[5px] max-[1024px]:bg-lightBlack max-[1024px]:mt-5">
        <div className='w-full flex justify-between items-center '>
            <Title title = 'What to watch' />
            <Link href='/' className=' text-blue'>Get more recommendations <span><ArrowRightIcon width={12} height={12} color={pallet.blue}/> </span></Link>
        </div>
        <InsideTitle titleIcon text1='Top picks' text2='TV shows and movies just for you' />
        <Link href='/' className='text-blue my-2 text-sm hover:underline'>Sign In</Link>
        <div className='w-full h-[550px] mt-5'>
        <SlideShow  buttonUp slidesToScroll={1} slidesToShow={5} indicators={true}>
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
          <WhatWatchSlideItem height={550} />
        </SlideShow>
        </div>
    </section>

  )
}

export default WhatToWatch