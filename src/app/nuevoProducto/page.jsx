'use client'
import { useState } from "react";
import FormularioNuevoProducto from "../components/ui/FormularioNuevoProducto";


//validaciones

import useValidation from "../hooks/useValidation";
import validarCrearProducto from "../validacion/validarCrearProducto";
import { useRouter } from 'next/navigation'
import { useFirebase } from "../store/useFirebase";


function NuevoProducto() {
  const router=useRouter()
  const {agregarProducto}=useFirebase ()
  const [errorRegistroProducto,setErrorRegistroProducto]=useState(null)
  const STATE_INICIAL={
    nombre:'',
    empresa:'',
    imagen:'',
    url:'',
    descripcion:''
  }
  const crearProducto=async()=>{
    console.log(nombre.value,empresa.value,imagen.value,url.value,descripcion.value)
    /*try {
      await agregarProducto(nombre.value,empresa.value,imagen.value,url.value,descripcion.value,setErrorRegistroProducto)
      router.push('/')
    } catch  (error) {
      console.error('Hubo un error al crear el producto',error)
      return setErrorRegistro(error.message)
    }*/
    
  }

  const{valores,
    errores,submitForm,
    handleSubmit,
    handleChange,handleBlur}=useValidation(STATE_INICIAL,validarCrearProducto,crearProducto)

  
  
  return (
    <div >
      <h1 className="font-bold text-4xl text-slate-50 text-center mt-[2.5rem]">Nuevo Producto</h1>
      {errorRegistroProducto!=null&&(<div className=" text-center font-semibold flex-1 p-1"><p className="text-red-600">{errorRegistro}</p></div>) }
      <FormularioNuevoProducto handleBlur={handleBlur} errores={errores}  valores={valores} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default NuevoProducto