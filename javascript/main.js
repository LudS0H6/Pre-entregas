//iniciar sesión de usuario
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
//iniciar la compra
function iniciarCarrito(){
  let finalizarCarrito = false ; 
  let total = 0  
  let compra = []
//Productos
  class Producto {
 constructor(nombre, id, precio, promocion) {
   this.nombre = nombre
   this.id = id
   this.precio = precio
   this.promocion = promocion
 }
 // Método para calcular si el producto tiene promoción"
 calcularPromocion() {
    if (this.promocion === true){
        return this.precio / 4 
    } else{ 
    return this.precio
  }
 }
}
// Instancias (productos)
const producto1 = new Producto("Libro Mágico", "1", 7, false)
    const producto2 = new Producto("Poción", "2", 10, false)
    const producto3 = new Producto("Polvo de hadas", "3", 8, true)
    const producto4 = new Producto("Pluma de Fénix", "4", 12, false)
let productosDisponibles = [producto1, producto2, producto3, producto4]
//Compra
while (!finalizarCarrito){
        let nombreProducto = prompt("Ingrese el ID del producto que desea comprar");
        let productoEncontrado = false;
      //Buscar el producto
        for (let producto of productosDisponibles){
          if (nombreProducto === producto.id){
        productoEncontrado = true;
          }
        }
        //Si el campo se deja vacío
          if (nombreProducto === ""){ 
            finalizarCarrito = true ; 
        //Si el producto NO existe
          } else if (productoEncontrado === false){ 
            alert("Ingrese un producto válido"); 
        //Si el producto existe
          } else { 
            for (let producto of productosDisponibles){
                if (nombreProducto === producto.id){
                    compra.push (producto)
                     total += producto.calcularPromocion ()
                }
            }
          }
    }
  let dinero = 20
  //Confirmación de la compra
    if(compra.length > 0){ // (Si lista no está vacía)
      let lista = ""
          for (let producto of compra){
            lista += "\n -" + producto.nombre
          }
      let respuesta = confirm("Desea concretar la compra de " +lista + "\n" + "El total es $" +total); //confirm solo te deja responder como true o false)
        if(respuesta){
          if(total === 0){ //si no se seleccionan productos
            alert("Usted no ha comprado nada")
             iniciarCarrito()
          }else if(total <= dinero){  //si alcanza el dinero
            alert("Usted compró " +lista);
          }else if(total > dinero){ //si no alcanza el dinero
            alert("No tiene dinero suficiente.")
          }
        }
    }
} 
 