import axios from "axios";
import cookie from 'cookie';
import { NextResponse } from "next/server";

export default function middleware(req){
    let refresh  =req.cookies.get("refresh")?.value

    // console.log("first",refresh)

    let url = req.url;
    console.log("url",url)

    if(!refresh && url.includes('/dashboard')){
        return NextResponse.redirect('http://localhost:3000/auth/login')
    }

    if(refresh && !url.includes('/dashboard')){
        // return NextResponse.redirect('http://localhost:3000/dashboard')
    }


    if(refresh && !url.includes('/auth')){
        return NextResponse.redirect('http://localhost:3000/dashboard')
    }

}