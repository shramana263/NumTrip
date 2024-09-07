import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import GameOver from '../components/GameOver';
import Navbar from '../components/Navbar';
import { RiFlowerLine } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";

import { useGame } from '../contexts/NumContext';
import RowBlock from '../components/Rowblock';
// import { useGame } from '../contexts/GameContext';
// import GameOver from '../components/GameOver';


const testArray=[
  [2, 2, 8, 4],
  [4, 4, 4, 4],
  [4, 8, 8, 4],
  [8, 8, 4, 4]
]
const size = 4;
const Home = () => {
  // const [flag, setFlag] = useState(false);
  // const [bgColor, setBgColor]=useState('');
  // let tempCurrentNum = currentNum;
  const {pickupArray,baseNumbersArray,fillRandomNum,levelup,arr,score,gameover,setRestart,restart,tempArr,setArr}=useGame()

  useEffect(() => {
    for(let i=0;i<3;i++){
      pickupArray[i]=baseNumbersArray[i+1].number;
      // console.log(baseNumbersArray)
    }
    
    fillRandomNum();
    // setArr(prev=>tempArr)
    
  }, [])

  useEffect(() => {
    // console.log("effect-", arr)
    // console.log(pickupArray)
    // setLevelup(true)
  }, [pickupArray])
  


  return (
    <>
    <div className='flex h-[100vh] w-full overflow-hidden'>
      <img src="https://w0.peakpx.com/wallpaper/165/747/HD-wallpaper-beautiful-landscape-digital-art.jpg" alt="" className='h-full w-full'/>
    </div>

      <div className='h-[100vh] w-full flex items-center justify-between flex-col bg-transparent absolute top-0'>
        <Navbar/>
        <div className='text-violet-200 font-luckiest_guy text-6xl m-4'>
          num trend
        </div>
        <div className='flex'>
          <div className='h-[430px] w-[430px] bg-[#04020451] flex flex-col justify-center items-center '>
            {
              arr && arr.map((row, i) => (
                <RowBlock key={i} i={i} row={row}/>
              ))
            }
            {
              levelup &&
              // <div>
              <div className='absolute animate-slideUp text-[#cdff16] text-4xl drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)] font-extrabold'>
                LEVEL UP
              </div>
              // </div>

            }
          </div>
        </div>
        <div className='flex mt-5 text-2xl font-bold font-serif'>
          <h1>Score: </h1>
          {
            score && <div>{score}</div>
          }

        </div>

        {/* <div className='p-5 mt-5 bg-green-400 flex justify-between items-center w-96'>
          {
            currentNum.map((num, index) => (
              <div className='border p-8 border-black rounded-xl shadow-lg bg-yellow-700 text-xl font-bold text-white'
              >{num}</div>
            ))
          }
        </div> */}
        <ReStart/>
      </div>
      {
        gameover &&
        <div className='flex absolute z-10 h-full w-full top-0 bg-slate-500/20 backdrop-blur-md'>
          <GameOver/>
        </div>
      }
      {
        restart &&
        <div className='flex absolute top-0 justify-center items-center w-full'>
          <div className='flex flex-col gap-5 border rounded bg-slate-900 p-10 animate-slideDown'>
            <div className='text-white text-xl'>Want to restart the game? Your progress will be lost!</div>
            <div className='flex gap-5'>
              <div className='bg-yellow-500 rounded p-2 hover:cursor-pointer' onClick={() => { window.location.reload(true), setRestart(false) }}>Restart</div>
              <div className='text-white p-2 hover:cursor-pointer' onClick={() => setRestart(false)}>Cancel</div>
            </div>
          </div>
        </div>

      }


    </>
  )
}

export const ReStart = () => {
  const {setRestart}=useGame()
  return (
    <div className='rounded-xl shadow-md text-xl font-semibold bg-green-700 text-yellow-200 m-6 p-3 border-black w-52 hover:cursor-pointer flex justify-center items-center'
      onClick={() => setRestart(true)}
    >
      RESTART
    </div>
  )
}





export default Home
