import AuthenticationContext from '@/context/auth';
import React,{useContext} from 'react'
import ProfileMenu from './ProfileMenu'
import ToggleMenu from './ToggleMenu'

export default function Nav() {

  const {user,logout}  = useContext(AuthenticationContext);

  return (
    <div className='w-full flex items-center h-[10vh] px-4 justify-between bg-blue-600  text-white'>
      <div className='flex items-center'>
        <ToggleMenu />
        <span className='px-4 flex justify-between items-center'>
          Tawiri
        </span>
      </div>
      <div>
        <span className="p-2">
          Welcome, {user?.username}
        </span>
        <ProfileMenu />
      </div>
    </div>
  )
}
