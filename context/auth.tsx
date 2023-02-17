import { createContext,useState} from "react";
import axios from 'axios';
import { useRouter } from "next/router";


const AuthenticationContext = createContext();


export const AuthenticationProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [accessToken,setAccessToken] = useState(null)
    const [error,setError] = useState(null)

    const router = useRouter();


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
            console.log(JSON.stringify(body))

        const {data} = await axios.post('http://localhost:3001/api/login',body,config)
        console.log("res",data)

        if(data.accessToken){
            setAccessToken(data.accessToken)
        }

        return router.push('/')
    }


    return(<AuthenticationContext.Provider 
    value={{user,accessToken,error,login}}
    >
        {children}
    </AuthenticationContext.Provider>
    )
}



export default AuthenticationContext