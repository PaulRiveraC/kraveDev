calcularDescuentoPorVolumen = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int    
    cantidad=recuperarInt("txtCantidad");
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal= calcularSubtotal(precioProducto,cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal",valorSubtotal);
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento=calcularValorDescuento(cantidad,valorSubtotal);
    //7. Mostrar el resultado en el componente lblDescuento
    mostrarTexto("lblDescuento",valorDescuento);
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA=calcularIva(valorSubtotal-valorDescuento);
    //9. Mostrar el resultado en el componente lblValorIVA  
    mostrarTexto("lblValorIVA",valorIVA);  
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal",valorTotal);
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
}   

limpiar=function(){
    mostrarTexto("lblTotal",0.0);
    mostrarTexto("lblValorIVA",0.0);
    mostrarTexto("lblDescuento",0.0);
    mostrarTexto("lblSubtotal",0.0);
    mostrarTexto("lblTotal",0.0);
    mostrarTextoEnCaja("txtProducto",0.0);
    mostrarTextoEnCaja("txtCantidad",0.0);
    mostrarTextoEnCaja("txtPrecio",0.0);   
}