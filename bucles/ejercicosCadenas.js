
ejecutarPrueba1= function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}


ejecutarPrueba2= function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadenaInversa(mensaje);
}


recorrerCadena = function (cadena){
    //0123
    //juan
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
}

recorrerCadenaInversa = function (cadena){
    //0123
    //juan
    let caracter;
    let posicion = cadena.length;
    for (let i=posicion-1; i >= 0; i--){
        caracter=cadena.charAt(i);
        console.log("Caracter "+caracter+" posicion "+i);
    }
}
