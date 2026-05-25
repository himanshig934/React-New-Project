import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const HeroBanner = () => {
  return (
    <div className='flex justify-center items-center gap-6 h-[80vh] py-6 px-14'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default HeroBanner
