import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext';
import { authRegister } from '../services/auth-api';
import { useMutation } from '@tanstack/react-query';
// import { toast } from 'react-toastify';

const Signup = () => {
    const navigate=useNavigate()
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    // const confPasswordRef=useRef();
    const {setUser, setToken}= useStateContext();
    const registerMutation= useMutation({
        mutationFn:authRegister,
        onSuccess:(data)=>{
            console.log("data fetching: "+data)
            setUser(data.data)
            setToken(data.token)
            // toast.success("Registration Successful")
            console.log("Registration Successful")
            // navigate('/')
        },
        onError:(error)=>{
            // toast.error(error.response.data.message)
            console.log(error.response.data.message)
        }
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        // if(passwordRef.current.value===confPasswordRef.current.value){
            const payload={
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
            console.log(payload)
            registerMutation.mutate(payload)
        // }
    }


    return (
        <>
            <div className='flex flex-col gap-6 w-screen h-[92vh] items-center'>
                <div className='h-[92vh] w-full'>
                    <img src="https://img.freepik.com/premium-photo/digital-painting-mountain-landscape-with-waterfall-trees_567739-2839.jpg" 
                    alt="" className='h-full w-full' />
                </div>

                <div className="flex absolute justify-center items-center flex-col w-full h-[92vh] font-Caveat  ">
                    <div className='text-2xl mb-3 text-black'>CREATE YOUR ACCOUNT...</div>
                    <form onSubmit={handleSubmit} method="post" className="flex w-[800px] flex-col justify-center backdrop-brightness-90 items-center  
                     backdrop-blur-sm rounded-md pt-10 pb-5 shadow-lg text-xl">
                        {/* {% csrf_token %} */}

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)] text-white"><b>NAME</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="text" ref={nameRef} placeholder="Create username(Only letters and numbers)" required />
                        </div>

                        <br />


                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)] text-white" ><b>EMAIL ADDRESS</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="email" ref={emailRef} placeholder="Enter your email address" required />
                        </div>

                        <br />
                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)] text-white" ><b>CREATE PASSWORD</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="password" ref={passwordRef} placeholder="Create a password" required />
                        </div>

                        {/* <br />
                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)]"><b>CONFIRM PASSWORD</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="Password" ref={confPasswordRef} placeholder="Confirm your password" required />
                        </div> */}

                        <br />
                        <div className="flex justify-center items-center">
                            <button type="submit" className="border p-3 rounded-s-full rounded-e-full ps-5 pe-5
                             border-[#C2FFC5] font-bold text-[#C2FFC5] hover:text-black hover:bg-[#C2FFC5] hover:shadow-lg  hover:ps-6 hover:pe-6">SIGN UP</button>
                        </div>
                    </form>
                    <div className="m-3 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)] text-lg text-white">Already have an account? <Link to="/login" className="text-decoration-none font-bold text-[#C2FFC5]">Sign In</Link></div>

                </div>
            </div>

        </>
    )
}

export default Signup
