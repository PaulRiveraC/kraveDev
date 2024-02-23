let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

mostrarOpcionEmpleado = function () {
    let mostrar;
    mostrar = mostrarComponente("divEmpleado");
    mostrar = ocultarComponente("divRol");
    mostrar = ocultarComponente("divResumen");

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
    mostrarRoles();
    mostrarTotales();
}

