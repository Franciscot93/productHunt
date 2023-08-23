'use client'
import Formulario from "../components/ui/Formulario";
import { registrar } from "../firebase/firebase";

//validaciones

import useValidation from "../hooks/useValidation";
import validarCrearCuenta from "../validacion/validarCrearCuenta";


function CrearCuenta() {
  const STATE_INICIAL={
    nombre:'',
    email:'',
    password:''
  }
  const crearCuenta=async()=>{
    await registrar(nombre.value,email.value,password.value)
  }

  const{valores,
    errores,submitForm,
    handleSubmit,
    handleChange,handleBlur}=useValidation(STATE_INICIAL,validarCrearCuenta,crearCuenta)

  
  
  return (
    <div >
      <h1 className="font-bold text-4xl text-center mt-[2.5rem]">Crear cuenta</h1>
      
      <Formulario handleBlur={handleBlur} errores={errores}  valores={valores} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default CrearCuenta;
