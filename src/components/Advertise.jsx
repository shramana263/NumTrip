import React, { useEffect, useRef, useState } from 'react'
import video from '../video/add2.mp4'
import { IoMdClose } from "react-icons/io";

const Advertise = ({ handleReshuffle,isAdd,setAdd,setGameover,setLife }) => {
  const videoRef = useRef()
  const [close, setClose]=useState(false)
  useEffect(() => {
    videoRef.current.play();
    setTimeout(() => {
      setClose(true)
      // handleReshuffle();
      // setAdd(false)
    }, 5000);
  },[])

  return (
    <>
      <div className='absolute top-0 left-0 h-[100vh] w-full bg-white z-10 flex justify-center items-center'>
        {/* <div className='flex justify-center items-center'>
          Advertisement
        </div> */}
        <video src={video} ref={videoRef} className='h-[92vh] w-full'></video>
        {
          close && 
          <div onClick={()=>{handleReshuffle();setLife(1)}}
          className='absolute top-10 right-10'
          ><IoMdClose size={30} /></div>
        }
      </div>

    </>
  )
}

export default Advertise
