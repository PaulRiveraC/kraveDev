jugar=function(){
    let valorRecuperado;
    valorRecuperado=lanzarDado();
    cambiarTexto("lblNumero",valorRecuperado);
    if(valorRecuperado>3){
        cambiarTexto("lblNumero","es mayor a 3");
        cambiarTexto("lblNumero2","ganaste");
    }else{
        cambiarTexto("lblNumero","es menor a 3");
        cambiarTexto("lblNumero2","estas de malas");
    }
}

lanzarDado=function(){
    let aleatorio;
    let numeromultiplicado;
    let numeroEntero;
    let valordado;
    aleatorio=Math.random();
    numeromultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeromultiplicado);
    valordado=numeroEntero+1;
    return valordado;
  
}