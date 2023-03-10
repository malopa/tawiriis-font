import { createContext,useEffect,useState} from "react";
import axios from 'axios';
import { useRouter } from "next/router";
// import { access } from "fs";


const AuthenticationContext = createContext();


export const AuthenticationProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [accessToken,setAccessToken] = useState(null)
    const [error,setError] = useState(null)

    const router = useRouter();


    useEffect(()=>{
        checkIfUserLoggedIn()
    },[])


    const login = async ({username,password})=>{

            const config = {
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }
            const body = {
                username,
                password
            }
            console.log(`${process.env.FONT_BASE_URL}api/login`)
            try{
                const {data} = await axios.post(`http://localhost:3000/api/login`,body,config)

                if(data.accessToken){
                    setAccessToken(data.access)
                    setUser(data.user)
                }
        
                return router.push('/dashboard')
            }catch(err){
                if(err.response && err.response.data){
                    setError(err.response.data.message)
                }else if(err.request){
                    setError("something went wrong")
                }else{
                    setError("somethinf went wrong")
                }
            }
        
    }


    const register = async ({username,password})=>{

        const config = {
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }
        const body = {
            username,
            password
        }
        console.log(JSON.stringify(body))

    const {data} = await axios.post(`${process.env.FONT_BASE_URL}api/register`,body,config)
    login({username,password})
    console.log("res",data)

    if(data.accessToken){
        setAccessToken(data.accessToken)
    }

    return router.push('/')
}


const logout = async ({username,password})=>{

    const config = {
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    }
    const body = {
        username,
        password
    }
    console.log(JSON.stringify(body))
    try{
        const {data} = await axios.post(`${process.env.FONT_BASE_URL}/api/logout`,body,config)
        setUser(null)
        setAccessToken(null)
    }catch(error){
        if(error.response && error.response.data){
            setError(error.response.data.message)
        }
    }


    return router.push('/auth/login')
    }


    const checkIfUserLoggedIn = async  ()=>{
        try{
            console.log("check token")
            const {data}= await axios.post(`${process.env.FONT_BASE_URL}api/user`)
            setUser(data.user)
            setAccessToken(data.access)
        }catch(error){
            if(error.response && error.response.data){
                setError(error.response.data.message)
            }else{
                setError("Something went wrong")
            }
        }
    }

    return(<AuthenticationContext.Provider 
    value={{user,accessToken,error,login,register,logout}}
    >
        {children}
    </AuthenticationContext.Provider>
    )
}



export default AuthenticationContext