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
  let lista = " " ; 
  let finalizarCarrito = false ; 
  let total = 0
  while (!finalizarCarrito){ 
    let nombreProducto = prompt("Ingrese el producto que desea comprar");
    let producto = obtenerProducto (nombreProducto); 
    let precio = obtenerPrecio (nombreProducto) 
    
    if(producto){
      lista += "\n -" + producto ; 
      total += precio ;
    }else{
      if (nombreProducto === null){
        finalizarCarrito = true ; 
      } else {
        alert("Ingrese un producto válido");
      }
    }
  }
let dinero = 20 
    if(lista != " "){ 
    let respuesta = confirm("Desea concretar la compra de " +lista + "\n"+ "El total es $" +total); 
    if(respuesta){
        if(total < dinero){
        alert("Usted compró " +lista);
        }else if(total > dinero){
        alert("No tiene dinero suficiente.")
  }
    }
  } 
}
  function obtenerProducto (cod){
    let producto ; 
    switch (cod){
      case "1":
        producto = "Libro mágico";
        break;
      case "2":
        producto = "Poción";
        break;
      case "3":
        producto = "Polvo de hadas";
        break;
      case "4":
        producto = "Pluma de Fenix";
        break;
      default:
        producto = false; 
    }
    return producto
  } 
  function obtenerPrecio (cod){
    let precio ; 
    switch (cod){
      case "1":
        precio = 7;
        break;
      case "2":
        precio = 10;
        break;
      case "3":
        precio = 8;
        break;
      case "4":
        precio = 12;
        break;
      default:
        precio = false; 
    }
    return precio
  }
  