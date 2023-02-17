import TwiraInput from "@/components/Input"
import PrimaryButton from "@/components/PrimaryButton"
import { Field, Form, Formik } from "formik"
import { useState } from "react"

export default function SignUp() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

  

    const hanleLogin = ()=>{
        alert("Hello ")
    }

    return (
        <div>
          <form className="w-[500px] bg-white p-4 rounded-md">

            <div className="font-bold py-4">Sign Up</div>

            <TwiraInput
            name='username'
            value={username}
            placeholder='Enter your email'
            onChange={(e)=>setUsername(e.target.value)}
            />
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
                <PrimaryButton 
                onClick={hanleLogin}
                title='Log In'/>
            </div>

          </form>
        </div>
    )
  }