calcularTasaInteres=function(ingresoAnual){
    let tasa;
    let float;
    let convertido;
    float=RecuperarTexto(ingresoAnual);
    convertido= convertirFloat(float);
    if (convertido<300000){
        tasa=(convertido*16)/100;
    } else if (convertido<500000){
        tasa=(convertido*15)/100;
    }else if (convertido<1000000){
        tasa=(convertido*14)/100;
    }else if (convertido<2000000){
        tasa=(convertido*15)/100;
    }else{
        tasa=(convertido*12)/100;
    }
    return tasa;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let cuota;
    let capacidad;
    let recuperar=RecuperarTexto(edad1);
    let recuperar2=RecuperarTexto(ingresos);
    let recuperar3=RecuperarTexto(egresos);
    let edad1=convertirInt(recuperar);
    let ingresos1=convertirFloat(recuperar2);
    let egresos1=convertirFloat(recuperar3);
    if(edad1>50){
        capacidad=ingresos1-egresos1;
        cuota=(capacidad*30)/100;
    }else if(edad1>0){
        if(edad1 <=50){
            capacidad=ingresos1-egresos1;
            cuota=(capacidad*40)/100;  
        }else{
            alert("edad erronea");
        }
    }
    return cuota;
}

calcularDescuento =function(precio, cantidad){
    let valorPagar;
    let recuperar=RecuperarTexto(precio);
    let recuperar2=RecuperarTexto(cantidad);
    let cantidad1=convertirInt(recuperar);
    let precio1=convertirFloat(recuperar2);
    if(cantidad1<3){
        valorPagar=precio1;
    } else if(cantidad1<=5){
        valorPagar=precio1-((precio1*2)/100);
    }else if(cantidad1<=11){
        valorPagar=precio1-((precio1*3)/100);
    }else {
        valorPagar=precio1-((precio1*4)/100);
    }
    return valorPagar;
}

determinarColesterolLDL=function(nivelColesterol){
    let mensaje;
    let recuperar=RecuperarTexto(nivelColesterol);
    nivelColesterol1=convertirFloat(recuperar);
    if (nivelColesterol1<100){
        mensaje="Optimo";
    } else if(nivelColesterol1<=129){
        mensaje="Casi optimo";
    }else if(nivelColesterol1<=159){
        mensaje="Límite superior del rango normal";
    }else if(nivelColesterol1<=189){
        mensaje="Alto";
    }else {
        mensaje="Muy alto";
    }
    return mensaje;
}

validarClave=function(clave){
    let mensaje;
    let recuperar=RecuperarTexto(clave);
    let letra=recuperar.lenght;
    if (letra>=8){
        if(letra<=16){
            mensaje=true;
        }else{
            mensaje=false;
        }
    } else{
        mensaje=false;
    }
    return mensaje;
}

esMayuscula=function(caracter){
    let mensaje;
    let recuperar=RecuperarTexto(caracter);
    let letra=recuperar.charCodeAt(0);
    if(letras>= 65){
        if(letra<=90){
            mensaje=true;
        } else{
            mensaje=false;
        }
    }else{
        mensaje=false;
    }
    return mensaje;
}

esMinuscula=function(caracter){
    let mensaje;
    let recuperar=RecuperarTexto(caracter);
    let letra=recuperar.charCodeAt(0);
    if(letras>= 97){
        if(letra<=122){
            mensaje=true;
        } else{
            mensaje=false;
        }
    }else{
        mensaje=false;
    }

    if (letra>=60){
        if(letra <= 163){
            mensaje=true;
        } else{
            mensaje=false;
        }
    } else{
        mensaje=false;
    }

    if(letra==130){
        mensaje=true;
    } else{
        mensaje=false;
    }

    return mensaje;
}

esDigito=function(caracter){
    let mensaje;
    let recuperar=RecuperarTexto(caracter);
    let letra=recuperar.charCodeAt(0);
    if(letras>= 48){
        if(letra<=57){
            mensaje=true;
        } else{
            mensaje=false;
        }
    }else{
        mensaje=false;
    }
    return mensaje;
}

darPermiso=function(notaMatematica,notaFisica,notaGeomatria){
    let mensaje;
    let recuperar=RecuperarTexto(notaMatematica);
    let recuperar2=RecuperarTexto(notaFisica);
    let recuperar3=RecuperarTexto(notaGeomatria);
    let notaMatematica1=convertirFloat(recuperar);
    let notaFisica1=convertirFloat(recuperar2);
    let notaGeomatria1=convertirFloat(recuperar3);

    if(notaMatematica1>90 || notaFisica1>90 || notaGeomatria1>90){
        mensaje=true
    }else {
            mensaje=false;
        }
    return mensaje;
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeomatria){
    let mensaje;
    let recuperar=RecuperarTexto(notaMatematica);
    let recuperar2=RecuperarTexto(notaFisica);
    let recuperar3=RecuperarTexto(notaGeomatria);
    let notaMatematica1=convertirFloat(recuperar);
    let notaFisica1=convertirFloat(recuperar2);
    let notaGeomatria1=convertirFloat(recuperar3);
    if(notaMatematica1>90 || notaFisica1>90){
        if(notaGeomatria1>80){
                mensaje=true;
            }else {
                mensaje=false;
            }
    }else {
            mensaje=false;
        }
    return mensaje;
}

dejarSalir=function(notaMatematica,notaFisica,notaGeomatria){
    let mensaje;
    let mensaje2;
    let recuperar=RecuperarTexto(notaMatematica);
    let recuperar2=RecuperarTexto(notaFisica);
    let recuperar3=RecuperarTexto(notaGeomatria);
    let notaMatematica1=convertirFloat(recuperar);
    let notaFisica1=convertirFloat(recuperar2);
    let notaGeomatria1=convertirFloat(recuperar3);
    if(notaMatematica1>90){
        if(notaFisica1>90){
            if(notaGeomatria1>90){
                mensaje=true;
            }else {
                mensaje=false;
            }
        }else {
            mensaje=false;
        }
    }else {
        mensaje=false;
    }

    if (notaMatematica1>90){
        if(notaFisica1>90){
            if(notaFisica1>notaMatematica){
                mensaje2= "Premio doble";
            }
        }{
            mensaje2="No hay premio doble";
        }
    }
    return mensaje, mensaje2;
}

RecuperarTexto=function(componente){
    let valorIngresado;
    let cmp;
    cmp= document.getElementById(componente);
    valorIngresado= cmp.value;
    return valorIngresado;
}


mostrarTexto=function(componente){
    let texto;
    texto=document.getElementById(componente);
    texto.innerText = mostrar;
    return mostrar;
}

convertirFloat=function(componente){
    let convertirF;
    let valor;
    valor=document.getElementById(componente);
    convertirF=parseFloat(valor);
    return convertirF;
}

convertirInt=function(componente){
    let convertirI;
    let valor;
    valor=document.getElementById(componente);
    convertirI=parseInt(valor);
    return convertirI;
}