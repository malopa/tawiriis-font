import TwiraInput from "@/components/Input"
import PrimaryButton from "@/components/PrimaryButton"
import AuthenticationContext, {AuthenticationProvider} from "@/context/auth"
import {Field, Form, Formik} from "formik"
import Link from "next/link"
import {useContext, useState} from "react"

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const {login} = useContext(AuthenticationContext)

    const handleLogin = () => {
        if (!username || !password) return
        setLoading(!loading)
        login({username, password})
    }

    return (
        <div className="flex w-full  h-[100vh]">

            <form className="w-[500px] m-auto  bg-white p-4 rounded-md">
                <div className="text-center text-2xl">Tawiri</div>
                <div className="font-bold py-4">
                    <h1>Log In</h1>
                </div>
                <TwiraInput
                    name='username'
                    value={username}
                    placeholder='Enter your email'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="mt-4">
                    <TwiraInput
                        name='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    />
                </div>
                <div className="mt-4">
                    <PrimaryButton
                        onClick={handleLogin}
                        loading={loading}
                        title='Log In'/>
                </div>


                <div className="py-2 text-blue-400">Don't have an account? <Link href='/signup'>signup</Link></div>

            </form>
        </div>
    )
}