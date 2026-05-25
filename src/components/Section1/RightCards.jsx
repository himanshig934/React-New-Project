import React from 'react'
import cardimage from '../../images/gettyimages-2214991522-640x640.jpg';

export default function RightCards({items}) {
  return (
    <>
      <div className='relative h-full flex justify-center items-center rounded-4xl overflow-hidden'>

        {/* Image */}
        <img src={items.URL} alt="" className='h-full w-full object-cover rounded-4xl'/>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 flex flex-col justify-between p-6 rounded-4xl'>

          <h1 className='text-white text-3xl font-bold'>{items.number}</h1>

          <div className='text-white'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias laborum, ipsum tempore, 
              ullam consequatur nihil consectetu quasi repellendus consequuntur!</p>
          </div>
          <button className='text-white rounded-full' style={items.color}>submit</button>
        </div>

      </div>
    </>
  )
}