import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { request_refresh } from '@/actions/auth';
import Head from 'next/head';
import { logout } from '../actions/auth';
// import SideBar from "@/components/SideBar"
import Nav from "../components/Nav";
import dynamic from 'next/dynamic'

const Layout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(request_refresh());
    }, [dispatch]);

    const Sidebar = dynamic(() =>
        import(`@/components/sidebars/${props.sidebarName}`)
    )

    return (
        <div className='bg-white text-black'>

            <Head>
                <title>Tawiriis</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className='w-full text-gray-900 flex'>
                <Sidebar />
                <div className='w-[80%]'>
                    <Nav />
                    <div className='p-2 bg-gray-200 min-h-[90vh]'>
                        {props.children}
                    </div>
                </div>
            </main>
        </div>
    );
};

Layout.defaultProps = {
    title: 'httpOnly Auth',
    content: 'Tutorial for showing you how to use httpOnly cookies for storing json web tokens'
}

export default Layout;