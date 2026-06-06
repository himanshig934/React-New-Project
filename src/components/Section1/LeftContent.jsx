import React from 'react'
import Arrow from './Arrow'
import HeroText from './HeroText'

export default function LeftContent() {
    return (
        <>
            <div className='lg:w-1/3 lg:h-full lg:px-6 py-4 flex-col justify-between'>
                <HeroText />
                <Arrow />
            </div>
        </>
    )
}
