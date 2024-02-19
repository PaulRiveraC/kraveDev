
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
    let mensaje2="";
    let mostrar;
    let posicion = cadena.length;
    for (let i=posicion-1; i >= 0; i--){
        caracter=cadena.charAt(i);
        console.log("Caracter "+caracter+" posicion "+i);
        mensaje2=mensaje2+caracter;
        
    }
    mostrar=cambiarTexto("lblMensaje",mensaje2);
}

buscarLetra = function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for (let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        console.log("Existe letra");
    } else{
        console.log("No existe letra");
    }
}

contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas;
    for(let i=0; i<cadena.length;i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas=contadorMayusculas+1;
        }
    }
    console.log(contadorMayusculas);

}