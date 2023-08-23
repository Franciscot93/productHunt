import App from "next/app";
import FirebaseContext from "./firebase/context";
import app from "./firebase/firebase";

const MyApp=(props)=>{

    const {Component,pageProps}=props

    return(
        <FirebaseContext.Provider value={{app}}>
            <Component {...pageProps}/>
        </FirebaseContext.Provider>
    )
}