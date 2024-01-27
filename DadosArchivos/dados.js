jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblNumero","es mayor a 3");
        cambiarTexto("lblNumero2","ganaste");
    }else{
        cambiarTexto("lblNumero","es menor a 3");
        cambiarTexto("lblNumero2","estas de malas");
    }
}

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
}