import Link from 'next/link'


function Boton({bgColor,route,campo}) {
  return (
    <Link href={route}
    className={`font-bold border-[1px] rounded-md shadow-md border-solid transition-colors duration-200 hover:border-[#DA552f] border-[#d1d1d1] px-10 py-2 mr-4 ${bgColor? "bg-[#DA552f] text-slate-50 hover:border-[#DA552f] hover:bg-slate-50 hover:text-[#DA552f]":"bg-white text-[#000]"}`}>{campo}</Link>
  )
}

export default Boton