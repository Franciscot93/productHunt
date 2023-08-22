'use client'
import React, { useState } from "react";
import Search from "./Search";
import Link from "next/link";
import Boton from "./ui/Boton";

function Nav() {
  const [user,setUser]=useState(false)
  return (
    <header className="border-b-2 border-solid border-emerald-800 p-4">
      <div className=" m-auto w-full flex justify-between">
        <div className="flex items-center">
          <p className="text-6xl text-[#DA552f] leading-none font-bold mr-8">P</p>
          <Search />
          
        </div>
        <div className="flex items-center">
        <Link className="text-base ml-2 text-slate-600"  href={"/"}>Inicio</Link>
          <Link className="text-base ml-2 text-slate-600"  href={"/populares"}>Populares</Link>
          <Link className="text-base ml-2 text-slate-600 mr-0" href={"/nuevoProducto"}>Nuevo Producto</Link>
        </div>
        <div className="flex items-center">
          
           {user ? (<>
            <p className="mr-4">Hola: paco</p>
            <Boton route={'/'} bgColor="true" campo={"Cerrar Sesión"}/>

           
           
           </> 
             ):(

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
