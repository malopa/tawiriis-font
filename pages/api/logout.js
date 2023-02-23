import cookie from 'cookie';
export function async (req,res){
        res.setHeader('Set-Cookie',cookie.serialize('refresh','',
                {httpOnly:true,
                secure:false,
                expire:new Date(0),
                sameSite:'strict',
                path:'/'}))

        res.status(200).json({msessage:'user has been logged out'})
}