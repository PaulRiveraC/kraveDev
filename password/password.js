ejecutarVlidacion= function(){
    let nombreClave = recuperarTexto("txtClave");
    let clave= validarPassword(nombreClave);
    let mensaje="";
    if (clave==""){
        mensaje = mostrarTexto("lblErrores","");
    } else {
        mensaje = mostrarTexto("lblErrores",clave);
    }

}
validarPassword = function (validarPassword) {
    let val1 = false;
    let val2 = false;
    let val3 = contarMayusculas(validarPassword);
    let val4 = contarDigito(validarPassword);
    let val5 = contarCaracterEspecial(validarPassword);
    let mensaje1="";
    let mensaje2="";
    let mensaje3="";
    let mensaje4="";
    let mensaje5="";
    let errores="";
    if (validarPassword.length >= 8) {
        val1 = true;
    } else {
        mensaje1 = "La clave debe tener almenos 8 digitos ";
        errores = mensaje1;
    }
    
    if (validarPassword.length >= 8) {
        if (validarPassword.length <= 16) {
            val2 = true;
        } else {
            mensaje2 = "La clave debe tener menos de 17 digitos ";
            errores = mensaje1 + mensaje2;
        }
    }


    if (val3 == false) {
        mensaje3 = "La clave debe tener al menos una letra Mayuscula ";
        errores = mensaje1 + mensaje2 + mensaje3;
    }

    if (val4 == false) {
        mensaje4 = "La clave debe tener al menos un digito ";
        errores = mensaje1 + mensaje2 + mensaje3 + mensaje4;
    }

    if (val5 == false) {
        mensaje5 = "La clave debe tener al menos un caracter especial de estos * - _";
        errores = mensaje1 + mensaje2 + mensaje3 + mensaje4 + mensaje5;
    }
    if (val1== true && val2== true && val3== true && val4== true && val5== true){
        errores="";
    }
    return errores;

}

