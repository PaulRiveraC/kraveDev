validarPlaca = function(){
    nombrePlaca = recuperarTexto("lblPlaca");
    let erroresEstructura = validarEstructura(nombrePlaca);
    if (erroresEstructura == true){
        mostrarTexto("lblResumen", "Estructura Valida");
        mostrarTexto("lblResumen2", "");
        let provincia= obtenerProvincia(nombrePlaca);
        if (provincia == null ){
            mostrarTexto("lblResumen3", "PROVINCIA INCORRECTA");
        } else {
            mostrarTexto("lblResumen3", provincia);
        }
        let vehiculo= obtenerTipoVehiculo(nombrePlaca);
        if (vehiculo == null ){
            mostrarTexto("lblResumen4", "Vehiculo incorrecto");
        } else {
            mostrarTexto("lblResumen4", vehiculo);
        }

        let picoPlaca= obtenerDiaYPlaca (nombrePlaca);
        mostrarTexto("lblResumen5", picoPlaca);

    } else {
        mostrarTexto("lblResumen", "Estructura Incorrecta");
        let provincia= obtenerProvincia(nombrePlaca);
        if (provincia == null ){
            mostrarTexto("lblResumen3", "PROVINCIA INCORRECTA");
        } else {
            mostrarTexto("lblResumen3", provincia);
        }
        let vehiculo= obtenerTipoVehiculo(nombrePlaca);
        if (vehiculo == null ){
            mostrarTexto("lblResumen4", "Vehiculo incorrecto");
        } else {
            mostrarTexto("lblResumen4", vehiculo);
        }
    }
}