import axios from "axios";
import cookie from 'cookie';
import { NextResponse } from "next/server";

export default function middleware(req){
    let refresh  =req.cookies.get("refresh")
    // const {refresh} = cookie.parse(req.headers.cookie)
    // console.log("refresh",refresh)

    let url = req.url;
    if(!refresh && url.includes('/dashboard')){
        return NextResponse.redirect('http://localhost:3000/auth/login')
    }

}