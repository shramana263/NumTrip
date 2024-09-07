import React, { useEffect, useRef } from 'react'
import music from '../sounds/sh.mp3'

const PopAudio = ({ isPopped, setPopped }) => {
    const audioRef= useRef()
    // console.log(isPopped)
    // useEffect(()=>{
        if(isPopped){
            audioRef.current.play()
            setPopped(prev=>false)
        }
    // },[])
    return (
        <>
            <audio src={music} ref={audioRef}></audio>
        </>
    )
}

export default PopAudio
