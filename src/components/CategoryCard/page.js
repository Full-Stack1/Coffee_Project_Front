"use client"
import React from 'react'
const Categorycard = ({name,description,icon,onClick}) => {
  return (
    <div className=" cardstyle mb-5  ml-5  hover:bg-[#b86f3b]   bg-[#461e02] p-4 flex flex-col items-center cursor-pointer  " onClick={onClick}>
        <span className="text-4xl w-16 h-16 rounded-full w-20  bg-[#5f3415] border border-[#ab8164] flex items-center justify-center mb-2 mt-10">{icon}</span>
        <h2 className=" subtitle font-bold text-2xl mt-4  text-[#d88c55]" >{name}</h2>
        <h4 className="subtitle text-sm  text-[#a07850]  text-center">{description}</h4>
     
    </div>
  )
}

export default Categorycard;
