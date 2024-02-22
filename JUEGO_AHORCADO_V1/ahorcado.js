//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

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

validar = function (letra) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecretaGlobal.length; i++) {
        if (palabraSecretaGlobal.charAt(i) === letra) {
            mostrarLetra(letra, i)
            letrasEncontradas++
        }
    }
    if (letrasEncontradas == 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostraAhorcado();
    } else {
        coincidienciasGlobal++;
    }
}
