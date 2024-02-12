puntosUsuario=0;
puntosComputador=0;
lanzarDado = function () {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

obtenerAleatorio = function () {
    let aleatorio;
    aleatorio = lanzarDado();
    //console.log(aleatorio);
    return aleatorio;
}

generarElemento = function () {
    let juego = lanzarDado();
    let mensaje;
    if (juego == 1) {
        mensaje = "piedra"
    }
    if (juego == 2) {
        mensaje = "papel"
    }
    if (juego == 3) {
        mensaje = "tijera"
    }
    //    console.log(mensaje);
    //    console.log(juego);
    return mensaje;
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let mensaje;
    let valor;
    if (eleccionJugador1 == 1 && eleccionJugador2 == 1) {
        mensaje = "empate";
        valor = 0;
    }
    if (eleccionJugador1 == 1 && eleccionJugador2 == 2) {
        mensaje = "gana jugador2";
        valor = 2;
    }
    if (eleccionJugador1 == 1 && eleccionJugador2 == 3) {
        mensaje = "gana jugador1";
        valor = 1;
    }
    if (eleccionJugador1 == 2 && eleccionJugador2 == 1) {
        mensaje = "gana jugador1";
        valor = 1;
    }
    if (eleccionJugador1 == 2 && eleccionJugador2 == 2) {
        mensaje = "empate";
        valor = 0;
    }
    if (eleccionJugador1 == 2 && eleccionJugador2 == 3) {
        mensaje = "gana jugador2";
        valor = 2;
    }
    if (eleccionJugador1 == 3 && eleccionJugador2 == 1) {
        mensaje = "gana jugador2";
        valor = 2;
    }
    if (eleccionJugador1 == 3 && eleccionJugador2 == 2) {
        mensaje = "gana jugador1";
        valor = 1;
    }
    if (eleccionJugador1 == 3 && eleccionJugador2 == 3) {
        mensaje = "empatan";
        valor = 0;
    }
        console.log("jugaor1"+eleccionJugador1);
        console.log("jugaor2"+eleccionJugador2);
        console.log(mensaje);
    return valor;
}

generarRuta = function (nombre) {
    //    nombre=generarElemento();
    if (nombre == "piedra") {
        mostrarImagen("lblComputador", "./imagenes/piedra.png");
    }
    if (nombre == "papel") {
        mostrarImagen("lblComputador", "./imagenes/papel.png");
    }
    if (nombre == "tijera") {
        mostrarImagen("lblComputador", "./imagenes/tijera.png");
    }

}


jugarpiedra = function (seleccionado) {
    seleccionado = 1;
    let mensaje;
    let nombre = generarElemento(); //manda nombre piedra 1 papel2 o tijera3 al azar
    if (nombre == "piedra") {
        mensaje = 1;
    }
    if (nombre == "papel") {
        mensaje = 2;
    }
    if (nombre == "tijera") {
        mensaje = 3;
    }
    let imagen = generarRuta(nombre);//comparador de lestras piedra, papel o  y muestra imagen
    let ganador= determinarGanador(mensaje , seleccionado);

    if (ganador == 0) {
        mostrarTexto("lblGanador", "EMPATE...!!!");
    }
    if (ganador == 2) {
        mostrarTexto("lblGanador", "GANASTE LA PARTIDA(^__^/)...!!!");
        puntosUsuario=puntosUsuario+1;
    }
    if (ganador == 1) {
        mostrarTexto("lblGanador", "PERDISTE LA PARTIDA(@__@)...!!!");
        puntosComputador=puntosComputador+1;
    }
    mostrarTexto("lblPuntaje","Puntaje Usuario:"+puntosUsuario);
    mostrarTexto("lblPuntaje2","Puntaje Computador:"+puntosComputador);
    final (puntosUsuario,puntosComputador);
//    console.log(puntosComputador);
//    console.log(puntosUsuario);

}

jugarpapel = function (seleccionado) {
    seleccionado = 2;
    let mensaje;
    let nombre = generarElemento(); //manda nombre piedra 1 papel2 o tijera3 al azar
    if (nombre == "piedra") {
        mensaje = 1;
    }
    if (nombre == "papel") {
        mensaje = 2;
    }
    if (nombre == "tijera") {
        mensaje = 3;
    }
    let imagen = generarRuta(nombre);//comparador de lestras piedra, papel o  y muestra imagen
    let ganador= determinarGanador(mensaje , seleccionado);
    if (ganador == 0) {
        mostrarTexto("lblGanador", "EMPATE...!!!");
    }
    if (ganador == 2) {
        mostrarTexto("lblGanador", "GANASTE LA PARTIDA(^__^/)...!!!");
        puntosUsuario=puntosUsuario+1;
    }
    if (ganador == 1) {
        mostrarTexto("lblGanador", "PERDISTE LA PARTIDA(@__@)...!!!");
        puntosComputador=puntosComputador+1;
    }
    mostrarTexto("lblPuntaje","Puntaje Usuario:"+puntosUsuario);
    mostrarTexto("lblPuntaje2","Puntaje Computador:"+puntosComputador);
    final (puntosUsuario,puntosComputador);
//    console.log(puntosComputador);
//    console.log(puntosUsuario);
}

jugartijera = function (seleccionado) {
    seleccionado = 3;
    let mensaje;
    let nombre = generarElemento(); //manda nombre piedra 1 papel2 o tijera3 al azar
    if (nombre == "piedra") {
        mensaje = 1;
    }
    if (nombre == "papel") {
        mensaje = 2;
    }
    if (nombre == "tijera") {
        mensaje = 3;
    }
    let imagen = generarRuta(nombre);//comparador de lestras piedra, papel o  y muestra imagen
    let ganador= determinarGanador(mensaje , seleccionado);
    if (ganador == 0) {
        mostrarTexto("lblGanador", "EMPATE...!!!");
    }
    if (ganador == 2) {
        mostrarTexto("lblGanador", "GANASTE LA PARTIDA(^__^/)...!!!");
        puntosUsuario=puntosUsuario+1;
    }
    if (ganador == 1) {
        mostrarTexto("lblGanador", "PERDISTE LA PARTIDA(@__@)...!!!");
        puntosComputador=puntosComputador+1;
    }
    mostrarTexto("lblPuntaje","Puntaje Usuario:"+puntosUsuario);
    mostrarTexto("lblPuntaje2","Puntaje Computador:"+puntosComputador);
    final (puntosUsuario,puntosComputador);
//    console.log(puntosComputador);
//    console.log(puntosUsuario);
}

final  =function(puntosu,puntosc){
    if(puntosu == 5){
        mostrarTexto("lblRespuesta","HAS GANADO EL JUEGO"); 
    }

    if(puntosc == 5){
        mostrarTexto("lblRespuesta","EL COMPUTADOR HA VENCIDO");
    }

}

limpiar = function () {
    mostrarImagen("lblComputador","./imagenes/enfrentamiento.png");
    mostrarTexto("lblGanador","");
    mostrarTexto("lblPuntaje","Puntaje Usuario:0");
    mostrarTexto("lblPuntaje2","Puntaje Computador:0");
    mostrarTexto("lblRespuesta","");
    puntosComputador=0;
    puntosUsuario=0;
}
