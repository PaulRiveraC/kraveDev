validarEstructura = function (placa) {
    let existeEror = false;
    let resumen;
    let mensaje1;
    let mensaje2;
    let mensaje3;
    let mensaje4;
    let mensaje5;
    let mensaje6;
    let mensaje7;
    let mensaje8;
    let mensaje9;
    //llamo a las funciones y verifico si son erroneas
    let validacionLongitud = longitud(placa);
    if (validacionLongitud == false) {
        mensaje1 = (" La placa debe tener 7 u 8 caracteres");
    } else {
        mensaje1 = "";
    }

    let validacion1Mayuscula = esMayuscula(placa, 0);
    if (validacion1Mayuscula == false) {
        mensaje2 = (" El primer caracter debe ser mayuscula");
    } else {
        mensaje2 = "";
    }
    let validacion2Mayuscula = esMayuscula(placa, 1);
    if (validacion2Mayuscula == false) {
        mensaje3 = (" El segundo caracter debe ser mayuscula");
    } else {
        mensaje3 = "";
    }

    let validacion3Mayuscula = esMayuscula(placa, 2);
    if (validacion3Mayuscula == false) {
        mensaje4 = (" El tercer caracter debe ser mayuscula");
    } else {
        mensaje4 = "";
    }
    let validacionGuion = esGuion(placa, 3);
    if (validacionGuion == false) {
        mensaje5 = (" El cuarto caracter debe ser Guion");
    } else {
        mensaje5 = "";
    }
    let validacion1Digito = esDigito(placa, 4);
    if (validacion1Digito == false) {
        mensaje6 = (" El quinto caracter debe ser un numero del 0 al 9");
    } else {
        mensaje6 = "";
    }
    let validacion2Digito = esDigito(placa, 5);
    if (validacion2Digito == false) {
        mensaje7 = (" El sexto caracter debe ser un numero del 0 al 9");
    } else {
        mensaje7 = "";
    }

    let validacion3Digito = esDigito(placa, 6);
    if (validacion3Digito == false) {
        mensaje8 = (" El septimo caracter debe ser un numero del 0 al 9");
    } else {
        mensaje8 = "";
    }

    let validacionLongitud8 = verificarlongitud8(placa);
    if (validacionLongitud8 == true) {
    let validacion4Digito = esDigito(placa, 7);
    if (validacion4Digito == false) {
        mensaje9 = (" El octavo caracter debe ser un numero del 0 al 9");
    } else {
        mensaje9 = "";
    }
   }

   if (validacionLongitud8 == true) {
    if (mensaje1 == "" && mensaje2 == "" && mensaje3 == "" && mensaje4 == ""
        && mensaje5 == "" && mensaje6 == "" && mensaje7 == "" && mensaje8 == "" && mensaje9 == "") {
        return true;
    } else if (mensaje1 !== "") {
        mensaje1 = "";
    } else if (mensaje2 !== "") {
        mensaje2 = "";
    } else if (mensaje3 !== "") {
        mensaje3 = "";
    } else if (mensaje4 !== "") {
        mensaje4 = "";
    } else if (mensaje5 !== "") {
        mensaje5 = "";
    } else if (mensaje6 !== "") {
        mensaje6 = "";
    } else if (mensaje7 !== "") {
        mensaje7 = "";
    } else if (mensaje8 !== "") {
        mensaje8 = "";
    } else if (mensaje9 == "") {
        mensaje9 = "";
    }
    resumen = mensaje1 + mensaje2 + mensaje3 + mensaje4 + mensaje5 + mensaje6 + mensaje7 + mensaje8 + mensaje9;
    return mostrarTexto("lblResumen2", resumen);
   } else {
    if (mensaje1 == "" && mensaje2 == "" && mensaje3 == "" && mensaje4 == ""
        && mensaje5 == "" && mensaje6 == "" && mensaje7 == "" && mensaje8 == "") {
        return true;
    } else if (mensaje1 !== "") {
        mensaje1 = "";
    } else if (mensaje2 !== "") {
        mensaje2 = "";
    } else if (mensaje3 !== "") {
        mensaje3 = "";
    } else if (mensaje4 !== "") {
        mensaje4 = "";
    } else if (mensaje5 !== "") {
        mensaje5 = "";
    } else if (mensaje6 !== "") {
        mensaje6 = "";
    } else if (mensaje7 !== "") {
        mensaje7 = "";
    } else if (mensaje8 !== "") {
        mensaje8 = "";
    }
    resumen = mensaje1 + mensaje2 + mensaje3 + mensaje4 + mensaje5 + mensaje6 + mensaje7 + mensaje8;
    return mostrarTexto("lblResumen2", resumen);
   }

}

obtenerProvincia=function(placa){
    let validacionLongitud = longitud(placa);
    let provincia= letraProvincia (placa, 0);
    return provincia;
}

obtenerTipoVehiculo=function(placa){
    let validacionLongitud = longitud(placa);
    let vehiculo= letraVehiculo  (placa, 1);
    return vehiculo;
}


obtenerDiaYPlaca=function(placa){
    let validacionLongitud = longitud2(placa);
    let vehiculo= letraPicoPlaca(placa,validacionLongitud);
    return vehiculo;
}

limpiar = function () {
    mostrarTexto("lblResumen","");
    mostrarTexto("lblResumen2","");
    mostrarTexto("lblResumen3","");
    mostrarTexto("lblResumen4","");
    mostrarTexto("lblResumen5","");
}
