
calcularValorDescuento=function(cantidad,valorSubtotal){
    if (cantidad < 3) {
        descuentos = 0;
    } else if (cantidad <= 5) {
        descuentos= (valorSubtotal * 3  ) / 100;
    } else if (cantidad > 5 & cantidad <= 11) {
        descuentos = (valorSubtotal * 4) / 100;
    } else if (cantidad > 11) {
        descuentos = (valorSubtotal * 5) / 100;
    }
    return descuentos;
}

calcularIva=function(monto){
    iva=(monto*12)/100;
    return iva;
}

calcularSubtotal=function(precio,cantidad){
    totalapagar=precio*cantidad;
    return totalapagar;
}

calcularTotal=function(subtotal,descuento,iva){
    valorTotalaPagar=subtotal-descuento+iva;
    return valorTotalaPagar;
}

