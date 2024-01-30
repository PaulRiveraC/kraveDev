calcularPromedioNotas=function(){
    let num1 = recuperarFloat("lblNota1");
    let num2 =recuperarFloat("lblNota2");
    let num3 =recuperarFloat("lblNota3");
    let promedio= calcularPromedio(num1,num2,num3);
    let resuldadoRedondeado=promedio.toFixed(2);
    mostrarTexto("lblResultado","el resultado es: "+resuldadoRedondeado);
    alert("el promedio es "+resuldadoRedondeado);
    if(promedio<5){
        if(promedio>0){
            modificarImagenFracaso();
            mostrarTexto("lblMensaje","REPROBADO");
        }else{
            let cmpImagen1;
            cmpImagen1=document.getElementById("imagen1");
            cmpImagen1.src="piffle-error.gif";
            mostrarTexto("lblMensaje","Rango fuera de termino");
        }
    }else{
        let cmpImagen1;
        cmpImagen1=document.getElementById("imagen1");
        cmpImagen1.src="piffle-error.gif";
        mostrarTexto("lblMensaje","Rango fuera de termino");
    }

    if(promedio>=5){
        if(promedio<=8){
            modificarImagenExito();
            mostrarTexto("lblMensaje","BUEN TRABAJO");
        }
    }

    if(promedio>8){
        if(promedio<=10){
            modificarImagenExelente();
            mostrarTexto("lblMensaje","EXCELENTE");
        }
    }
    return promedio;
}

