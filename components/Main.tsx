import React from 'react'
import Nav from './Nav'

export default function Main(props) {
  return ( <div className='w-[80%]'>
            <Nav />
            <div className='p-2 bg-gray-100 min-h-[90vh]' >
              {props.children}
            </div>
    </div>
  )
}
