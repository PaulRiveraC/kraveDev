esMayuscula = function (caracter, posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra >= 65) {
        if (letra <= 90) {
            mensaje = true;
        } else {
            mensaje = false;
        }
    } else {
        mensaje = false;
    }
    return mensaje;
}

letraProvincia = function (caracter, posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra == 65) {
        mensaje = "AZUAY";
    } else if (letra == 66) {
        mensaje = "BOLIVAR";
    } else if (letra == 85) {
        mensaje = "CANAR";
    } else if (letra == 67) {
        mensaje = "CARCHI";
    } else if (letra == 88) {
        mensaje = "COTOPAXI";
    } else if (letra == 72) {
        mensaje = "CHIMBORAZO";
    } else if (letra == 79) {
        mensaje = "EL ORO";
    } else if (letra == 69) {
        mensaje = "ESMERALDAS";
    } else if (letra == 87) {
        mensaje = "GALAPAGOS";
    } else if (letra == 71) {
        mensaje = "GUAYAS";
    } else if (letra == 73) {
        mensaje = "IMBABURA";
    } else if (letra == 76) {
        mensaje = "LOJA";
    } else if (letra == 82) {
        mensaje = "LOS RIOS";
    } else if (letra == 77) {
        mensaje = "MANABI";
    } else if (letra == 86) {
        mensaje = "MORINA SANTIAGO";
    } else if (letra == 78) {
        mensaje = "NAPO";
    } else if (letra == 83) {
        mensaje = "PASTAZA";
    } else if (letra == 80) {
        mensaje = "PICHINCHA";
    } else if (letra == 75) {
        mensaje = "SUCUMBIOS";
    } else if (letra == 81) {
        mensaje = "ORELLANA";
    } else if (letra == 84) {
        mensaje = "TUNGURAHUA";
    } else if (letra == 90) {
        mensaje = "ZAMORA CHIMCHIPE";
    } else if (letra == 89) {
        mensaje = "SANTA ELENA";
    } else if (letra < 65 || letra > 90) {
        mensaje = null;
    }
    return mensaje;
}

letraVehiculo = function (caracter, posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra == 65 || letra == 90) {
        mensaje = "vehiculo comercial";
    } else if (letra == 69) {
        mensaje = "vehiculo gubernamental";
    } else if (letra == 88) {
        mensaje = "vehiculo de uso oficial";
    } else if (letra == 83) {
        mensaje = "vehiculo del gobierno provincial";
    } else if (letra == 77) {
        mensaje = "vehiculo minicipal";
    } else if (letra >= 65) {
        if (letra <= 90) {
            if (letra !== 65 || letra !== 90 || letra !== 69 || letra !== 88 || letra !== 83 || letra !== 77 || letra !== 65) {
                mensaje = "vehiculo particular";
            } else {
                mensaje = null;
            }
        }
    } else {
        mensaje = null;
    }
    return mensaje;
}

letraPicoPlaca = function (caracter, posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra == 49 || letra == 50) {
        mensaje = "PICO Y PLACA LUNES";
    } else if (letra == 51 || letra == 52) {
        mensaje = "PICO Y PLACA MARTES";
    } else if (letra == 53 || letra == 54) {
        mensaje = "PICO Y PLACA MIERCOLES";
    } else if (letra == 55 || letra == 56) {
        mensaje = "PICO Y PLACA JUEVES";
    } else if (letra == 48 || letra == 57) {
        mensaje = "PICO Y PLACA VIERNES";
    }
    return mensaje;
}

esDigito = function (caracter, posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra >= 48) {
        if (letra <= 57) {
            mensaje = true;
        } else {
            mensaje = false;
        }
    } else {
        mensaje = false;
    }
    return mensaje;
}

esGuion = function (caracter, posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra == 45) {
        mensaje = true;
    } else {
        mensaje = false;
    }
    return mensaje;
}