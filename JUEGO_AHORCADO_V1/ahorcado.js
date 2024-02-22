//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if(codigo >= 65 && codigo <= 90){
        return true
    } else{
        return false
    }
}

guardarPalabra = function () {
    let palabra;
    let longitud;
    let letra;
    let contador=false;

    palabra = recuperarTexto("txtSecreta");
    longitud = palabra.length;

    for(let i=0;i<palabra.length;i++){
        letra=palabra.charAt(i);
        if(esMayuscula(letra)){
            contador=true;
        }
    }
    
    if (longitud != 5) {
        mostrarTexto("lblErrores", "Debe tener 5 Caracteres");
    }else if(contador == false){
        mostrarTexto("lblErrores", "Todas las letras deben ser Mayusculas");
    }else {
        palabraSecretaGlobal=palabra;
        console.log(palabraSecretaGlobal);
    }
}