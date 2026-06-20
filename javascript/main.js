const nombre_usuario = prompt("Ingrese su nombre") ; 
const apellido_usuario = prompt("Ingrese su apellido") ;
const nacimiento_usuario = parseInt(prompt("Ingrese su año de nacimiento")) ;
const año = 2026 ;
    
    console.log(nacimiento_usuario) ;
    console.log(typeof nacimiento_usuario) ;

const edad = año - nacimiento_usuario ;
    console.log (edad);

alert("Bienvenido " + nombre_usuario + " " + apellido_usuario + ". Usted tiene " + edad + " años.");


