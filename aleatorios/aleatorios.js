aleatorios= function(){
    min=1;
    max=100;
    min = Math.ceil(min);
    max = Math.floor(max);
    let imprimir=Math.floor(Math.random() * (max - min + 1) + min);
    console.log(imprimir);
}

generarAleatorios =function(){
    let aleatorios=[];
    let inicio = aleatorios[0];
    let numero = recuperarTexto("txtNumero");
    let validar=false;
    let imprimir;
    if (numero >= 5){
        if (numero <= 20){
            validar=true;
            for(let i=0; i<numero;i++){
                let ale=aleatorios();
                aleatorios.push[ale];
                imprimir= console.log(i);
                
            }
            let pantalla=mostrarResultados(aleatorios);
        }else{
            validar;
        }
    } else {
        validar;
    }

}

mostrarResultados = function(arregloNumeros){
    let cmpTabla = document.getElementById("divTable");
    let contenidoTabla="<table><tr><th>VALOR</th></tr>";
    let valor;
    for(let i=0;i<notas.length;i++){
        contenidoTabla+="<tr><td>";
        contenidoTabla+=valor;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
    
}

