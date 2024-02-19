esMayuscula=function(caracter){
    let mensaje;
    let letra=caracter.charCodeAt(0);
    if(letra>= 65){
        if(letra<=90){
            mensaje=true;
        } else{
            mensaje=false;
        }
    }else{
        mensaje=false;
    }
    return mensaje;
}

esCaracterEspecial=function(caracter){
    let mensaje=0;
    let letra=caracter.charCodeAt(0);
    let resumen=true;
    if(letra == 42){
        mensaje=mensaje+1;
    } 
    if(letra == 45){
        mensaje=mensaje+1;
    }
    if(letra == 95){
        mensaje=mensaje+1;
    }
    if (mensaje < 1){
        resumen=false;
    }
    return resumen;
}


esDigito=function(caracter){
    let mensaje;
    let letra=caracter.charCodeAt(0);
    if(letra>= 48){
        if(letra<=57){
            mensaje=true;
        } else{
            mensaje=false;
        }
    }else{
        mensaje=false;
    }
    return mensaje;
}

contarMayusculas = function (cadena) {
    let letra;
    let contadorMayusculas;
    let mensaje;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esMayuscula(letra)==true) {
            contadorMayusculas = contadorMayusculas + 1;
        }
    }
    if (contadorMayusculas < 1) {
        mensaje = true;
    } else {
        mensaje = false;
    }
    return mensaje;
}

contarDigito = function (cadena) {
    let letra;
    let contadorDigitos;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esDigito(letra)==true) {
            contadorDigitos = contadorDigitos+1;
        }
    }
    if (contadorDigitos < 1) {
        mensaje = true;
    } else {
        mensaje = false;
    }
    return mensaje;

}

contarCaracterEspecial = function (cadena) {
    let letra;
    let contadorDigitos;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esCaracterEspecial(letra)==true) {
            contadorDigitos = contadorDigitos+1;
        }
    }
    if (contadorDigitos < 1) {
        mensaje = true;
    } else {
        mensaje = false;
    }
    return mensaje;

}

