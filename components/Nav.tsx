import React from 'react'
import ProfileMenu from './ProfileMenu'
import ToggleMenu from './ToggleMenu'

export default function Nav() {
  return (
    <div className='w-full flex items-center h-[10vh] px-4 justify-between bg-blue-600  text-white'>
      <div className='flex items-center'>
        <ToggleMenu />
        <span className='px-4'>
          Tawiri
        </span>
      </div>
      <div>
        <ProfileMenu />
      </div>
    </div>
  )
}
