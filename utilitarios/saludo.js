saludar=function(){
    //recuperar el valor de la caja de texto nombre
    let nombre=recuperarTexto("TxtNombre");
    //recuperar el valor de la caja de texto apellido
    let apellido=recuperarTexto("TxtApellido");
    let edad=recuperarInt("TxtEdad");
    let estatura=recuperarFloat("TxtEstatura");
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