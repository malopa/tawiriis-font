import React from 'react'
import NavLink from '@/components/links'
import NavAccord from '@/components/NavAccord'

export default function AdminSideBar() {
    return (
        <div className='h-[100vh]  bg-white w-[20%] overflow-y-auto'>
            <div className='p-2 text-center border-gray-600 mb-6'>Tawiriis</div>

            <ul className='p-2'>
                <NavLink title='Users' path="admin/users" />
            </ul>
        </div>
    )
}
