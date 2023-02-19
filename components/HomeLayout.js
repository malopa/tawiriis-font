import AuthenticationContext from '@/context/auth'
import LoginPage from '@/pages/auth/login'
import Login from '@/pages/auth/login'
import Head from 'next/head'
import React, { useContext } from 'react'
import NavLink from './links'
import Nav from './Nav'
import NavAccord from './NavAccord'
import SideBar from './SideBar'

export default function HomeLayout({children}) {

  const {accessToken}  = useContext(AuthenticationContext);
  return (
    <div className='bg-white text-black'>

          {children}
   
    </div>
  )
}
