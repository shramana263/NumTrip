import React from 'react'
import { TbBoxModel2 } from "react-icons/tb";


const Sidebar = ({setSize}) => {
    const handleClick=()=>{
        console.log("board change")
        setSize(5)
    }
  return (
    <>
    <div className='flex justify-center items-center h-full w-20 p-2 pt-32 pb-6 bg-transparent text-white'>

      <div className='border-4 bg-purple-800 rounded-full p-2' onClick={handleClick}><TbBoxModel2 size={40}/></div>
      <div className='flex justify-center items-center absolute h-48 w-34'>
        {/* <div className='w-full h-1/3'>5 x 5</div> */}
      </div>
    </div>
    </>
  )
}

export default Sidebar
