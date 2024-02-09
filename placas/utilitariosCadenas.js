esMayuscula = function (caracter,posicion) {
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

esDigito = function (caracter,posicion) {
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

esGuion = function (caracter,posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra == 45) {
        mensaje = true;
    } else {
        mensaje = false;
    }
    return mensaje;
}


