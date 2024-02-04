calcularDescuentoPorVolumen = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let existeEror = false;
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    if (!isNaN(nombreProducto)) {
        mostrarTexto("lblError1", "CAMPO OBLIGATORIO");
        existeEror = true;
    } else {
        mostrarTexto("lblError1", "");
    }
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    if (isNaN(precioProducto)) {
        mostrarTexto("lblError2", "CAMPO OBLIGATORIO");
        existeEror = true;
    } else {
        mostrarTexto("lblError2", "");
    }
    //3. Recuperar cantidad como int    
    cantidad = recuperarInt("txtCantidad");
    if (isNaN(cantidad)) {
        mostrarTexto("lblError3", "CAMPO OBLIGATORIO");
        existeEror = true;
    } else {
        mostrarTexto("lblError3", "");
    }


    
    let val1 =validarProducto(nombreProducto);
    let val2 =validarCantidad(cantidad);
    let val3 =validarPrecio(precioProducto);
    if (existeEror == false) {
        if (val1 == true & val2 == true & val3 == true) {
            //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
            valorSubtotal = calcularSubtotal(precioProducto, cantidad);
            //5. Mostrar valorSubtotal en el componente lblSubtotal
            mostrarTexto("lblSubtotal", valorSubtotal);
            //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
            valorDescuento = calcularValorDescuento(cantidad, valorSubtotal);
            //7. Mostrar el resultado en el componente lblDescuento
            mostrarTexto("lblDescuento", valorDescuento);
            //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
            valorIVA = calcularIva(valorSubtotal - valorDescuento);
            //9. Mostrar el resultado en el componente lblValorIVA  
            mostrarTexto("lblValorIVA", valorIVA);
            //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
            valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
            //11. Mostrar el resultado en el componente lblTotal
            mostrarTexto("lblTotal", valorTotal);
        }
    }
}

limpiar = function () {
    mostrarTexto("lblTotal", 0.0);
    mostrarTexto("lblValorIVA", 0.0);
    mostrarTexto("lblDescuento", 0.0);
    mostrarTexto("lblSubtotal", 0.0);
    mostrarTexto("lblTotal", 0.0);
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
    mostrarTextoEnCaja("txtProducto", 0.0);
    mostrarTextoEnCaja("txtCantidad", 0.0);
    mostrarTextoEnCaja("txtPrecio", 0.0);
}