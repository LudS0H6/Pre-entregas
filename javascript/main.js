//iniciar sesión de usuario
let usuarioLogueado; //nota para mí 1: se pone esto acá xq sino, cuando esto corresponda a algo, solo va a existir dentro del if y no para el resto del codigo
class Usuario {
 constructor(user, password, dinero, divisa) {
   this.user = user
   this.password = password
   this.dinero = dinero
 }
}
//Instancias (usuarios)
    const usuario1 = new Usuario("Maguito", "1234", 30)
    const usuario2 = new Usuario("Elfo", "5678", 45)
    const usuario3 = new Usuario("Duende", "9000", 15)
let usuariosExistentes = [usuario1, usuario2, usuario3];
let usuarioIngresado = prompt("Ingresar su usuario");
const usuario = usuariosExistentes.find(persona => persona.user === usuarioIngresado); //nota para mí: se busca en el array, NO en la class  
if(!usuario){ //nota para mí 2: JS no puede leer la etiqueta(user) si la caja(usuario) no existe
  alert("Ese usuario no existe")
}else{
  //Contraseña
let passIngresada = prompt("Ingresar su contraseña");
if (passIngresada === usuario.password){
  usuarioLogueado = usuario//nota para mí 3: esto guarda la información del usuario que se logueó, osea de la caja que elejiste, no la fábrica
  console.log("Iniciaste sesión")
  iniciarCarrito();
    }else{
        alert ("Contraseña incorrecta");
    }
}
//nota para mí 4: el array es el armario, la class el estante, no te confundas porfa
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
        return this.precio * 0.75 
    } else{ 
    return this.precio
  }
 }
}
// Instancias (productos)
    const producto1 = new Producto("Libro Mágico", "1", 7, false)
    const producto2 = new Producto("Poción", "2", 10, false)
    const producto3 = new Producto("Polvo de hadas", "3", 8, true)
    const producto4 = new Producto("Pluma de Fénix", "4", 16, false)
    const producto5 = new Producto("Escama de dragón", "5", 29, false)
    const producto6 = new Producto("Huevo dorado", "6", 50, false)
    const producto7 = new Producto("Cristal encantado", "7", 8, true)
    const producto8 = new Producto("Musgo misterioso", "8", 5, false)
let productosDisponibles = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]
//Compra
while (!finalizarCarrito){
  let listaRecomendacion = ""
        let nombreProducto = prompt("Ingrese el ID del producto que desea comprar");
        let productoEncontrado = false;
      //Buscar el producto
        for (let producto of productosDisponibles){
          if (nombreProducto === producto.id){
        productoEncontrado = true;
          }
        }
  //Para ver que productos podés comprar con el dinero disponible
      if (nombreProducto === "Recomendame"){
        const recomendacion = productosDisponibles.filter(producto => producto.precio <= usuarioLogueado.dinero)
        for (let producto of recomendacion){
                  listaRecomendacion += "\n -" + producto.nombre
                }
              alert("Los siguientes productos se encuentran dentro de tu presupuesto" +listaRecomendacion)
              continue
                }
   //Para ver el catálogo de productos
      if (nombreProducto === "Catálogo"){
        const catalogo = productosDisponibles.map(producto => {return "ID: " + producto.id + " - " + producto.nombre + " - $" + producto.precio})
          alert(catalogo.join("\n"))
          continue
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
                      console.log("Lista:", producto.nombre, "Precio:", producto.precio)
                      total += producto.calcularPromocion ()
                  }
              }
            }
    }
  //Confirmación de la compra
    if(compra.length > 0 ){ // (Si lista no está vacía)
       let listaCompra = ""
          for (let producto of compra){
            listaCompra += "\n -" + producto.nombre
          }
      let respuesta = confirm("Desea concretar la compra de " +listaCompra + "\n" + "El total es $" +total); //confirm solo te deja responder como true o false)
        if(respuesta){
          if(total === 0){ //si no se seleccionan productos
            alert("Usted no ha comprado nada")
             iniciarCarrito()
          }else if(total <= usuarioLogueado.dinero){  //si alcanza el dinero
            alert("Usted compró " +listaCompra);
          }else if(total > usuarioLogueado.dinero){ //si no alcanza el dinero
            alert("No tiene dinero suficiente.")
          }
        }
    }
} 
