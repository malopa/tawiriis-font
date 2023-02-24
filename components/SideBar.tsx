import React from 'react'
import NavLink from './links'
import NavAccord from './NavAccord'

export default function SideBar() {
  return (
    <div className='h-[100vh]  bg-white w-[20%] overflow-y-auto'>
            <div className='p-2 text-center border-gray-600 mb-6'>Tawiriis</div>
                
                <ul className='p-2'>
                <NavLink title='Dashboard' path="dashboard" />
                <NavLink title='Members' path="dashboard/members"  />
                <div className='mt-4 border-b border-gray-400  py-2 mb-2'>Apps</div>
                <NavAccord title='Admistrative' path='dashboard/wildlife' >
                    <NavLink title='Administative' path="dashboard/administrative" />
                </NavAccord>

                <NavAccord title='Wildlife' path='dashboard/wildlife'>
                    <NavLink title='Country' path="dashboard/wildlife/country" />
                    <NavLink title='Region' path="dashboard/wildlife/region" />
                    <NavLink title='District' path="dashboard/wildlife/district" />
                    <NavLink title='Ward' path="dashboard/wildlife/ward" />
                    <NavLink title='Village' path="dashboard/wildlife/Village" />
                    <NavLink title='Protection Status' path="dashboard/wildlife/protection_status" />
                    <NavLink title='Wildlife Area' path="dashboard/wildlife/wildlife_area" />
                    <NavLink title='Wildlife Area Location' path="dashboard/wildlife/wildlife_location" />
                    <NavLink title='Ecosystem' path="dashboard/wildlife/ecosytem" />
                    <NavLink title='Ecosystem' path="dashboard/wildlife/wild_ecosytem" />
                </NavAccord>

                <NavAccord title='Habitant' path='dashboard/habitant' >
                    <NavLink title='Habitant' path="dashboard/habitant" />
                </NavAccord>
               

                </ul>

        </div>
  )
}
