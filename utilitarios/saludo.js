saludar=function(){
    //recuperar el valor de la caja de texto nombre
    let nombre=recuperarTexto("TxtNombre");
    //recuperar el valor de la caja de texto apellido
    let apellido=recuperarTexto("TxtApellido");
}
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado= componente.value;
    return valorIngresado;
}