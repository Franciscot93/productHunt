// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,updateProfile,signInWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   
    
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


const auth = getAuth(app);


export const registrar=async(nombre,email, password,setErrorRegistro)=> {
   console.log(email,password);
    try {
       
       const nuevoUsuario = await createUserWithEmailAndPassword(auth, email, password);
        
     await updateProfile(nuevoUsuario.user,{displayName:nombre})
     setErrorRegistro(null)
      console.log(nuevoUsuario);
    } catch (error) {
       console.log(error);
       setErrorRegistro(error.message)
       
    }

    
}

export const login=async(email,password,setErrorLogin)=>{
  try{
   const user= await signInWithEmailAndPassword(auth, email, password)
  
     
     console.log(user)
   }
   catch(error)  {
      console.log(error.message);
     setErrorLogin(error.message)
    
   }
}

export default app