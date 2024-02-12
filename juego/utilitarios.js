mostrarTextoEnCaja= function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}
mostrarImagen=function(idComponente, rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src= rutaImagen;
}

mostrarTexto=function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;

}
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente= document.getElementById(idComponente);
    valorIngresado= componente.value;
    return valorIngresado;
}

recuperarInt= function(idComponente){
    let valorcaja;
    let valorEntero;
    valorcaja= recuperarTexto(idComponente);
    valorEntero= parseInt(valorcaja);
    return valorEntero;
}

recuperarFloat= function(idComponente){
    let valorcaja;
    let valorflotante;
    valorcaja= recuperarTexto(idComponente);
    valorflotante= parseFloat(valorcaja);
    return valorflotante;
}

longitud = function (recuperar) {
    const letra2= recuperar.length;
    if (letra2>=7 && letra2<=8){
        mensaje=true;
    }else{
        mensaje=false;
    }
    return mensaje;
}

longitud2 = function (recuperar) {
    const letra2= recuperar.length;
    let mensaje=letra2-1;
    return mensaje;
}

verificarlongitud8 = function (recuperar) {
    const letra2= recuperar.length;
    if (letra2==8){
        mensaje=true;
    }else{
        mensaje=false;
    }
    return mensaje;
}