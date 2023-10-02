export default function validarCrearProducto(valores){
    let errores={};

    //validacion del nombre del usuario
    if(!valores.nombre){
        errores.nombre="El campo Nombre es obligatorio"
    }
    if(!valores.empresa){
        errores.empresa="El campo Empresa es obligatorio"
    }

    if(!valores.url) {
        errores.url= "La URL es obligatoria";
    }else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ) {
        errores.url = "URL mal formateada o no válida"
    } 



    if(!valores.descripcion) {
        errores.descripcion= "La descripcion es obligatoria";
    } 


    return errores;
}