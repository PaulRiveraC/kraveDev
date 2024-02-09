validarPlaca = function(){
    nombrePlaca = recuperarTexto("lblPlaca");
    let erroresEstructura = validarEstructura(nombrePlaca);
    if (erroresEstructura == true){
        mostrarTexto("lblResumen", "Estructura Valida");
        mostrarTexto("lblResumen2", "");
    } else {
        mostrarTexto("lblResumen", "Estructura Incorrecta");
    }
}