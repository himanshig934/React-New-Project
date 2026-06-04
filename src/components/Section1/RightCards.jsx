import React from 'react'
import cardimage from '../../images/gettyimages-2214991522-640x640.jpg';

export default function RightCards({items}) {
  return (
    <>
      <div className='relative h-full flex justify-center items-center rounded-4xl shrink-0 overflow-hidden'>

        {/* Image */}
        <img src={items.URL} alt="" className='h-full w-full object-cover rounded-4xl'/>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 flex flex-col justify-between p-6 rounded-4xl'>
          
          {/* number */}
          <div className='bg-white rounded-full h-10 w-10 justify-center items-center flex'>
            <h1 className='text-black text-[20px] font-bold'>{items.number}</h1>
          </div>

          {/* text */}

          <div className='text-white leading-[28px]'>
            <p>{items.text}</p>
          </div>

            {/* button */}
          <div className='justify-between text-sm'>
          <button className='text-white rounded-full px-8 py-2' style={{backgroundColor: items.color}}>{items.button}</button>
          <button className='text-white px-4 py-2 rounded-full' style={{backgroundColor: items.color}}><i class="ri-arrow-right-line"></i></button>
        </div>

        </div>
      </div>
    </>
  )
}





