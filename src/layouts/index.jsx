// import { Outlet } from 'react-router'
import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function MainWebLayout() {
  return (
    <div>
       <header className='h-[98px] bg-primaryCol-100'>
          <NavBar/>
       </header>
       <Outlet/>
    </div>
  )
}
