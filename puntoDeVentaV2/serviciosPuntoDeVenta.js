
calcularValorDescuento = function (cantidad, valorSubtotal) {
    if (cantidad < 3) {
        descuentos = 0;
    } else if (cantidad <= 5) {
        descuentos = (valorSubtotal * 3) / 100;
    } else if (cantidad > 5 & cantidad <= 11) {
        descuentos = (valorSubtotal * 4) / 100;
    } else if (cantidad > 11) {
        descuentos = (valorSubtotal * 5) / 100;
    }
    return descuentos;
}

calcularIva = function (monto) {
    iva = (monto * 12) / 100;
    return iva;
}

calcularSubtotal = function (precio, cantidad) {
    totalapagar = precio * cantidad;
    return totalapagar;
}

calcularTotal = function (subtotal, descuento, iva) {
    valorTotalaPagar = subtotal - descuento + iva;
    return valorTotalaPagar;
}

validarProducto = function (recuperar) {
    const letra2= recuperar.length;
    if (letra2>=0 && letra2<=10){
        mostrarTexto("lblError1", "");
        mensaje=true;
    }else{
        mostrarTexto("lblError1", "El nombre del producto no puede tener mas de 10 caracteres");
        mensaje=false;
    }
    return mensaje;
}


validarCantidad = function (recuperar) {
    let mensaje;
    if (recuperar>=0 & recuperar <=100){
        mostrarTexto("lblError2", "");
        mensaje=true;
    }else{
        mostrarTexto("lblError2", "La cantidad debe ser un numero entero entre 0 y 100");
        mensaje=false;
    }
    return mensaje;
}

validarPrecio = function (recuperar) {
    let mensaje;
    if (recuperar>=0 & recuperar <=50){
        mostrarTexto("lblError3", "");
        mensaje=true;
    }else{
        mostrarTexto("lblError3", "El precio debe ser un numero entre 0 y 50");
        mensaje=false;
    }
    return mensaje;
}
