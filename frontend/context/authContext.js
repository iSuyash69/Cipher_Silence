"use client"

import { createContext } from "react"

export const AuthContext=createContext();

const AuthContextProvider=({children})=>{
    const [registerData,setRegisterData]=useState({});
    console.log("context data",registerData);

    return(
        <AuthContext.Provider value={{setRegisterData,registerData}}>{children}</AuthContext.Provider>
    ); 
}

export default AuthContextProvider;