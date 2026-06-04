import React from 'react'
import RightCards from './RightCards'

export default function RightContent() {

const servicesdata = [
    {
      number: 1,
      URL : 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      button: 'Satisfied',
      color: '#270861',
      text: 'Tech-savvy individuals seeking seamless digital banking experiences, instant payments, budgeting tools, and personalized financial insights to manage their growing income effectively.'
    },

    {
      number: 2,
      URL : 'https://plus.unsplash.com/premium_photo-1661767011483-feab300357ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      button: 'Underserved',
      color: '#6c0b2a',
      text: 'Families looking for secure savings plans, joint accounts, education funds, and smart financial management tools to support their future goals.'
    },

    {
      number: 3,
      URL : 'https://plus.unsplash.com/premium_photo-1661722273422-8d1723e8f905?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      button: 'Shopsy',
      color: '#026d50',
      text: 'Entrepreneurs who need efficient payment processing, cash-flow monitoring, business loans, and scalable banking solutions to accelerate growth.'
    },
    {
      number: 4,
      URL : 'https://plus.unsplash.com/premium_photo-1661599805048-5b5c9bdf5f44?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      button: 'Read More',
      color: '#246d02',
      text: 'Entrepreneurs who need efficient payment processing, cash-flow monitoring, business loans, and scalable banking solutions to accelerate growth.'
    }
  ]


  return (
    
    <>
     <div className='w-3/4 h-full p-4 flex gap-6 overflow-x-auto'>
        {servicesdata.map((items, i) => (
          <RightCards items={items} key={i} />
        ))}
      </div> 
    </>
  )
}

 
