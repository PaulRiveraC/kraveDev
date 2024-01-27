calcularPromedioNotas=function(){
    let num1 = recuperarFloat("lblNota1");
    let num2 =recuperarFloat("lblNota2");
    let num3 =recuperarFloat("lblNota3");
    let promedio= calcularPromedio(num1,num2,num3);
    let resuldadoRedondeado=promedio.toFixed(2);
    mostrarTexto("lblResultado",resuldadoRedondeado);
    alert("el primedio es "+resuldadoRedondeado);
    return promedio;
}

