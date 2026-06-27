const nombre_usuario = prompt("Ingrese su nombre") ; 
const apellido_usuario = prompt("Ingrese su apellido") ;
let nacimiento_usuario = parseInt(prompt("Ingrese su año de nacimiento")) ;
const anio = 2026 ;

let edad = anio - nacimiento_usuario ;
    while (edad < 18){
       alert("Debes ser mayor de edad para ingresar a este sitio.");
            nacimiento_usuario = parseInt(prompt("Ingrese su año de nacimiento")) ;
            edad = anio - nacimiento_usuario ;
                if (edad < 0){
                    alert("Por favor ingrese un año válido.") ;
                    nacimiento_usuario = parseInt(prompt("Ingrese su año de nacimiento")) ;
                    edad = anio - nacimiento_usuario ;   
                    }
    }
    if (edad >= 18){
        alert("Bienvenido " + nombre_usuario + " " + apellido_usuario + ". Usted tiene " + edad + " años.");
    }