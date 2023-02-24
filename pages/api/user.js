import axios from "axios";
import cookie from 'cookie';

export default async (req,res) =>{

    let accessToken = null;
    if(req.method === "POST"){

        if(!req.headers.cookie){
            return res.status(403).json({message:"Not Authorized"})
        }
           
        try{  
            const {refresh} = cookie.parse(req.headers.cookie)
            const config = {
                headers:{
                    'Accept':"application/json",
                    "Content-Type":"application/json"
                }
            }

            const body = {
                refresh
            }


            console.log("refresh token",refresh)

            const {data} = await axios.post('http://localhost:8000/tawiri_api/api/v1/token/refresh/',body,config)
            if(data && data.access){
                const userConfig= {
                    headers:{
                        'Authorization':'Bearer ' + data.access 
                    }
                }


                const {data:userData} = await axios.get('http://localhost:8000/tawiri_api/api/v1/user/',userConfig)
                console.log("data",data)
                res.status(200).json({user:userData,access:data.access});
            }
        }catch(error){
                if(error.response){
                    console.error(error.response.data)
                    console.error(error.response.status)
                    console.error(error.response.headers)

                    return res.status(401).status({message:error.response.data.detail});
                }

                res.status(500).json({message:"Something went wrong"});

            }
            
    }else{

        res.setHeader('Allow',['POST']);
        res.status(405).json({message:`Method ${req.method} is not allowed` })
    }
}
