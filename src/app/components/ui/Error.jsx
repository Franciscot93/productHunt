import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className=" absolute top-1 right-3 text-center font-semibold flex-1 p-1">{mensaje ? <p className="text-red-600">{mensaje}</p>:<p className=" py-4">{''}</p>}</div>
  )
}

export default Error