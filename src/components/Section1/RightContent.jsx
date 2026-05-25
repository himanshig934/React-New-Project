import React from 'react'
import RightCards from './RightCards'

export default function RightContent() {

const servicesdata = [
    {
      number: 1,
      URL : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    },

    {
      number: 2,
      URL : 'https://images.unsplash.com/photo-1494526585095-c41746248156',
    },

    {
      number: 3,
      URL : 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    }
  ]


  return (
    
    <>
     <div className='w-3/4 h-full p-4 flex gap-6'>
        {servicesdata.map((items, i) => (
          <RightCards items={items} key={i} />
        ))}
      </div> 
    </>
  )
}

 
