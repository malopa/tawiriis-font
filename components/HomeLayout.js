import AuthenticationContext from '@/context/auth'
import LoginPage from '@/pages/auth/login'
import Login from '@/pages/auth/login'
import Head from 'next/head'
import React, { useContext,useEffect } from 'react'
import NavLink from './links'
import Nav from './Nav'
import NavAccord from './NavAccord'
import SideBar from './SideBar'

export default function HomeLayout({children}) {

  const {checkIfUserLoggedIn}  = useContext(AuthenticationContext);

  useEffect(()=>{
    checkIfUserLoggedIn()
  },[])

  return (
    <div className='bg-white text-black'>
    <Head>
        <title>tawiriis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full text-gray-900 flex'>
        
        <SideBar />

        <div className='w-[80%]'>
            <Nav />
            <div className='p-2 bg-gray-200 min-h-[90vh]' >
              {children}
            </div>
        </div>
        
      </main>

   
    </div>
  )
}
