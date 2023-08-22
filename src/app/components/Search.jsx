'use client'
import Image from "next/image"
import lupa from "../img/buscar.png"

function Search() {
  
  return (
    <form className="relative" action="">
        <input placeholder="Buscar Productos" className="border-[1px] border-solid min-w-[300px] p-2" type="text" />
        <button  className="w-8 absolute right-1 top-[4px] h-8 block bg-cover indent-[-9999px]" type="submit"><Image alt="Icono de una lupa"  src={lupa}/></button>
    </form>
  
    )
}

export default Search