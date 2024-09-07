import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useGame } from '../contexts/NumContext';
import { useStateContext } from '../contexts/StateContext';
import Music from './Music';
import { Link } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';
import Advertise from './Advertise';
const Navbar = ({life, setLife, destroyHeart}) => {
 
    const { token } = useStateContext()
    const [isPlay, setPlay]= useState(false)
    const [isAdd, setAdd]=useState(false)
    // useEffect(() => {
    //     setDestroyHeart(true)
    // }, [life])
    const handleClick = () => {
        onLogout()
    }
    return (
        <>
            <div className='bg-slate-900 text-white w-full h-[58px] flex justify-end items-center p-5 pe-20 ps-20 gap-3'>
                <Link to="/" className='font-bold flex fixed left-5 font-Caveat ps-20 text-lg'>Home</Link>

                {
                    !token &&
                    <div className='font-bold flex justify-center items-center gap-4'>
                        <Link to="/login" className='bg-purple-600 p-2 pe-3 ps-3 rounded hover:bg-purple-700'>Login</Link>
                        <Link to="/signup" className='border-2 border-transparent p-2 ps-3 pe-3 rounded hover:border-white'>SignUp</Link>
                    </div>
                }

                {
                    token && life &&

                    <div className='flex relative text-red-500 justify-center items-center gap-1'>
                        <span><FaHeart size={25} /></span>
                        <span className='text-2xl font-bold flex justify-center items-center'>{life}</span>
                        {
                            destroyHeart &&
                            <div className='absolute text-red-900 left-0 animate-slideNegative'>
                                <FaHeartBroken size={25} />
                            </div>
                        }


                    </div>
                }
                <Music />
                {
                    token &&

                    <LogoutBtn  />
                }
                {/* <div className=' border-2 bg-white text-black rounded p-2 hover:cursor-pointer'
                onClick={()=>{setAdd(true);setPlay(true)}}>
                    Add
                    {
                        isAdd &&
                    <Advertise setPlay={setPlay} isPlay={isPlay}/>
                    }
                </div> */}

            </div>

        </>
    )
}

export default Navbar
