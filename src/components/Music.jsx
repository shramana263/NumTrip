import React, { useEffect, useRef, useState } from 'react'
import { TbMusic } from "react-icons/tb";
import { TbMusicOff } from "react-icons/tb";
import useSound from 'use-sound';
import music from '../sounds/starlight-204347.mp3'


const Music = () => {
    // const soundUrl= 'src\sounds\voyageur-ii-180608.mp3'
    // const [play] = useSound(soundUrl);
    const [isPlaying, setPlaying]= useState(false)
    const audioRef= useRef()
    // const audio = new Audio(sound)
    const handleClick=()=>{
        setPlaying(prev=>!prev)
        
        // handleMusic()
    }

    useEffect(()=>{
        // console.log(isPlaying)
        if(isPlaying){
            // console.log("play")
            audioRef.current.play()
            audioRef.current.loop=true
        }
        if(!isPlaying){
            // console.log("pause")
            audioRef.current.pause()
        }
    },[isPlaying])
        
    
    return (
        <>
            <audio src={music} ref={audioRef}></audio>
            <div className='text-white font-bold rounded p-2'
            onClick={()=>{ handleClick()}}
            >
                {
                    isPlaying && <TbMusic size={25} />
                }
                {
                    !isPlaying && <TbMusicOff size={25}/>
                }
                
                
            </div>
            
        </>
    )
}

export default Music
