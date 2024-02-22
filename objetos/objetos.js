
probarAtributo = function () {
    let persona = {
        nombre: "Jose",
        apellido: "Dutan",
        edad: 19,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("No esta vivo")
    } else {
        console.log("Si esta vivo")
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "Papas",
        precio: 0.50,
        stock: 5,
    }

    let producto2 = {
        nombre: "Helado",
        precio: 1.00,
        stock: 10,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock.")
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock.")
    } else if (producto1.stock == producto2.stock) {
        console.log("Ambos productos tienen el mismo stock.")
    }
}

