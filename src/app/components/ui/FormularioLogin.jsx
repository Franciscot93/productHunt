'use client'

import Error from "./Error"


const FormularioLogin = ({valores,handleChange,handleSubmit,errores,handleBlur}) => {
  const{email,password}=valores

  return (

    <form noValidate onSubmit={(e)=>{handleSubmit(e)}} className='max-w-[600px] w-[95%] mt-[5rem] mr-auto mb-0 ml-auto ' action="">
    
   
    <div className="mb-4 flex relative items-center">
      <label  className="text-slate-50 font-semibold mr-1" htmlFor="email" >E-mail</label>
      <input className={`p-1 flex-1 shadow-md rounded-md  bg-transparent text-slate-50 border-b-[1px] ${errores.email? 'border-red-600 border-solid border-[1px]':null}`} type="email" id="email" name="email" placeholder="Tu Email" 
       defaultValue={email}
       onChange={(e)=>{handleChange(e)}}
       onBlur={(e)=>{handleBlur(e)}}/>
       {errores.email ? <Error mensaje={errores.email}/>:null}
    </div>
   
    <div className="mb-4 relative flex items-center">
      <label  className="text-slate-50 font-semibold mr-1" htmlFor="password" >Password</label>
      <input className={`p-1 flex-1 shadow-md  bg-transparent text-slate-50 border-b-[1px] rounded-md ${errores.password? 'border-red-600 border-solid border-[1px]':null}`}
        type="password"
        id="password"
        name="password"
        placeholder="Tu Password"
        defaultValue={password}
        onChange={(e)=>{handleChange(e)}}
        onBlur={(e)=>{handleBlur(e)}}
      />
      {errores.password ? <Error mensaje={errores.password}/>:null}
    </div>
    
    <input className="bg-[#DA552f] w-[100%] transition-colors duration-200 text-center text-base font-semibold shadow-md rounded-md p-2 text-slate-50 hover:border-[1px] hover:border-solid hover:border-[#DA552f] hover:bg-slate-50 hover:text-[#DA552f]" type="submit" value={"Login"} />
  </form>

    )
}

export default FormularioLogin