'use client'
import { useEffect, useState } from "react"


const useValidation = (stateInicial,validar,fn) => {

    const[valores,setValores]=useState(stateInicial)
    const[errores,setErrores]=useState({})
    const[submitForm,setSubmitForm]=useState(false)

    useEffect(()=>{

        if(submitForm){
            const noErrores=Object.keys(errores).length===0
            if(noErrores){
                fn()// fn = funcion que se ejecuta en el componente
            }
            setSubmitForm(false)
        }
    },[errores])

        // se ejecuta cuando el user escribe algo
    const handleChange=(e)=>{
        setValores({
            ...valores,[e.target.name]:e.target.value
        })
    }

    // funcion que se ejecuta cuando el user hace submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        const erroresValidacion=validar(valores);
        setErrores(erroresValidacion)
        setSubmitForm(true)
        console.log(valores.nombre, valores.email,valores.password);
    }
    
    const handleBlur=(e)=>{
        e.preventDefault()
        const erroresValidacion=validar(valores);
        setErrores(erroresValidacion)
    }

    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidation