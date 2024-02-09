validarPlaca = function(){
    nombrePlaca = recuperarTexto("lblPlaca");
    let erroresEstructura = validarEstructura(nombrePlaca);
    if (erroresEstructura == true){
        mostrarTexto("lblResumen", "Estructura Valida");
        mostrarTexto("lblResumen2", "");
        let provincia= obtenerTipoVehiculo(nombrePlaca);
        if (provincia == null ){
            mostrarTexto("lblResumen3", "PROVINCIA INCORRECTA");
        } else {
            mostrarTexto("lblResumen3", provincia);
        }
    } else {
        mostrarTexto("lblResumen", "Estructura Incorrecta");
        let provincia= obtenerTipoVehiculo(nombrePlaca);
        if (provincia == null ){
            mostrarTexto("lblResumen3", "PROVINCIA INCORRECTA");
        } else {
            mostrarTexto("lblResumen3", provincia);
        }
    }
}