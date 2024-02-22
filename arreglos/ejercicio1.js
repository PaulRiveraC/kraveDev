let notas = [];

agregarElementos = function () {
    notas.push(5);;
    notas.push(10);
    console.log(notas.length);
}

recorerAreglo = function () {
    let notaR
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
    mostraNota();
}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}

ejecutarPromedio = function () {
    let invocar;
    invocar = calcularPromedio();
    mostrarTexto("lblPromedio", invocar);

}

generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla = document.getElementById("divTable");
    contenidoTabla+="<table><tr><td>UNO</td></tr></table>"+
    "<table><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostraNota=function(){
    let cmpTabla = document.getElementById("divTable");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota
    for(let i=0;i<notas.length;i++){
        miNota=notas[i]
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
//ejemplos de clase