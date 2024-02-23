let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    { cedula: "0302578166", nombre: "Francisco", apellido: "Peres", sueldo: 600.0}
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