"use client"
import React from 'react'

const Categorycard = ({name, description, icon, onClick}) => {
  return (
    <div 
      className="cardstyle mb-5 ml-5 hover:bg-[#b86f3b] bg-[#461e02] p-4 md:p-6 flex flex-col items-center cursor-pointer rounded-2xl"
      onClick={onClick}
    >
      <span className="text-3xl md:text-4xl w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#5f3415] border border-[#ab8164] flex items-center justify-center mb-2 mt-6 md:mt-10">
        {icon}
      </span>
      <h2 className="subtitle font-bold text-lg md:text-2xl mt-4 text-[#d88c55]">{name}</h2>
      <h4 className="subtitle text-xs md:text-sm text-[#a07850] text-center">{description}</h4>
    </div>
  )
}

export default Categorycard;