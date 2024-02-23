
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

modificarAtributos = function () {
    let cuenta = {
        numero: "4328947382974",
        saldo: 0.0,
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "030257",
        nombre: "Jose",
    }
    let cliente1 = {};
    cliente1.nombre = "Jose";
    cliente1.apellido = "Dutan";
    cliente1.cedula = "030257";
}

probarIncrementoSaldo = function () {
    let cta = { numero: "23424", saldo: 34.0 }
    incrementarSaldo(cta, 100);
    console.log(cta.saldo)
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

probarDeterminarMayor = function () {
    let per1 = { nombre: "Daniel", edad: 45 };
    let per2 = { nombre: "Luisa", edad: 48 };
    let mayor;
    mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es: " + mayor.nombre);
    }
}


determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}