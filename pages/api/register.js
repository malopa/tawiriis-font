import axios from "axios";
import cookie from 'cookie';

export default async (req,res) =>{

    if(req.method === "POST"){
            const {first_name,middle_name,last_name,email,password} = req.body;
            const config = {
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }

            const body = {
                first_name,
                middle_name,
                last_name,
                email,
                password
            }

            try{
                const {data:userData} = await axios.post(`${process.env.BASE_URL}tawiri_admin/api/v1/create_new_user`,body,config);
                res.status(200).json({user:userData})
            }catch(error){
                if(error.response){
                    return res.status(401).status({message:error.response.data.detail});
                }

                res.status(500).json({message:"Something went wrong"});

            }

    }else{

        res.setHeader('Allow',['POST']);
        res.status(405).json({message:`Method ${req.method} is not allowed` })
    }
}
