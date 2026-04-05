"use client"
import React, { createContext,useState } from "react"
// get the name user
export const NameuserContext = React.createContext();
export const NameuserProvider = ({children})=>
{
    const [Name, setName] = useState("");
    return(
        <>
        
        <NameuserContext.Provider value={{Name,setName}}>
            {children}
        </NameuserContext.Provider>
        
        </>
    )
}
