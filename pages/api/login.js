import axios from "axios";
import cookie from 'cookie';
    const [loading,setLoading] = useState(false)


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
                const {data:accessResponse} = await axios.post(`http://127.0.0.1:8000/tawiri_api/api/v1/token/`,body,config);
                accessToken = accessResponse.access
                res.setHeader("Set-Cookie",cookie.serialize("refresh",accessResponse.refresh,{httpOnly:true,secure:false,sameSite:'strict',maxAge:60*60*24,path:'/'}))

                console.log(accessResponse)
                if(accessToken){
                    const userConfig = {
                        headers:{
                            'Accept':"application/json",
                            "Authorization":"Bearer "+accessToken
                        }
                    }
    
                const {data:userData} = await axios.get(`http://127.0.0.1:8000/tawiri_api/api/v1/user/`,userConfig)
                    console.log("user",userData)
                res.status(200).json({user:userData,access:accessToken})
                }

                
            }catch(error){
                if(error.response){
                    console.error(error.response.data)
                    console.error(error.response.status)
                    console.error(error.response.headers)
                    return res.status(401).status({message:error.response.data.detail});
                }else if(error.request){
                    return res.status(500).status({message:"Internal server error, contact admin"});
                }

                res.status(500).json({message:"Something went wrong"});

            }
            
          

            //  res.status(200).json(data)
    }else{

        res.setHeader('Allow',['POST']);
        res.status(405).json({message:`Method ${req.method} is not allowed` })
    }
}
