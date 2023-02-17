import Link from 'next/link'
import React from 'react'

export default function NavLink({title,path}) {
  return (
    <li className='p-2 block w-full rounded-md hover:bg-gray-200 cursor-pointer transition duration-400 text-gray-600'>
        <Link className='block' href={`/${path}`}>
            {title}
        </Link>
    </li>
  )
}
