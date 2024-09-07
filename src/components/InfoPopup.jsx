import React, { useState } from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const InfoPopup = () => {
    const [isOpen, setOpen] = useState(false);
    const [info1, setInfo1]=useState(true);
    const [info2, setInfo2]= useState(false);
    return (
        <>
            <div className='text-white  font-bold flex justofy-center items-center'>
                <FaInfoCircle size={30} onClick={() => {setOpen(!isOpen); setInfo1(true)}} />
                <div className='absolute top-10 right-0 z-10'>

                    {
                        isOpen &&
                        <div className='w-64 p-3 rounded text-[#1B365C]  bg-[#F3C45E] flex justify-center items-center'>
                            {
                                info1 &&
                                <div>
                                    <Info1 setInfo2={setInfo2} setInfo1={setInfo1}/>
                                </div>
                            }
                            {
                                info2 &&
                                <div>
                                    <Info2 setInfo2={setInfo2} setInfo1={setInfo1}/>
                                </div>
                            }
                            
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default InfoPopup

export const Info1 = ({setInfo2, setInfo1}) => {
    return (
        <>
            <div>
                <span>
                    Click on a specific cell having same value in one or more adjacent cells, to make the clicked value doubled and replace the same values in the adjacent cells.
                </span>
            </div>
            <div className='flex justify-end items-center gap-2 hover:text-[#2A5591] hover:cursor-pointer'
            onClick={()=>{setInfo2(true);setInfo1(false)}}
            >
                <div className='underline font-bold'>
                    Next
                </div>
                <div className='flex justify-center items-center'>
                <FaArrowAltCircleRight />
                </div>

            </div>
        </>
    )
}

export const Info2 = ({setInfo2, setInfo1}) => {
    return (
        <>
            <div>
                <span>
                    The goal is to remove the least number present in the game board at that instant to increase level.
                </span>
            </div>
            <div className='flex justify-start items-center gap-2 hover:text-[#2A5591] hover:cursor-pointer'
            onClick={()=>{setInfo1(true);setInfo2(false)}}
            >
                <div className='flex justify-center items-center'>
                <FaArrowAltCircleLeft />
                </div>
                <div className='underline font-bold'>
                    Previous
                </div>

            </div>
        </>
    )
}