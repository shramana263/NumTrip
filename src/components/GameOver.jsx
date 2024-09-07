import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Advertise from './Advertise';
import { useGame } from '../contexts/NumContext';
import gameoveraudio from '../sounds/gameover.wav'
// import { useGame } from '../contexts/GameContext';

const GameOver = ({ score,arr, setArr, setGameover ,size,life,setLife,setDestroyHeart }) => {
  // const {score,arr, setArr, setGameover ,size,life,setLife,setDestroyHeart}=useGame()
  let add=0;
  const [isAdd,setAdd]=useState(false)
  // 
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("hello navigate")
    // navigate('/');
    window.location.reload(true)
  }
  
  const handleReshuffle=()=>{
    setLife(prevLife=>prevLife-1)
    // console.log(arr)
    let temparr=arr;
    const temp=[];
    for(let i=0;i<size;i++){
      for(let j=0;j<size;j++){
        temp.push(arr[i][j])
      }
    }
    for(let i=temp.length-2;i>=0;i--){
      let j= Math.floor(Math.random()*(i+1))
      // [temp[i],temp[j]]=[temp[j],temp[i]];
      let x= temp[i];
      temp[i]=temp[j];
      temp[j]=x;
    }
    let index=0;
    for(let i=0;i<size;i++){
      for(let j=0;j<size;j++){
        // const index=Math.floor(Math.random()*temp.length);
        temparr[i][j]=temp[index];
        index++;
      }
    }
    setArr(temparr)
    setGameover(false)
    // console.log("newarr-")
    // console.log(temparr)
    // console.log(arr);
    setDestroyHeart(true)
    setTimeout(() => {
      setDestroyHeart(false)
    }, 4000);
  }

  const handleAdd=()=>{
    setAdd(true)
    console.log(isAdd)

  }

  return (
    <>
      <div className='h-full w-full flex flex-col gap-5 justify-center items-center'>
        
        <div className='h-52 w-[400px] ms-24'>
          <img src="https://www.pngmart.com/files/17/Game-Over-Transparent-Background.png"
            alt="game over"
            className='h-full w-full' />
        </div>
        <div className='font-luckiest_guy text-2xl'>
          {
            life>1 && 
            <span>Oops! No more moves!</span>
          }
          {
            life==1 && <span>Oops! Ran out of hearts</span>
          }
          
        </div>
        <div className='flex gap-3 font-sans text-3xl'>
          <div>Your Score: </div><div className='text-red-800 font-bold'>{score}</div>
        </div>
        <div className='flex gap-5 mt-3'>
          <div className=' p-3 rounded-md bg-green-900 text-yellow-300 text-xl shadow-xl hover:cursor-pointer'
            onClick={handleClick}
          >
            Play Again
          </div>
          <div className='p-3 rounded-md bg-blue-500 text-white text-xl shadow-xl hover:cursor-pointer'
            
          >
            {
              life>1 && 
              <div className='flex justify-center items-center font-bold gap-3' onClick={handleReshuffle}>
                <span >Reshuffle</span>
                <span className='text-red-700 flex justify-center items-center'>(-1<FaHeart size={18} />)</span>
              </div>
            }
            {
              life==1 && 
              <div className='flex justify-center items-center font-bold gap-2' onClick={handleAdd}>
                <span>Reshuffle</span>
                <span className='text-white flex justify-center items-center'><MdOutlineSlowMotionVideo size={23} /></span>
                
              </div>
            }
          </div>
        </div>
        {
          isAdd && 
          // <div className='absolute h-full w-full'>
            <Advertise handleReshuffle={handleReshuffle} isAdd={isAdd} setAdd={setAdd} setGameover={setGameover} setLife={setLife}/>
          // </div>
        }
      </div>
      
    </>
  )
}

export default GameOver

