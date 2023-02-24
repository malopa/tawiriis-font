import TwiraInput from "@/components/Input"
import Layout from "@/components/Layout"
import PrimaryButton from "@/components/PrimaryButton"
import AuthenticationContext, { AuthenticationProvider } from "@/context/auth"
import { Field, Form, Formik } from "formik"
import Link from "next/link"
import { useContext, useState } from "react"

export default function LoginPage() {
    const [first_name,setFirstName] = useState("")
    const [username,setUsername] = useState("")
    const [middle_name,setMiddleName] = useState("")
    const [last_name,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [cpassword,setCPassword] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)

    const {register,error} =  useContext(AuthenticationContext)

    const handleRegister = ()=>{
      if(!email || !password || !telephone_number)return
        setLoading(!loading)
        if(password !== cpassword){
          alert("Password do not match")
        }
        register({username,first_name,last_name,email,password})
    }

    return (
        <div className="flex w-full  h-[100vh]">

          <form className="w-[500px] m-auto  bg-white p-4 rounded-md">
            <div className="text-center text-2xl">Tawiri</div>
            <div className="font-bold py-4">
              <h1>Sign up</h1>
            </div>

            <TwiraInput
              name='first_name'
              value={first_name}
              placeholder='Enter your first name'
              onChange={(e)=>setFirstName(e.target.value)}
              />

            <div className="mt-4">

            <TwiraInput
              name='last_name'
              value={last_name}
              placeholder='Enter your last name'
              onChange={(e)=>setLastName(e.target.value)}
              />
            </div>
            <div className="mt-4">

            <TwiraInput
              name='middle_name'
              value={middle_name}
              placeholder='Enter your middle name'
              onChange={(e)=>setMiddleName(e.target.value)}
              />
              </div>

              <div className="mt-4">
              <TwiraInput
                name='email'
                value={telephone_number}
                placeholder='Enter your Email'
                onChange={(e)=>setPhone(e.target.value)}
                />
                </div>

                <div className="mt-4">
              <TwiraInput
                name='username'
                value={username}
                placeholder='Enter your username'
                onChange={(e)=>setUsername(e.target.value)}
                />
                </div>
                
            <div className="mt-4">
                <TwiraInput
                    name='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type='password'
                    />
            </div>
            <div className="mt-4">

                 <TwiraInput
                    name='cpassword'
                    placeholder='Confirm password'
                    value={cpassword}
                    onChange={(e)=>setCPassword(e.target.value)}
                    type='password'
                    />

             </div>

            <div className="mt-4">
                <PrimaryButton 
                onClick={handleRegister}
                loading={loading}
                title='Sign Up'/>
            </div>

            <div className="py-2 text-blue-400">Do yo have account already ? <Link href='/auth/login'>Log In</Link></div>

          </form>
        </div>

    )
  }