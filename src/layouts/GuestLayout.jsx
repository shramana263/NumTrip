import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'
import Navbar from '../components/Navbar'

const GuestLayout = () => {
    const navigate= useNavigate()
    const {token}= useStateContext()

    if (token){
        return navigate("/home");
    }
  return (
    <>
        <div>
          <Navbar/>
            {/* <h3>guestLayout</h3> */}
            <Outlet/>
        </div>
      
    </>
  )
}

export default GuestLayout
