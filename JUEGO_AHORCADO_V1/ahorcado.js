//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecretaGlobal;
let intentosGlobal=0;
let coincidienciasGlobal=0;
let errores=0;

esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true
    } else {
        return false
    }
}

guardarPalabra = function () {
    let palabra;
    let longitud;
    let letra;
    let contador = false;

    palabra = recuperarTexto("txtSecreta");
    longitud = palabra.length;

    for (let i = 0; i < palabra.length; i++) {
        letra = palabra.charAt(i);
        if (esMayuscula(letra)) {
            contador = true;
        }
    }

    if (longitud != 5) {
        mostrarTexto("lblErrores", "Debe tener 5 Caracteres");
    } else if (contador == false) {
        mostrarTexto("lblErrores", "Todas las letras deben ser Mayusculas");
    } else {
        palabraSecretaGlobal = palabra;
        console.log(palabraSecretaGlobal);
    }
}

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra)
    } else if (posicion == 1) {
        mostrarTexto("div1", letra)
    } else if (posicion == 2) {
        mostrarTexto("div2", letra)
    } else if (posicion == 3) {
        mostrarTexto("div3", letra)
    } else if (posicion == 4) {
        mostrarTexto("div4", letra)
    }
}

validar=function(letra){
    let letrasEncontradas=0;
    for(let i=0;i<palabraSecretaGlobal.length;i++){
        if(palabraSecretaGlobal.charAt(i)===letra){
            mostrarLetra(letra, i)
            letrasEncontradas++
        }
    }
    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostraAhorcado();
    } else{
        coincidienciasGlobal++;
    }
}

ingresarLetra=function(){
    let recuperaLetra;
    recuperaLetra=recuperarTexto("txtLetra");
    if(esMayuscula(recuperaLetra)){
        validar(recuperaLetra);
        if(coincidienciasGlobal===5){
            alert("HA GANADO");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }
    intentosGlobal++;
    if(intentosGlobal===10){
        alert("HA PERDIDO");

    }
}

mostraAhorcado= function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
}