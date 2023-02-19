import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import { Main } from 'next/document'
import NavLink from '@/components/links'
import PrimaryButton from '@/components/PrimaryButton'
import TawiriAlertDialog from '@/components/TawiriAlertDialog'
import { useState } from 'react'
import TwiraInput from '@/components/Input'
import OutilineButton from '@/components/OutilineButton'
import TwiraSpinner from '@/components/TwiraSpinner'
import TawiriAlert from '@/components/TawiriAlert'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({children}) {
  const [open,setOpenDialog] = useState(false);
  const [username,setUsername] = useState("");
  

  const handleChange= ()=>{
    alert("Do something")
  }
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold'>Some component to be used</h1>
      </div>
      <PrimaryButton 
      onClick={()=>setOpenDialog(!open)}   
      title="Open Dialog"  />

    <div className='my-2'>
      <TwiraSpinner />
    </div>

    <div className='my-2'>
    <OutilineButton 
      onClick={handleChange}   
      title="Open"  />

    </div>
    

    <div className='my-2'>
      <div>{username}</div>
    <TwiraInput 
      name='username' 
      value={username}
      placeholder='Enter Username'
      onChange={(e)=>setUsername(e.target.value)}
      />
    </div>
      
      <div className='my-2'>
      <TawiriAlertDialog 
      open={open} 
      setOpenDialog={setOpenDialog}
      />
      </div>
      
      <div>
        <TawiriAlert _status='success' />
      </div>

    </div>

    )
}
