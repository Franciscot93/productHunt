'use client'
import Formulario from "../components/ui/Formulario";

//validaciones

import useValidation from "../hooks/useValidation";
import validarCrearCuenta from "../validacion/validarCrearCuenta";
const STATE_INICIAL={
  nombre:'',
  email:'',
  password:''
}

function CrearCuenta() {
 
  const crearCuenta=()=>{
    console.log('creando cuenta')
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
