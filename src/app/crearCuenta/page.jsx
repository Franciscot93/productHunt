'use client'
import { useState } from "react";
import Formulario from "../components/ui/Formulario";


//validaciones

import useValidation from "../hooks/useValidation";
import validarCrearCuenta from "../validacion/validarCrearCuenta";
import { useRouter } from 'next/navigation'
import { useFirebase } from "../store/useFirebase";


function CrearCuenta() {
  const router=useRouter()
  const {registrar}=useFirebase ()
  const [errorRegistro,setErrorRegistro]=useState(null)
  const STATE_INICIAL={
    nombre:'',
    email:'',
    password:''
  }
  const crearCuenta=async()=>{
    try {
      await registrar(nombre.value,email.value,password.value,setErrorRegistro)
      router.push('/')
    } catch  (error) {
      console.error('Hubo un error al crear el usuario',error)
      return setErrorRegistro(error.message)
    }
    
  }

  const{valores,
    errores,submitForm,
    handleSubmit,
    handleChange,handleBlur}=useValidation(STATE_INICIAL,validarCrearCuenta,crearCuenta)

  
  
  return (
    <div >
      <h1 className="font-bold text-4xl text-center text-slate-50 mt-[2.5rem]">Crear cuenta</h1>
      {errorRegistro!=null&&(<div className=" text-center font-semibold flex-1 p-1"><p className="text-red-600">{errorRegistro}</p></div>) }
      <Formulario handleBlur={handleBlur} errores={errores}  valores={valores} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default CrearCuenta;
