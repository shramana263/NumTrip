import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'
import Music from '../components/Music'
import { ImLeaf } from "react-icons/im";

const Landing = () => {

  const { token } = useStateContext()
  const navigate = useNavigate()
  const handleClick = () => {
    if (token) {
      console.log(token)
      navigate("/home")
    }
    else {
      console.log("login")
      navigate("/login")
    }
  }

  return (
    <>
      {/* <div className='text-white absolute z-20 animate-spiralDown'><ImLeaf size={25}/></div> */}
      <div className='text-white absolute z-20 animate-leafFall1 h-[46vh]'><ImLeaf size={25} /></div>
      <div className='text-white absolute z-20 animate-leafFall2 h-[46vh]'><ImLeaf size={25} /></div>
      <div className='h-[92vh] w-full flex justify-center items-center'>

        <div className='h-full w-full '>
          <img src="https://img.pikbest.com/wp/202413/cartoon-illustration-landscape-game-background_10466527.jpg!sw800" alt=""
            className='h-full w-full'
          />
        </div>
        <div className='absolute z-10 flex justify-center items-center flex-col backdrop-blur-sm w-full h-[92vh] gap-5'>
          <Link to="/aboutgame" className='flex fixed top-5 right-10 justify-start text-2xl text-[#154f12] font-bold hover:text-teal-700 underline'>About Game</Link>
          <div className='text-8xl xl:text-[150px] font-bold font-luckiest_guy text-white drop-shadow-[0_2px_2px_rgba(1,10,3,2.9)]'>
            {/* NumTrip */}
            <span className='text-[#0BE6D1]'>N</span>
            <span className='text-[#4bf391]'>u</span>
            <span className='text-[#f4ff26f3]'>m</span>
            <span className='text-[#3fff31]'>T</span>
            <span className='text-[#ffb535]'>r</span>
            <span className='text-[#e230e8]'>i</span>
            <span className='text-[#c3ff2c]'>p</span>
            </div>

          <div onClick={handleClick} className='hover:cursor-pointer text-white text-xl 
        rounded-r-full rounded-l-full p-4 w-44 flex justify-center items-center bg-[#145c57] hover:bg-[#25726d] font-Caveat drop-shadow-[0_2px_2px_rgba(0,1,1,0.9)]'
          >
            <span className=''>Start Game</span></div>
        </div>

      </div>
    </>
  )
}

export default Landing
