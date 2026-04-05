"use client";
import { createContext,useState } from "react";
export const CountContext = React.createContext();
export const  CountProvider = ({children})=>
{
    const [count, setcount] = useState(0);
    return(
        <>
        
        <CountContext.Provider value={{count,setcount}}>
            {children}
        </CountContext.Provider>
        
        </>
    )
}