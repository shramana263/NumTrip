import { createContext, useContext, useState } from "react";

const GameContext = createContext({
    gameover: false,
    setGameover: () => { },
    restart: false,
    setRestart: () => { },
    levelup: false,
    setLevelup: () => { },
    destroyHeart: false,
    setDestroyHeart: () => { },
    score: 0,
    setScore: () => { },
    life: 5,
    setLife: () => { },
    arr: [],
    setArr: () => { },
    baseNumbersArray: [],
    pickupArray:[],
    setPickupArray:()=>{},
    tempArr:[],
    currentArray:[],
    setCurrentArray:()=>{},
    fillRandomNum:()=>{},
    recursion:()=>{},
    checkGameOver:()=>{},
    fillRandomNumber:()=>{},

});


export const GameProvider = ({ children }) => {
    const [gameover, setGameover] = useState(false)
    const [restart, setRestart] = useState(false)
    const [levelup, setLevelup] = useState(false)
    const [destroyHeart, setDestroyHeart] = useState(false)
    const [score, setScore] = useState(0);
    const [life, setLife] = useState(5);
    const [arr, setArr] = useState([]);
    const tempArr = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    const [pickupArray, setPickupArray] = useState([2, 4, 8]);
    const [currentArray, setCurrentArray]=useState([...arr])
    let size=4;
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
    const fillRandomNum = () => {
        // console.log("hellooo")
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const index = Math.floor(Math.random() * pickupArray.length);
                tempArr[i][j] = pickupArray[index];
            }
        }
        // console.log("tempArr-",tempArr)
        setArr(prev=>[tempArr])
        // console.log("arr-",arr);
        
    }

    const recursion = (i, j,checkNumber) => {
        if (i + 1 < size) {
            // console.log(checkNumber)
            if (currentArray[i + 1][j] == checkNumber) {
                currentArray[i + 1][j] = 0
                flag = 1;
                setScore(prev => prev + 1)
                // console.log("recursion flag-",flag)
                recursion(i + 1, j,checkNumber)

            }
        }
        if (i - 1 >= 0) {
            if (currentArray[i - 1][j] == checkNumber) {
                currentArray[i - 1][j] = 0
                flag = 1;
                setScore(prev => prev + 1)
                recursion(i - 1, j,checkNumber)
            }
        }
        if (j + 1 < size) {
            if (currentArray[i][j + 1] == checkNumber) {
                currentArray[i][j + 1] = 0
                flag = 1;
                setScore(prev => prev + 1)
                recursion(i, j + 1,checkNumber)
            }
        }
        if (j - 1 >= 0) {
            if (currentArray[i][j - 1] == checkNumber) {
                currentArray[i][j - 1] = 0
                flag = 1;
                setScore(prev => prev + 1)
                recursion(i, j - 1,checkNumber)
            }
        }
    }

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
            }, 4000);
        }

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

      return(
        <GameContext.Provider value={{ gameover,restart,setRestart,setGameover,levelup,setLevelup,destroyHeart,setDestroyHeart,score,setScore,life,setLife,arr,setArr,tempArr,pickupArray,setPickupArray,
            fillRandomNum,fillRandomNumber,recursion,checkGameOver, baseNumbersArray,
            currentArray,setCurrentArray
         }}>
            {children}
        </GameContext.Provider>
      )

}

export const useGame=()=>useContext(GameContext)