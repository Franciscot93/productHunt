'use client'
import { useState } from "react";
import FormularioLogin from "../components/ui/FormularioLogin";
import { useFirebase } from "../store/useFirebase";

//validaciones

import useValidation from "../hooks/useValidation";
import validarLogin from "../validacion/validarLogin";
import { useRouter } from "next/navigation";






function Login() {
  const{login}=useFirebase()
  const [errorLogin,setErrorLogin]=useState(null) 
  const STATE_INICIAL={
    
    email:'',
    password:''
  }
  const router=useRouter()

   const iniciarSesion=async()=>{
   try{ console.log('iniciando...')
    await login(valores.email,valores.password,setErrorLogin)
    router.push('/')
  }
    catch(error){
      console.error(error)
    }
    
  }
  const{valores,
    errores,submitForm,
    handleSubmit,
    handleChange,handleBlur}=useValidation(STATE_INICIAL,validarLogin,iniciarSesion)
  return (
    <div >
      <h1 className="font-bold text-4xl text-center mt-[2.5rem]">Login</h1>
      {errorLogin!=null&&(<div className=" text-center font-semibold flex-1 p-1"><p className="text-red-600">{errorLogin}</p></div>) }
      <FormularioLogin handleBlur={handleBlur} errores={errores}  valores={valores} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Login