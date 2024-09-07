import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchUser } from '../services/user-api'
import { authLogout } from '../services/auth-api'
import Navbar from '../components/Navbar'
import { useGame } from '../contexts/NumContext'

const AuthLayout = () => {
    const navigate = useNavigate()
    const { user, token, setUser, setToken } = useStateContext()
    const [isLogoutReady, setLogoutReady] = useState(false)
    const { life } = useGame()
    const authUser = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser
    })

    
    if (!token) {
        console.log("no token")
        navigate('/landing')
    }

    

    

    return (
        authUser.isLoading ? <div>Loading...</div> :
            <>
                <div className=''>
                    <Navbar />
                    <main>
                        {/* <h3>AuthLayout</h3> */}
                        <Outlet />
                    </main>
                </div>

            </>
    )
}

export default AuthLayout
