let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0302578166", nombre: "Francisco", apellido: "Peres", sueldo: 600.0 }
]

let esNuevo = false;
let roles = [];

mostrarOpcionEmpleado = function () {
    let mostrar;
    mostrar = mostrarComponente("divEmpleado");
    mostrar = ocultarComponente("divRol");
    mostrar = ocultarComponente("divResumen");
    mostrar = mostrarEmpleado();

}

mostrarOpcionRol = function () {
    let mostrar;
    mostrar = mostrarComponente("divRol");
    mostrar = ocultarComponente("divEmpleado");
    mostrar = ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    let mostrar;
    mostrar = mostrarComponente("divResumen");
    mostrar = ocultarComponente("divEmpleado");
    mostrar = ocultarComponente("divRol");
}

mostrarEmpleado = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i]
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutraNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let resultado;
    resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        alert("Empleado Agregado");
        return true;
    } else {
        alert("ya existe el empleado con esa cedula: " + empleado.cedula);
        return false;
    }
}

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let esCedula = valorCedula.length;
    let esNombre = valorNombre.length;
    let esApellido = valorApellido.length;
    let mayusculaNombre = esMayuscula(valorNombre);
    let mayusculaApellido = esMayuscula(valorApellido);
    let objetoEmpleado = [];
    let guardarEmpleado;

    if (esCedula == 10) {
        mostrarTexto("lblErrorCedula", "");
    } else {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 numeros");
    }

    if (esNombre >= 3 && mayusculaNombre == true) {
        mostrarTexto("lblErrorNombre", "");
    } else {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres y deben de ser mayusculas");
    }

    if (esApellido >= 3 && mayusculaApellido == true) {
        mostrarTexto("lblErrorApellido", "");
    } else {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres y deben de ser Mayusculas");
    }

    if (valorSueldo >= 400 && valorSueldo <= 5000) {
        mostrarTexto("lblErrorSueldo", "");
    } else {
        mostrarTexto("lblErrorSueldo", "El valor del suledo debe ser entre 400 y 5000 dolares");
    }

    if (esNuevo == true) {
        objetoEmpleado.cedula = valorCedula;
        objetoEmpleado.nombre = valorNombre;
        objetoEmpleado.apellido = valorApellido;
        objetoEmpleado.sueldo = valorSueldo;
        guardarEmpleado = agregarEmpleado(objetoEmpleado);
        if (guardarEmpleado == true) {
            empleados.push(objetoEmpleado);
            alert("Empleado Guardado Correctamente")
            mostrarEmpleado();
            deshabilitar();
        }
    }
    if (esNuevo == false) {
        objetoEmpleado.cedula = valorCedula
        objetoEmpleado.nombre = valorNombre;
        objetoEmpleado.apellido = valorApellido;
        objetoEmpleado.sueldo = valorSueldo;
        guardarEmpleado = buscarEmpleado(objetoEmpleado);
        alert("EMPLEADO MODIFICADO EXITOSAMENTE");
        mostrarEmpleado();
        deshabilitar();
    }
}

deshabilitar = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(valorCedula);
    if (empleado === null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
    }
}

limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    deshabilitar();
}

buscarporRol = function () {
    let valorIngresado = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(valorIngresado);
    if (empleados != null) {
        mostrarTexto("infoCedula", empleado.cedula);
        mostrarTexto("infoNombre", empleado.nombre + " " + empleado.apellido);
        mostrarTexto("infoSueldo", empleado.sueldo);
    } else (
        alert("EL EMPLEADO NO EXISTE")
    )
}

calcularAporteEmpleado = function (sueldo) {
    sueldo = sueldo * (9.45 / 100);
    return sueldo.toFixed(2);
}

calcularValorAPagar = function (sueldo, aporte, descuento) {
    let pagar = sueldo - (aporte + descuento);
    return pagar.toFixed(2);
}

calcularRol = function () {
    let recuperadoSueldo = recuperarTextoDiv("infoSueldo");
    let recuperadoDescuento = recuperarFloat("txtDescuentos");
    let resultadoAporteEmpleado;
    let resultadoValorAPagar;
    if (recuperadoDescuento != "" && recuperadoDescuento >= 0 && recuperadoDescuento <= recuperadoSueldo) {
        resultadoAporteEmpleado = calcularAporteEmpleado(recuperadoSueldo);
        mostrarTexto("infoIESS", resultadoAporteEmpleado)
        resultadoValorAPagar = calcularValorAPagar(recuperadoSueldo, resultadoAporteEmpleado, recuperadoDescuento)
        mostrarTexto("infoPago", resultadoValorAPagar)
        habilitarComponente("btnGuardarRol");
    }
}

buscarRol = function (cedula) {
    let buscarRolCedula;
    let rolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        buscarRolCedula = roles[i];
        if (buscarRolCedula.cedula == cedula) {
            rolEncontrado = buscarRolCedula;
            break;
        }
    } return rolEncontrado;
}

agregarRol = function (rol) {
    let resultado;
    resultado = buscarRol(rol.cedula);
    if (resultado == null) {
        roles.push(rol);
        alert("Cliente Agregado");
    } else {
        alert("ya existe el cliente con esa cedula: " + cliente.cedula);
    }
}

calcularAporteEmpleador = function (sueldo) {
    sueldo = sueldo * (11.15 / 100);
    return sueldo.toFixed(2);
}

guardarRol = function () {
    let pagar = recuperarTextoDiv("infoPago");
    let aporte = recuperarTextoDiv("infoIESS");
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarTextoDiv("infoSueldo");
    let apoteIees = calcularAporteEmpleador(sueldo);
    let rol = {}
    rol.pagar = pagar
    rol.aporte = aporte
    rol.nombre = nombre
    rol.cedula = cedula
    rol.aporteIees = apoteIees
    agregarRol(rol);
    alert("EXITO")
    deshabilitarComponente("btnGuardarRol");
}