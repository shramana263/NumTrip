import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { IoMdLogOut } from 'react-icons/io'
import { authLogout } from '../services/auth-api'
import { useStateContext } from '../contexts/StateContext'

const LogoutBtn = (props) => {
    // const {setLogoutReady}={...props}
    const { user, token, setUser, setToken } = useStateContext()
//    const handleClick=()=>{
//     console.log('Happy Inside');
    
//     onLogout()
//    }

const logout = useMutation({
    mutationFn: authLogout,
    onSuccess: () => {
        setUser({});
        setToken(null);
        console.log("logout Successful")
        // navigate('/landing')
    },
    onError: (err) => {
        console.log(err)
    }
})

const onLogout = () => {
    console.log("hello logout")
    // ev.preventDefault();
    logout.mutate()
}

  return (
    <>
      <div className='text-white hover:cursor-pointer z-10 hover:text-blue-300' onClick={onLogout} >
                        <IoMdLogOut size={25} />
                    </div> 
    </>
  )
}

export default LogoutBtn
