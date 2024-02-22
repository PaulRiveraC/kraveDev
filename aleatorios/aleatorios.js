

aleato1 = function () {
    min = 1;
    max = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

generarAleatorios = function () {
    let aleatorios = [];
    let numero = recuperarTexto("txtNumero");
    let validar = false;
    let imprimir;
    let imprimir2;
    let ale;
    let guardado;
    let pantalla;
    if (numero >= 5) {
        if (numero <= 20) {
            validar = true;
            for (let i = 0; i < numero; i++) {
                ale = aleato1();
                aleatorios[i];
                aleatorios.push[ale];
                imprimir = console.log(ale);
                imprimir2 = console.log(aleatorios.push[ale]);
            }
            pantalla = mostrarResultados(guardado);
        } else {
            validar;
        }
    } else {
        validar;
    }

}



mostraNota = function () {
    let cmpTabla = document.getElementById("divTable");
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i]
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarResultados = function (arreglonumeros) {
    let cmpTabla = document.getElementById("divTable");
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < arreglonumeros.length; i++) {
        miNota = arreglonumeros[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}



mostraNota = function () {
    let cmpTabla = document.getElementById("divTable");
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>";
    let miNota
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}
