import Error from "./Error";

const FormularioNuevoProducto = ({
  valores,
  handleChange,
  handleSubmit,
  errores,
  handleBlur,
}) => {
  const { nombre, empresa, imagen,url,descripcion } = valores;
  return (
    <form
      noValidate
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="max-w-[600px] w-[95%] mt-[5rem] mr-auto mb-0 ml-auto "
      action=""
    >
      <div className="mb-4 flex relative items-center">
        <label className="text-slate-50 font-semibold mr-1" htmlFor="nombre">
          Nombre
        </label>
        <input
          className={`p-1 flex-1 shadow-md bg-transparent border-b-[1px] text-slate-50  ${
            errores.nombre ? "border-red-600 border-solid border-b-[1px]" : null
          }`}
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre del Producto"
          defaultValue={nombre}
          onInput={(e) => {
            handleChange(e);
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
        {errores.nombre?<Error mensaje={errores.nombre}/>:null}
      </div>
      
      <div className="mb-4 flex relative items-center">
        <label className="text-slate-50 font-semibold mr-1" htmlFor="empresa">
          Empresa
        </label>
        <input
          className={`p-1 flex-1 shadow-md bg-transparent text-slate-50 border-b-[1px] ${
            errores.empresa ? "border-red-600 border-solid border-b-[1px]" : null
          }`}
          type="text"
          id="empresa"
          name="empresa"
          placeholder="Empresa"
          defaultValue={empresa}
          onInput={(e) => {
            handleChange(e);
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
         {errores.empresa?<Error mensaje={errores.empresa}/>:null}
      </div>
     
      <div className="mb-4 flex relative  items-center">
        <label className="text-slate-50 font-semibold mr-1" htmlFor="imagen">
          Imagen
        </label>
        <input
          className={`p-1 flex-1 shadow-md bg-transparent text-slate-50 border-b-[1px] ${
            errores.imagen ? "border-red-600 border-solid border-b-[1px]" : null
          }`}
          type="file"
          id="imagen"
          name="imagen"
          defaultValue={imagen}
          onInput={(e) => {
            handleChange(e);
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
        {errores.imagen?<Error mensaje={errores.imagen}/>:null}
      </div>
      
      <div className="mb-4 flex relative items-center">
        <label className="text-slate-50 font-semibold mr-1" htmlFor="url">
          URL
        </label>
        <input
          className={`p-1 flex-1 shadow-md bg-transparent text-slate-50 border-b-[1px]  ${
            errores.url ? "border-red-600 border-solid border-b-[1px]" : null
          }`}
          type="url"
          id="url"
          name="url"
          placeholder="url"
          defaultValue={url}
          onInput={(e) => {
            handleChange(e);
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
        {errores.url?<Error mensaje={errores.url}/>:null}
      </div>
      
      <div className="mb-4 relative flex  items-center">
        <label className="text-slate-50 font-semibold mr-1" htmlFor="descripcion">
          Descripcion
        </label>
        <textarea
          className={`p-1 flex-1 shadow-md bg-transparent text-slate-50 border-b-[1px]  ${
            errores.descripcion ? "border-red-600 border-solid border-b-[1px]" : null
          }`}
          type="text"
          id="descripcion"
          name="descripcion"
          placeholder="Describe tu producto"
          defaultValue={descripcion}
          onInput={(e) => {
            handleChange(e);
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
        {errores.descripcion?<Error mensaje={errores.descripcion}/>:null}
      </div>
      

      <input
        className="bg-[#DA552f] w-[100%] transition-colors duration-200 text-center text-base font-semibold shadow-md rounded-md p-2 text-slate-50 hover:border-[1px] hover:border-solid hover:border-[#DA552f] hover:bg-transparent hover:text-[#DA552f]"
        type="submit"
        value={"Crear Producto"}
      />
    </form>
  );
};

export default FormularioNuevoProducto;
