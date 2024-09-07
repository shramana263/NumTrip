import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import GameOver from '../components/GameOver';
import Navbar from '../components/Navbar';
import { RiFlowerLine } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
// import GameOver from '../components/GameOver';

const baseNumbersArray = [
  {
    number:0,
    color:"bg-black",
    shortName:"x"
  },
  {
    number: 2,
    color: "bg-lime-600",
    iconColor:"text-green-700",
    shortName: "2"
  },
  {
    number: 4,
    color: "bg-purple-700",
    iconColor: "text-violet-800",
    shortName: "4"
  },
  {
    number: 8,
    color: "bg-yellow-700",
    iconColor:"text-yellow-800",
    shortName: "8"
  },
  {
    number: 16,
    color: "bg-pink-500",
    iconColor:"text-pink-700",
    shortName: "16"
  },
  {
    number: 32,
    color: "bg-sky-600",
    iconColor:"text-sky-700",
    shortName: "32"
  },
  {
    number: 64,
    color: "bg-green-500",
    iconColor:"text-green-600",
    shortName: "64"
  },
  {
    number: 128,
    color: "bg-violet-700",
    iconColor:"text-violet-800",
    shortName: "128"
  },
  {
    number: 256,
    color: "bg-red-300",
    iconColor:"text-red-400",
    shortName: "256"
  },
  {
    number: 512,
    color: "bg-green-800",
    iconColor:"text-green-900",
    shortName: "512"
  },
  {
    number: 1024,
    color: "bg-pink-700",
    iconColor:"text-pink-800",
    shortName: "1k"
  },
  {
    number: 2048,
    color: "bg-yellow-800",
    iconColor:"text-yellow-900",
    shortName: "2k"
  },
  {
    number: 4096,
    color: "bg-blue-800",
    iconColor:"text-blue-900",
    shortName: "4k"
  },
  {
    number: 8192,
    color: "bg-teal-700",
    iconColor:"text-teal-800",
    shortName: "8k"
  },
  {
    number: 16384,
    color: "bg-violet-300",
    iconColor:"text-violet-400",
    shortName: "16k"
  },
  {
    number: 32768,
    color: "bg-cyan-800",
    iconColor:"text-cyan-900",
    shortName: "32k"
  },
  {
    number: 65536,
    color: "bg-amber-600",
    iconColor:"text-amber-700",
    shortName: "65k"
  },
]
const testArray=[
  [2, 2, 8, 4],
  [4, 4, 4, 4],
  [4, 8, 8, 4],
  [8, 8, 4, 4]
]
const size = 4;
const App = () => {
  // const [flag, setFlag] = useState(false);
  // const [bgColor, setBgColor]=useState('');
  const [gameover, setGameover] = useState(false)
  const [restart, setRestart] = useState(false)
  const [levelup, setLevelup] = useState(false)
  const [destroyHeart, setDestroyHeart] = useState(false)
  const [score, setScore] = useState(0);
  const [life, setLife]=useState(5);
  const [arr, setArr] = useState([]);
  const tempArr = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  const [pickupArray, setPickupArray] = useState([2,4,8]);
  // let tempCurrentNum = currentNum;
  const fillRandomNum = () => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const index = Math.floor(Math.random() * pickupArray.length);
        tempArr[i][j] = pickupArray[index];
      }
    }
    setArr(tempArr)
  }

  useEffect(() => {
    for(let i=0;i<3;i++){
      pickupArray[i]=baseNumbersArray[i+1].number;
    }
    fillRandomNum();
    

  }, [])

  useEffect(() => {
    // console.log("effect-", arr)
    console.log(pickupArray)
    // setLevelup(true)
  }, [pickupArray])
  


  return (
    <>
    <div className='flex h-[100vh] w-full overflow-hidden'>
      <img src="https://w0.peakpx.com/wallpaper/165/747/HD-wallpaper-beautiful-landscape-digital-art.jpg" alt="" className='h-full w-full'/>
    </div>

      <div className='h-[100vh] w-full flex items-center justify-between flex-col bg-transparent absolute top-0'>
        <Navbar life={life} setLife={setLife} destroyHeart={destroyHeart}/>
        <div className='text-violet-200 font-luckiest_guy text-6xl m-4'>
          num trend
        </div>
        <div className='flex'>
          <div className='h-[430px] w-[430px] bg-[#04020451] flex flex-col justify-center items-center '>
            {
              arr && arr.map((row, i) => (
                <RowBlock key={i} i={i} row={row} arr={arr} setArr={setArr} pickupArray={pickupArray} setPickupArray={setPickupArray} 
                          levelup={levelup} setLevelup={setLevelup} setGameover={setGameover} setScore={setScore}
                          />
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
        <ReStart setRestart={setRestart} />
      </div>
      {
        gameover &&
        <div className='flex absolute z-10 h-full w-full top-0 bg-slate-500/20 backdrop-blur-md'>
          <GameOver score={score} arr={arr} setArr={setArr} size={size} setGameover={setGameover} life={life} setLife={setLife} setDestroyHeart={setDestroyHeart}/>
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

export const ReStart = ({ setRestart }) => {
  return (
    <div className='rounded-xl shadow-md text-xl font-semibold bg-green-700 text-yellow-200 m-6 p-3 border-black w-52 hover:cursor-pointer flex justify-center items-center'
      onClick={() => setRestart(true)}
    >
      RESTART
    </div>
  )
}

const RowBlock = ({row,i, arr, setArr, pickupArray, setPickupArray, levelup, setLevelup, setGameover,setScore }) => {
  // console.log(row)
  return (
    <div className='flex '>
      {
        row.map((rowElement, j) => (
          <NumberBlock key={j}  i={i} j={j} levelup={levelup} setLevelup={setLevelup} rowElement={rowElement} arr={arr} setArr={setArr} 
          pickupArray={pickupArray} setPickupArray={setPickupArray} setGameover={setGameover} setScore={setScore}
          />
        ))
      }
    </div>
  )
}

const NumberBlock = ({rowElement,i,j,arr,setArr, pickupArray,setPickupArray, levelup, setLevelup,setGameover, setScore}) => {
  // const [flag, setFlag] = useState(0);
  let flag=0
  const numberObject= baseNumbersArray.find(x=>x.number==rowElement)
  const [currentArray, setCurrentArray]=useState([...arr])
  // const handleClickBackup = () => {
  //   let clickedCell = 0
  //   let k = 0;
  //   if (tempCurrentNum[tempCurrentNum.length - 1].number === arr[i][j].number) {

  //     // console.log("basearr", baseNumber[tempIndex]);
  //     tempCurrentNum.push(baseNumber[tempIndex])
  //     arr[i][j] = tempCurrentNum[tempCurrentNum.length - 1]
  //     setTempIndex(prevTempIndex => prevTempIndex + 1)
  //   }
  //   else {
  //     while (k < tempIndex - 1) {
  //       // console.log("inside while")
  //       if (arr[i][j].number == tempCurrentNum[k].number) {
  //         arr[i][j] = tempCurrentNum[k + 1]

  //         break;
  //       }
  //       else {
  //         k++;
  //       }
  //     }
  //   }
  //   let traverseArr = arr;
  //   // setArr([...arr])
  //   console.log(arr)

  //   const item = clickedNum
  //   traverse(i, j, item);

  //   if (flag == 0) {
  //     arr[i][j].number = clickedNum;
  //   }


  //   // changeCurrent();

  // }
  const checkNumber= arr[i][j];
  const recursion=(i,j)=>{
    if(i+1<size){
      // console.log(checkNumber)
      if(currentArray[i+1][j]==checkNumber){
        currentArray[i+1][j]=0
        flag=1;
        setScore(prev=>prev+1)
        // console.log("recursion flag-",flag)
        recursion(i+1,j)

      }
    }
    if(i-1>=0){
      if(currentArray[i-1][j]==checkNumber){
        currentArray[i-1][j]=0
        flag=1;
        setScore(prev=>prev+1)
        recursion(i-1,j)
      }
    }
    if(j+1<size){
      if(currentArray[i][j+1]==checkNumber){
        currentArray[i][j+1]=0
        flag=1;
        setScore(prev=>prev+1)
        recursion(i,j+1)
      }
    }
    if(j-1>=0){
      if(currentArray[i][j-1]==checkNumber){
        currentArray[i][j-1]=0
        flag=1;
        setScore(prev=>prev+1)
        recursion(i,j-1)
      }
    }
  }

  const checkGameOver=()=>{
    let lose=1;
    for(let i=0;i<size;i++){
      for(let j=0;j<size;j++){
        if(i+1<size){
          if(currentArray[i+1][j]==currentArray[i][j]){
            lose=0;
          }
        }
        if(i-1>=0){
          if(currentArray[i-1][j]==currentArray[i][j]){
            lose=0;
          }
        }
        if(j+1<size){
          if(currentArray[i][j+1]==currentArray[i][j]){
            lose=0;
          }
        }
          if(j-1>=0){
          if(currentArray[i][j-1]==currentArray[i][j]){
            lose=0;
          }
        }
      }
    }
    // console.log("lost status-",lose);
    if(lose==1){
      setTimeout(() => {
        setGameover(true)
      }, 4000);
    }

  }


  const handleClick=()=>{
    // setArr(prev=>[...prev])
    currentArray[i][j]*=2
    recursion(i,j);
    // console.log(flag)
    if(flag>0){
      
      setArr(prev=>[...currentArray])
      setTimeout(() => {
        fillRandomNumber()
      }, 50);
      return
    }
    // else{
      currentArray[i][j]=checkNumber
    // }
    // console.log("gaibona")

  }

  const fillRandomNumber=async()=>{
    let newPickupArray=[...pickupArray]
    if(currentArray.flat().filter(x=>x==pickupArray[0]).length==0){
      newPickupArray=[...pickupArray.map(x=>x*2)]
      setPickupArray(prev=>newPickupArray)
      setLevelup(true)
      setTimeout(() => {
        setLevelup(false)
      }, 3000);
      // console.log(pickupArray)
      for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
          if(currentArray[i][j]==0){
            // currentArray[i][j]=32
            var randomIndex= Math.floor(Math.random()*pickupArray.length)
            currentArray[i][j]=newPickupArray[randomIndex]
          }
        }
      }
    }
    else{
      for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
          if(currentArray[i][j]==0){
            // currentArray[i][j]=32
            var randomIndex= Math.floor(Math.random()*pickupArray.length)
            currentArray[i][j]=pickupArray[randomIndex]
          }
        }
      }
    }
    setArr(prev=>[...currentArray])
    checkGameOver();
  }
  // useEffect(()=>{
  //     checkGameOver();
  //   },[currentArray])

  return (
    <div className={`flex justify-center relative border border-[#1b1915] h-24 w-24 items-center hover:cursor-pointer
                        font-luckiest_guy text-4xl rounded-xl ${numberObject.color}`}
      onClick={handleClick} 
    >
      <div className='flex justify-center items-center'>
        <FaStar size={65} className={`relative ${numberObject.iconColor} opacity-60`}/>
        <span className='absolute text-white flex justify-center items-center drop-shadow-[0_1.3px_1.2px_rgba(0,0,0,1)]'>{numberObject.shortName}</span>
      </div>
      
      {/* <span className='absolute bottom-0 right-0 rounded-md bg-slate-800 text-white text-[10px] font-sans'>{i} , {j}</span> */}
    </div>
  )
}

export default App
