
import { create } from 'zustand'
import { initializeApp,getApps } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,browserSessionPersistence,setPersistence,signOut} from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   
    
};
const  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const auth =getAuth(app)


export const useFirebase = create((set) => ({

    auth:auth,
    onAuth:onAuthStateChanged,
    
    user:(null),
    
   
    
    registrar:async(nombre,email, password,setErrorRegistro)=> {
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
     },
     isLogged:(email,password)=>setPersistence(auth,browserSessionPersistence)
     .then(() => {
        console.log('aqui');
        onAuthStateChanged(auth,user=>{
          
        })
       return signInWithEmailAndPassword(auth, email, password);
     })
     .catch((error) => {
       // Handle Errors here.
       console.log('por desgracia aqui');
        console.log(error.code); 
        console.log(error.message);
        console.log(error)
     }),
     login:async(email,password,setErrorLogin)=>{
        try{
         const user= await signInWithEmailAndPassword(auth, email, password)
        
           
           set({user:user.user})
           
          
         }
         catch(error)  {
          console.log(error.message);
           setErrorLogin(error.message)
          
         }
      },

      logOut:()=>{
      const confirmar=confirm('Deseas cerrar sesion?')
      if (confirmar){
        signOut(auth)
      }
      },

      setUser:(usuario)=>set({user:usuario}),
      
      //Productos

      agregarProducto:async()=>{
        
      },
      
     
    
  }))