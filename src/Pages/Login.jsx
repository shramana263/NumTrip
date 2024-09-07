import React, { useRef } from 'react'
import { useStateContext } from '../contexts/StateContext'
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authLogin } from '../services/auth-api';

const Login = () => {
    const {setUser, setToken}=useStateContext();
    const emailRef= useRef()
    const passwordRef= useRef()
    const navigate= useNavigate();

    const loginMutation= useMutation({
        mutationFn:authLogin,
        onSuccess:(response)=>{
            console.log(response)
            setUser(response.data)
            setToken(response.token)
            navigate('/home')
        },
        onError:(err)=>{
            console.log(err)
        }
    })

    const handleSubmit=(e)=>{
        console.log("hello signin")
        e.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value)

        const payload={
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        loginMutation.mutate(payload)
    }

  return (
    <>
    <div className='flex flex-col gap-6 w-screen h-[90vh] items-center'>
              
              <div className='h-[92vh] w-full'>
                <img src="https://img.freepik.com/premium-photo/digital-painting-mountain-landscape-with-trees-lake_567739-2994.jpg"
                className='h-full w-full' alt="" />
              </div>

              <div className="flex justify-center items-center absolute font-Caveat flex-col w-3/5 h-[90vh]">
                    <div className='text-2xl mb-3'>SIGN IN TO YOUR ACCOUNT...</div>
                  <form onSubmit={handleSubmit} method="post" className="flex w-3/4 flex-col justify-center items-center  text-xl  gap-5 pt-10 backdrop-blur-sm backdrop-brightness-85 rounded-md pb-5 shadow-lg">
                      {/* {% csrf_token %} */}

                      <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                          <div className="w-2/4 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)] text-white"><b>EMAIL ID</b></div>
                          <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="email" ref={emailRef}  placeholder="e.g: abc@example.com" required />
                      </div>
                      <br/>
                      <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                          <div className="w-2/4 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)] text-white" ><b>PASSWORD</b></div>
                          <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="password" ref={passwordRef} placeholder="enter password" required />
                      </div>

                      <br />
                      
                      <div className="flex justify-center items-center">
                          <button type="submit" className="border-2 p-3 rounded-s-full rounded-e-full ps-5 pe-5 border-teal-700 font-bold text-teal-800
                           hover:text-white hover:bg-teal-800 hover:shadow-lg  hover:ps-6 hover:pe-6">SIGN IN</button>
                      </div>
                  </form>
                  <div className="m-3">** Don't have an account? <Link to="/signup" className="text-decoration-none font-bold text-teal-900">Sign Up</Link></div>

              </div>
          </div>
  </>
  )
}

export default Login
