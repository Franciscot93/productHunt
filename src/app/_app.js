import App from "next/app";
import FirebaseContext from "./firebase/context";

const MyApp=(props)=>{
    
   
    const {Component,pageProps}=props
    

    return(
        <FirebaseContext.Provider value={{}}>
            <Component {...pageProps}/>
        </FirebaseContext.Provider>
    )
}