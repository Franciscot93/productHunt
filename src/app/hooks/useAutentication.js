import React,{useEffect,useState} from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase";

function useAutentication(){
    
    

    useEffect(()=>{
        const auth=getAuth(app)
        console.log('hola');
    },[])
   

    return 'hola'
}

export default useAutentication