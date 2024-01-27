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

modificarImagenExito = function(){
    let cmpImagen1;
    cmpImagen1=document.getElementById("imagen1");
    cmpImagen1.src="bien.gif ";
}

modificarImagenFracaso = function(){
    let cmpImagen1;
    cmpImagen1=document.getElementById("imagen1");
    cmpImagen1.src="mal.gif ";
}