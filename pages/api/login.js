import axios from "axios";
import cookie from 'cookie';

export default async (req,res) =>{

    let accessToken = null;
    if(req.method === "POST"){
            const {username,password} = req.body;
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

            try{
                const {data} = await axios.post(`${process.env.BASE_URL}api/token`,body,config);
                accessToken = data.accessToken

                if(accessToken){
                    const userConfig = {
                        headers:{
                            'Accept':"application/json",
                            "Authorization":"Bearer "+accessToken
                        }
                    }
    
                const userData = await axios.get(`${process.env.BASE_URL}api/user`,userConfig)
    
                res.status(200).json({user:userData,access:accessToken})
                }

                // inproduction change secure to true;
                res.setHeader("Set-Cookie",cookie.serialize("refresh",accessToken,{httpOnly:true,secure:false,maxAge:60*60*24,path:'/'}))
                // add sameSite:'strict'
                
            }catch(error){
                if(error.response){
                    console.error(error.response.data)
                    console.error(error.response.status)
                    console.error(error.response.headers)

                    return res.status(401).status({message:error.response.data.detail});
                }

                res.status(500).json({message:"Something went wrong"});

            }
            
          

            return res.json(data)
    }else{

        res.setHeader('Allow',['POST']);
        res.status(405).json({message:`Method ${req.method} is not allowed` })
    }
}
