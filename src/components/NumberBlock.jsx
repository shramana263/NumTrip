import { useState } from "react";
import { useGame } from "../contexts/NumContext";
import { FaStar } from "react-icons/fa6";

const baseNumbersArray = [
  {
      number: 0,
      color: "bg-black",
      shortName: "x"
  },
  {
      number: 2,
      color: "bg-lime-600",
      iconColor: "text-green-700",
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
      iconColor: "text-yellow-800",
      shortName: "8"
  },
  {
      number: 16,
      color: "bg-pink-500",
      iconColor: "text-pink-700",
      shortName: "16"
  },
  {
      number: 32,
      color: "bg-sky-600",
      iconColor: "text-sky-700",
      shortName: "32"
  },
  {
      number: 64,
      color: "bg-green-500",
      iconColor: "text-green-600",
      shortName: "64"
  },
  {
      number: 128,
      color: "bg-violet-700",
      iconColor: "text-violet-800",
      shortName: "128"
  },
  {
      number: 256,
      color: "bg-red-300",
      iconColor: "text-red-400",
      shortName: "256"
  },
  {
      number: 512,
      color: "bg-green-800",
      iconColor: "text-green-900",
      shortName: "512"
  },
  {
      number: 1024,
      color: "bg-pink-700",
      iconColor: "text-pink-800",
      shortName: "1k"
  },
  {
      number: 2048,
      color: "bg-yellow-800",
      iconColor: "text-yellow-900",
      shortName: "2k"
  },
  {
      number: 4096,
      color: "bg-blue-800",
      iconColor: "text-blue-900",
      shortName: "4k"
  },
  {
      number: 8192,
      color: "bg-teal-700",
      iconColor: "text-teal-800",
      shortName: "8k"
  },
  {
      number: 16384,
      color: "bg-violet-300",
      iconColor: "text-violet-400",
      shortName: "16k"
  },
  {
      number: 32768,
      color: "bg-cyan-800",
      iconColor: "text-cyan-900",
      shortName: "32k"
  },
  {
      number: 65536,
      color: "bg-amber-600",
      iconColor: "text-amber-700",
      shortName: "65k"
  },
]

const NumberBlock = ({i,j,rowElement}) => {
    // const [flag, setFlag] = useState(0);
    const {arr,setArr,recursion,currentArray,fillRandomNumber,pickupArray,setPickupArray,levelup,setLevelup,setGameover,setScore}=useGame()
    let flag=0
    // const [numberObject, setNumberObject]= useState({})
    // for(let i=0;i<(baseNumbersArray.length);i++){
    //   console.log(baseNumbersArray[i].number, rowElement)
    //   if(baseNumbersArray[i].number==rowElement){
    //     // setNumberObject(baseNumbersArray[i])
    //     console.log(baseNumbersArray[i])
    //   }
    //   // console.log(numberObject)
    // }
    // const index= baseNumbersArray.findIndex(x=>x.number === rowElement)
    // const numberObject= baseNumbersArray[index]
    // if(baseNumbersArray){

      const numberObject= baseNumbersArray.find(x => x.number == rowElement)
      console.log(numberObject)
    // }
    

    const checkNumber= arr[i][j];
    
    const handleClick=()=>{
      // setArr(prev=>[...prev])
      console.log(currentArray)
      currentArray[i][j]*=2
      recursion(i,j,checkNumber);
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
export default NumberBlock