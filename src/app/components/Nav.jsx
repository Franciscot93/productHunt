'use client'
import React, { useState } from "react";
import Search from "./Search";
import Link from "next/link";
import Boton from "./ui/Boton";
import { useFirebase } from "../store/useFirebase";
import { useRouter } from "next/navigation";
function Nav() {
  const router=useRouter()
  const {user,logOut}=useFirebase()
  const handleLogOut=()=>{
    logOut()
    router.push('/')
  }
console.log(user)
  
  return (
    <header className="border-b-2 border-solid border-emerald-800 p-4">
      <div className=" m-auto w-full flex justify-between">
        <div className="flex items-center">
          <p className="text-6xl text-[#DA552f] leading-none font-bold mr-8">P</p>
          <Search />
          
        </div>
        <div className="flex items-center">
        <Link className="text-base ml-2 hover:text-[#DA552f] text-slate-50"  href={"/"}>Inicio</Link>
          <Link className="text-base ml-2 text-slate-50 hover:text-[#DA552f]"  href={"/populares"}>Populares</Link>
          {user&&<Link className="text-base ml-2 text-slate-50 mr-0 hover:text-[#DA552f]" href={"/nuevoProducto"}>Nuevo Producto</Link>}
          
        </div>
        <div className="flex items-center">
          
           {user ? <>
            <p className="mr-4 text-slate-50">Hola:{user.displayName}</p>
            <button onClick={()=>handleLogOut()} className={`font-bold border-[1px] rounded-md shadow-md border-solid transition-colors duration-200 hover:border-[#DA552f] border-[#d1d1d1] px-10 py-2 mr-4 ${true? "bg-[#DA552f] text-slate-50 hover:border-[#DA552f] hover:bg-transparent hover:text-[#DA552f]":"bg-white text-[#000]"}`}>Cerrar Sesion</button>
            </>
             :(

              <>
               <Boton route={'/login'} bgColor="true" campo={"Login"}/>
              
            
              <Boton route={"/crearCuenta"} campo={" Crear Cuenta"}/>
              </>

             )}
            
          
        </div>
      </div>
    </header>
  );
}

export default Nav;
