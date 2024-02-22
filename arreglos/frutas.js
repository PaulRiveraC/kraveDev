let frutas = ["pera", "manzana", "banana"];

probraBusqueda = function () {
    let frutaIngresada = recuperarTexto("lblFruta");
    let resultado = buscar(frutaIngresada)
    if(resultado==null){
        alert("NO EXISTE LA FRUTA")
    }else{
        alert(frutaIngresada=" existe en el cestol!")
    }
}

buscar = function (fruta) {
    let elemento;
    let frutaEncontrada = null;
    for (let i = 0; i < frutas.length; i++) {
        elemento = frutas[i];
        if (fruta == elemento) {
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}