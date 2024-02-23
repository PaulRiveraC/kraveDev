let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0302578166", nombre: "Francisco", apellido: "Peres", sueldo: 600.0 }
]

let esNuevo = false;

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
    let nuevo= ejecutraNuevo();

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
    let encontrar= buscarEmpleado (valorCedula);
    if (encontrar == null){
        nuevo;
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
                deshabilitarComponente("txtCedula");
                deshabilitarComponente("txtNombre");
                deshabilitarComponente("txtApellido");
                deshabilitarComponente("txtSueldo");
            }
        }

       
    } else {
        alert("Ya existe un empleado con la cedula"+ valorCedula);
    }
    
    
}

deshabilitar = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}