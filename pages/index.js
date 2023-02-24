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
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({children}) {
  const [open,setOpenDialog] = useState(false);
  const [username,setUsername] = useState("");
  

  const handleChange= ()=>{
    alert("Do something")
  }


  return (
    <div>
      <div className='flex h-[10vh] bg-white justify-between items-center'>
        <div></div>
        <div >
          <Link href="/auth/login" className='py-2 hover:bg-green-400 rounded-sm m-2 px-4 bg-green-400' >Log In</Link>
          <Link href="/auth/signup" className='py-2 hover:bg-green-400 m-2 px-4 rounded-sm bg-green-400'>Register</Link>
        </div>
      </div>
      <h1>Tawiri blog post </h1>
      
    </div>

    )
}
