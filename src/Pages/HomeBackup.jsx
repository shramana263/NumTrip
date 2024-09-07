import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import GameOver from '../components/GameOver';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { RiFlowerLine } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import PopAudio from '../components/PopAudio';
import music from '../sounds/popcell.mp3'
import levelupAudio from '../sounds/levelup.mp3'
import gameoveraudio from '../sounds/gameover.wav'
import Sidebar from '../components/Sidebar';
import InfoPopup from '../components/InfoPopup';
// import GameOver from '../components/GameOver';

const variants = {
    initial: { opacity: 0.8, scale: 1 },
    closed: { opacity: 0.3, scale: 0.3 },
}

const baseNumbersArray = [
    {
        number: 0,
        color: "bg-black",
        shortName: "x"
    },
    {
        number: 2,
        color: "bg-lime-500/40",
        iconColor: "text-green-700",
        shortName: "2"
    },
    {
        number: 4,
        color: "bg-purple-700/60",
        iconColor: "text-violet-800",
        shortName: "4"
    },
    {
        number: 8,
        color: "bg-blue-700/60",
        iconColor: "text-purple-800",
        shortName: "8"
    },
    {
        number: 16,
        color: "bg-pink-500/60",
        iconColor: "text-pink-700",
        shortName: "16"
    },
    {
        number: 32,
        color: "bg-sky-600/40",
        iconColor: "text-sky-800",
        shortName: "32"
    },
    {
        number: 64,
        color: "bg-green-500/30",
        iconColor: "text-green-600",
        shortName: "64"
    },
    {
        number: 128,
        color: "bg-rose-700/60",
        iconColor: "text-rose-800",
        shortName: "128"
    },
    {
        number: 256,
        color: "bg-red-300/60",
        iconColor: "text-red-400",
        shortName: "256"
    },
    {
        number: 512,
        color: "bg-green-800/60",
        iconColor: "text-green-900",
        shortName: "512"
    },
    {
        number: 1024,
        color: "bg-pink-500/60",
        iconColor: "text-pink-800",
        shortName: "1k"
    },
    {
        number: 2048,
        color: "bg-yellow-800/60",
        iconColor: "text-yellow-900",
        shortName: "2k"
    },
    {
        number: 4096,
        color: "bg-blue-800/60",
        iconColor: "text-blue-900",
        shortName: "4k"
    },
    {
        number: 8192,
        color: "bg-teal-700/60",
        iconColor: "text-teal-800",
        shortName: "8k"
    },
    {
        number: 16384,
        color: "bg-violet-300/60",
        iconColor: "text-violet-400",
        shortName: "16k"
    },
    {
        number: 32768,
        color: "bg-cyan-800/60",
        iconColor: "text-cyan-900",
        shortName: "32k"
    },
    {
        number: 65536,
        color: "bg-amber-600/60",
        iconColor: "text-amber-700",
        shortName: "65k"
    },
]
const testArray = [
    [2, 2, 8, 4],
    [4, 4, 4, 4],
    [4, 8, 8, 4],
    [8, 8, 4, 4]
]
const size = 5;
const HomeBackup = () => {
    // const [flag, setFlag] = useState(false);
    // const [bgColor, setBgColor]=useState('');
    // const [size, setSize]=useState(4)
    const [gameover, setGameover] = useState(false)
    const [restart, setRestart] = useState(false)
    const [levelup, setLevelup] = useState(false)
    const [destroyHeart, setDestroyHeart] = useState(false)
    const [score, setScore] = useState(0);
    const [life, setLife] = useState(5);
    const [arr, setArr] = useState([]);
    const tempArr = [[0, 0, 0, 0,0], [0, 0, 0, 0,0], [0, 0, 0, 0,0], [0, 0, 0, 0,0], [0, 0, 0, 0,0]];
    // const tempArr = Array.from({ length: size }, () => Array(size).fill(0));
    const [pickupArray, setPickupArray] = useState([2, 4, 8]);
    const [isPopped, setPopped]= useState(false)
    const levelRef=useRef()
    // let tempCurrentNum = currentNum;
    const fillRandomNum = () => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const index = Math.floor(Math.random() * pickupArray.length);
                tempArr[i][j] = pickupArray[index];
            }
        }
        setArr([...tempArr])
        console.log(tempArr)
        // levelRef.current.play()
    }

    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            pickupArray[i] = baseNumbersArray[i + 1].number;
        }
        fillRandomNum();


    }, [size])

    useEffect(() => {
        // console.log("effect-", arr)
        console.log(pickupArray)
        // setLevelup(true)
        
    }, [pickupArray])

    return (
        <>
            <div className='flex h-[92vh] w-full overflow-hidden'>
                {/* <img src="https://w0.peakpx.com/wallpaper/165/747/HD-wallpaper-beautiful-landscape-digital-art.jpg" alt="" className='h-full w-full' /> */}
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfbW91bnRhaW5fY2xpZmZfM2RfY2FydG9vbl9iYWNrZ3JvdW5kXzBhOTkwYTFkLTg3ZTEtNDE3MC04NDliLTc0MTc5MGU3YTE0N18xLmpwZw.jpg" alt="" className='h-full w-full' />
            </div>

            <div className='h-[100vh] w-full flex items-center justify-between flex-col bg-transparent absolute top-0'>
                <Navbar life={life} setLife={setLife} destroyHeart={destroyHeart}  />
                <div className='absolute right-20 h-full top-20 '>
                    <InfoPopup/>
                {/* <Sidebar setSize={setSize}/> */}
                </div>
                <div className='text-violet-200 font-luckiest_guy text-6xl m-4 drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)]'>
                    Num Trip
                </div>
                <div className='flex'>
                    <div className='h-[430px] w-[430px] bg-[#04020470] p-3 flex flex-col justify-center items-center '>
                        {
                            arr && arr.map((row, i) => (
                                <RowBlock key={i} i={i} row={row} arr={arr} setArr={setArr} pickupArray={pickupArray} setPickupArray={setPickupArray}
                                    levelup={levelup} setLevelup={setLevelup} setGameover={setGameover} setScore={setScore} isPopped={isPopped} setPopped={setPopped}
                                    levelRef={levelRef} size={size}
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
                <div className='flex mt-5 text-3xl text-white font-bold font-sans drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)]'>
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
                    <GameOver score={score} arr={arr} setArr={setArr} size={size} setGameover={setGameover} life={life} setLife={setLife} setDestroyHeart={setDestroyHeart} />
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

const RowBlock = ({ size,row, i, arr, setArr, pickupArray, setPickupArray, levelup, setLevelup, setGameover, setScore, isPopped, setPopped , levelRef}) => {
    // console.log(row)
    return (
        <div className='flex h-full w-full justify-center items-center'>
            {
                row.map((rowElement, j) => (
                    <NumberBlock key={j} i={i} j={j} levelup={levelup} setLevelup={setLevelup} rowElement={rowElement} arr={arr} setArr={setArr}
                        pickupArray={pickupArray} setPickupArray={setPickupArray} setGameover={setGameover} setScore={setScore}
                        isPopped={isPopped} setPopped={setPopped} levelRef={levelRef} size={size}
                    />
                ))
            }
        </div>
    )
}

const NumberBlock = ({ size, rowElement, i, j, arr, setArr, pickupArray, setPickupArray, levelup, setLevelup, setGameover, setScore, isPopped, setPopped, levelRef }) => {
    // const [flag, setFlag] = useState(0);
    let flag = 0
    const numberObject = baseNumbersArray.find(x => x.number === rowElement)
    const [currentArray, setCurrentArray] = useState([...arr])
    const [clickedIndex , setClickedIndex]=useState(null)
    const [animation, setAnimation]= useState('')
    const audioRef= useRef()
    const levelupRef= useRef()
    const gameoverRef= useRef()

    const checkNumber = arr[i][j];
    const recursion = (i, j) => {
        if (i + 1 < size) {
            // console.log(checkNumber)
            if (currentArray[i + 1][j] == checkNumber) {
                // audioRef.current.play()
                currentArray[i + 1][j] = 0
                flag = 1;
                setScore(prev => prev + 1)
                // console.log("recursion flag-",flag)
                recursion(i + 1, j)

            }
        }
        if (i - 1 >= 0) {
            if (currentArray[i - 1][j] == checkNumber) {
                // audioRef.current.play()
                currentArray[i - 1][j] = 0
                flag = 1;
                setScore(prev => prev + 1)
                recursion(i - 1, j)
            }
        }
        if (j + 1 < size) {
            if (currentArray[i][j + 1] == checkNumber) {
                // audioRef.current.play()
                currentArray[i][j + 1] = 0
                flag = 1;
                setScore(prev => prev + 1)
                recursion(i, j + 1)
            }
        }
        if (j - 1 >= 0) {
            if (currentArray[i][j - 1] == checkNumber) {
                // audioRef.current.play()
                currentArray[i][j - 1] = 0
                flag = 1;
                setScore(prev => prev + 1)
                recursion(i, j - 1)
            }
        }
    }

    // const changeIndex=()=>{
    //     let temp;
    //     for(let i=0;i<size;i++){
    //         for(let j=0;j<size;j++){
    //             if(arr[i][j]==0){
    //                 temp=arr[i][j]
    //                 arr[i][j]=arr[i-1][j]
    //                 arr[i-1][j]=temp
    //             }
    //         }
    //     }
    //     setArr([...arr])
    // }

    const checkGameOver = () => {
        let lose = 1;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i + 1 < size) {
                    if (currentArray[i + 1][j] == currentArray[i][j]) {
                        lose = 0;
                    }
                }
                if (i - 1 >= 0) {
                    if (currentArray[i - 1][j] == currentArray[i][j]) {
                        lose = 0;
                    }
                }
                if (j + 1 < size) {
                    if (currentArray[i][j + 1] == currentArray[i][j]) {
                        lose = 0;
                    }
                }
                if (j - 1 >= 0) {
                    if (currentArray[i][j - 1] == currentArray[i][j]) {
                        lose = 0;
                    }
                }
            }
        }
        // console.log("lost status-",lose);
        if (lose == 1) {
            setTimeout(() => {
                setGameover(true)
                gameoverRef.current.play()
            }, 4000);
        }

    }


    const handleClick = () => {
        // setClickedIndex({ row: i, col: j });
        // setArr(prev=>[...prev])
        // console.log("row,column=>",i,j)
        audioRef.current.play()
        setPopped(prev=>true)
        currentArray[i][j] *= 2
        recursion(i, j);
        // console.log(flag)
        if (flag > 0) {

            setArr(prev => [...currentArray])
            setTimeout(() => {
                fillRandomNumber()
            }, 90);
            // setTimeout(() => {
            //     changeIndex()
            // }, 1000);
            return
        }
        // else{
        currentArray[i][j] = checkNumber
        // }
        // console.log("gaibona")

    }

    const fillRandomNumber = async () => {
        let newPickupArray = [...pickupArray]
        if (currentArray.flat().filter(x => x == pickupArray[0]).length == 0) {
            newPickupArray = [...pickupArray.map(x => x * 2)]
            setPickupArray(prev => newPickupArray)
            setLevelup(true)
            levelupRef.current.play()
            setTimeout(() => {
                setLevelup(false)
            }, 3000);
            // console.log(pickupArray)
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    if (currentArray[i][j] == 0) {
                        audioRef.current.play()
                        // setAnimation('animate-popCell')
                        var randomIndex = Math.floor(Math.random() * pickupArray.length)
                        currentArray[i][j] = newPickupArray[randomIndex]
                    }
                }
            }
        }
        else {
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    if (currentArray[i][j] == 0) {
                        audioRef.current.play()
                        // setAnimation('animate-popCell')
                        var randomIndex = Math.floor(Math.random() * pickupArray.length)
                        currentArray[i][j] = pickupArray[randomIndex]
                    }
                }
            }
        }
        setArr(prev => [...currentArray])
        checkGameOver();
    }

    return (
        <motion.div className={`flex justify-center relative border border-[#322f29b9] h-full w-full items-center hover:cursor-pointer
                        font-luckiest_guy text-4xl ${numberObject.color} ${animation}`}
            onClick={handleClick}
            animate={clickedIndex && clickedIndex.row === i && clickedIndex.col === j ? { opacity: 0.3 } : { opacity: 1 }}
            variants={variants}
            transition={{ duration: 5, ease: 'easeInOut' }}
        >
            <div className='flex justify-center items-center'>
                {/* <PopAudio isPopped={isPopped} setPopped={setPopped}/> */}
                <audio src={music} ref={audioRef}></audio>
                <audio src={levelupAudio} ref={levelupRef}></audio>
                <audio src={gameoveraudio} ref={gameoverRef}></audio>
                <FaCanadianMapleLeaf size={55} className={`relative ${numberObject.iconColor} opacity-60`} />
                <span className='absolute text-white flex justify-center items-center drop-shadow-[0_1.3px_1.2px_rgba(0,0,0,1)]'>{numberObject.shortName}</span>
            </div>
        </motion.div>
        
    )
}

export default HomeBackup
