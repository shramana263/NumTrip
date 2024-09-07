import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AboutGame = () => {
    // const [aboutGame, setAboutGame]=useState('')
    // fetch('../aboutText/aboutNumtrip.txt')
    //     .then(response=>{
    //         console.log(response.text())
    //     })
    //     .then(text=>{
    //         setAboutGame(prev=>text)
    //         console.log(text)
    //     })
    return (
        <>
            <div className='h-full w-full flex justify-center items-center'>

                <div className='h-screen w-full'>
                    <img src="https://cdn.pixabay.com/photo/2023/08/18/23/03/ai-generated-8199528_1280.png" alt="" className='h-full w-full' />

                </div>
                <div className='fixed top-10 left-50 text-white text-4xl xl:text-7xl font-luckiest_guy drop-shadow-[0_2px_2px_rgba(0,1,1,0.8)]'>About Game</div>
                <Link to="/" className="font-bold text-white hover:cursor-pointer z-10 fixed top-10 right-10 underline text-2xl">Home</Link>
                <div className='flex justify-center flex-col items-left p-5 text-white text-xl bg-slate-800/30 h-full w-full absolute'>
                
                    
                    <div>This is a simple number game. The guide to play is-</div>
                    <div className='flex flex-col'>

                        <span className='font-bold'>Action : Clicking on a number.</span>
                        <span>Condition: At least one adjacent cells has the same number as the clicked cell.</span>
                        <span className='font-bold'>Outcome: </span>
                        <span>
                            1. The clicked number gets doubled<br></br>
                            2. The adjacent cells containing the same number gets replaced by new cells.
                        </span>
                        <span className='font-bold mt-3'>
                            Level Up Condition:
                        </span>
                        <span>
                            1. At any instance, notice the least number present in the game board. when this number will not be present anywhere in the board then the level of the game is upgraded.
                        </span>
                        <span className='font-bold mt-3'>Game Over Condition:</span>
                        <span>1. When at any instance, in the gameboard, no cells have at least one matched adjacent cell, the game gets over. Homeever there is a life system. if one has more or equal to 1 heart, the user can reshuffle the cells and continue the game</span>
                        <span className='font-bold mt-3'>Score system:</span>
                        <span>1. When one cell is clicked, if the cell has adjacency, then for every adjacent cell having the same number, +1 </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutGame
