const user = "Maguito" ;
const password = "1234" ;
solicitarDatos();
function solicitarDatos(){
    let usuario = prompt("Ingresar su usuario");
    let pass = prompt("Ingresar su contraseña");
    if (usuario === user && pass === password){ 
     iniciarCarrito();
    }else{
        alert ("Datos incorrectos");
    }
}
function iniciarCarrito(){
  let finalizarCarrito = false ; 
  let total = 0  
  let compra = []
  let productosDisponibles = ["Libro mágico", "Poción", "Polvo de hadas", "Pluma de Fénix", ""]
    while (!finalizarCarrito){
        let nombreProducto = prompt("Ingrese el producto que desea comprar");
          if (nombreProducto === ""){
            finalizarCarrito = true ; 
          } else if ( productosDisponibles.includes(nombreProducto) === false){  
            productosDisponibles.includes(nombreProducto)
            alert("Ingrese un producto válido");  
          } else {
            compra.push (nombreProducto)
            let precio = obtenerPrecio (nombreProducto) 
            compra.indexOf("Polvo de hadas")
              if (compra.indexOf("Polvo de hadas") !== -1){
                precio -= 4
              }
            total += precio ;
          }
    }
  let dinero = 20
    if(compra != " "){ // si lista no está vacío
      let lista = ""
          for (let producto of compra){
            lista += "\n -" + producto
          }
      let respuesta = confirm("Desea concretar la compra de " +lista + "\n" + "El total es $" +total); //confirm solo te deja responder como true o false)
        if(respuesta){
          if(total < dinero){ 
            alert("Usted compró " +lista);
          }else if(total > dinero){
            alert("No tiene dinero suficiente.")
          }
        }
    }
} 
  function obtenerPrecio (cod){
    let precio ; 
    switch (cod){
      case "Libro mágico":
        precio = 7;
        break;
      case "Poción":
        precio = 10;
        break;
      case "Polvo de hadas":
        precio = 8;
        break;
      case "Pluma de Fénix":
        precio = 12;
        break;
      default:
        precio = false; 
    }
    return precio
  }
  