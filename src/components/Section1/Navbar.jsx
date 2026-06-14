import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="py-6">
      <div className="mx-auto lg:px-14 px-[10px]">
        <div className="flex items-center justify-between">
          
          {/* Left Side */}
          <div className="bg-gray-900 text-white text-[12px] px-4 py-2 rounded-full">
            <Link to ='/'><button className='uppercase tracking-[2px]'>Baack to Home </button></Link>
          </div>

          {/* Right Side */}
          <div className="bg-gray-300 text-gray-900 text-[12px] px-4 py-2 rounded-full">
            <Link to ='/Notes'><button className='uppercase tracking-[2px] font-[500]'>Add the Notes </button></Link>
          </div>    

        </div>
      </div>
    </div>
  )
}