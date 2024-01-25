saludar=function(){
    //recuperar el valor de la caja de texto nombre
    let nombre=recuperarTexto("TxtNombre");
    //recuperar el valor de la caja de texto apellido
    let apellido=recuperarTexto("TxtApellido");
    let edad=recuperarInt("TxtEdad");
    let estatura=recuperarFloat("TxtEstatura");
    let mensajeBienvenida="bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./imagenes/2.gif");
    mostrarTextoEnCaja("TxtNombre"," ");
}
