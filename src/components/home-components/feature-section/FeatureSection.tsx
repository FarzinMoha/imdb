import FeatureSileItem from '@/components/components/slider/FeatureSileItem'
import SlideShow from '@/components/components/slider/SlideShow'
import Title from '@/components/title/Title';
import React from 'react'

const FeatureSection = () => {
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
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }
];
  return (
    <section className="flex flex-col w-screen justify-start items-start px-10 py-3 max-[1024px]:px-7 max-[1024px]:py-10 max-[400px]:px-[5px] max-[1024px]:bg-lightBlack max-[1024px]:mt-5">
      <Title title='Featured today' />
    <div className="w-4/6 h-[300px] max-[1024px]:w-full">
        <SlideShow slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings} >
          <FeatureSileItem height={250} type='photos'/>
          <FeatureSileItem height={250} type='photos'/>
          <FeatureSileItem height={250} type='photos'/>
          <FeatureSileItem height={250} type='photos'/>
          <FeatureSileItem height={250} type='photos'/>
          <FeatureSileItem height={250} type='photos'/>
          <FeatureSileItem height={250} type='photos'/>
          <FeatureSileItem height={250} type='photos'/> 
          <FeatureSileItem height={250} type='photos'/>
        </SlideShow>
    </div>
  </section>
  )
}

export default FeatureSection


