
let aleatorios;
let aleatoriosArray = [];
aleato1 = function () {
    min = 1;
    max = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

generarAleatorios = function () {
    let numero = recuperarInt("txtNumero");
    let validar = false;
    if (numero >= 5 && numero <= 20) {
        validar = true;
        for (let i = 0; i < numero; i++) {
            aleatorios = aleato1();
            aleatoriosArray.push(aleatorios); // Parentesis
            console.log(aleatorios);
        }
        mostrarResultados(aleatoriosArray);
    } else {
        mostrarTexto("lblerrores","El numero debe ser entre 5 y 20");
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


/** 
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
*/
