import React from 'react'
import NavLink from './links'
import NavAccord from './NavAccord'

export default function SideBar() {
    return (
        <div className='h-[100vh]  bg-white w-[20%] overflow-y-auto'>
            <div className='p-2 text-center border-gray-600 mb-6'>Tawiriis</div>

            <ul className='p-2'>
                <NavLink title='Dashboard' path="dashboard"/>
                <NavLink title='Members' path="dashboard/members"/>
                <div className='mt-4 border-b border-gray-400  py-2 mb-2'>Apps</div>
                <NavAccord title='Admistrative' path='dashboard/wildlife'>
                    <NavLink title='Administative' path="dashboard/administrative"/>
                </NavAccord>

                <NavAccord title='Wildlife' path='dashboard/wildlife'>
                    <NavLink title='Wildlife' path="dashboard/wildlife"/>
                </NavAccord>

                <NavAccord title='Habitant' path='dashboard/habitant'>
                    <NavLink title='Habitant' path="dashboard/habitant"/>
                </NavAccord>
                <NavAccord title='Authentication' path='auth/login'>
                    <NavLink title='Login' path="auth/login"/>
                    <NavLink title='Sign Up' path="auth/signup"/>
                </NavAccord>
            </ul>
        </div>
    )
}
