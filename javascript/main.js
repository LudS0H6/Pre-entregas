//Etapa 1: Inicio de sesión
const botonIngresar = document.querySelector("#botonIngresar")
const usuarioHtml = document.querySelector("#usuarioHtml")
const passwordHtml = document.querySelector("#passwordHtml")
const login = document.querySelector("#login")
const mensajeLogin = document.querySelector("#mensajeLogin")
//iniciar sesión de usuario
let usuarioLogueado; 
class Usuario {
 constructor(user, password, dinero, pfp) {
   this.user = user
   this.password = password
   this.dinero = dinero
   this.pfp = pfp
   //this.carritoUsuario = carritoUsuario 
 }
}
//Instancias (usuarios)
    const usuario1 = new Usuario("Maguito", "1234", 30, "images/maguito.png")
    const usuario2 = new Usuario("Elfo", "5678", 45, "images/elfo.png")
    const usuario3 = new Usuario("Duende", "9000", 15, "images/duende.png")
      let usuariosExistentes = [usuario1, usuario2, usuario3];
//login
  botonIngresar.addEventListener('click', () => {
  let usuarioIngresado = usuarioHtml.value;
  const usuario = usuariosExistentes.find(persona => persona.user === usuarioIngresado); 
    if(!usuario){ 
      mensajeLogin.innerHTML = "Ese usuario no existe"
    }else{
    //Contraseña
  let passIngresada = passwordHtml.value;
    if (passIngresada === usuario.password){
      usuarioLogueado = usuario
      login.remove()
      mostrarTienda()
    }else{
      mensajeLogin.innerHTML = "Contraseña incorrecta";
    }
  }
});
//Sesión iniciada
//Productos
class Producto {
 constructor(nombre, id, precio, promocion, imagen) {
   this.nombre = nombre
   this.id = id
   this.precio = precio
   this.promocion = promocion
   this.imagen = imagen
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
    const producto1 = new Producto("Libro Mágico", "1", 7, false, "images/libro.png")
    const producto2 = new Producto("Poción", "2", 10, false, "images/pocion.png")
    const producto3 = new Producto("Polvo de hadas", "3", 8, true, "images/polvo.png")
    const producto4 = new Producto("Pluma de Fénix", "4", 16, false, "images/pluma.png")
    const producto5 = new Producto("Escama de dragón", "5", 29, false, "images/escama.png")
    const producto6 = new Producto("Huevo dorado", "6", 50, false, "images/huevo.png")
    const producto7 = new Producto("Cristal encantado", "7", 8, true, "images/cristal.png")
    const producto8 = new Producto("Musgo misterioso", "8", 5, false, "images/musgo.png")
let productosDisponibles = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]

const productosGuardados =
    JSON.parse(localStorage.getItem("compra")) || [];

let compra = productosGuardados.map(id =>
    productosDisponibles.find(producto => producto.id === id)
);
//Etapa 2: Mostrar la tienda
function mostrarTienda(){
//mostrar los datos del usuario
  const perfil =document.querySelector("#perfil")
  perfil.innerHTML =`
  <img src="${usuarioLogueado.pfp}" alt="" class="dibujos-usuarios">
  <h2>${usuarioLogueado.user}</h2>
  <p>Dinero: $${usuarioLogueado.dinero}</p>
  `
//mostrar los productos
  const tiendaHtml = document.querySelector("#tienda")
  tiendaHtml.innerHTML = "";

  productosDisponibles.forEach(producto => {
    const { nombre, precio, imagen } = producto;
    tiendaHtml.innerHTML += `
        <div>
            <img src="${imagen}" alt="" class="productos" data-nombre="${nombre}">
            <h3>${nombre}</h3>
            <p>$${precio}</p>
        </div>
    `;
});
  mostrarCarrito()
  crearBotonComprar();
  activarEventos ()
};
//Activar el click de los productos
function activarEventos(){
  const imagenes = document.querySelectorAll(".productos");
  imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
    const producto = productosDisponibles.find(
    p => p.nombre === imagen.dataset.nombre
  );
  compra.push(producto);
  //WebStorage
    localStorage.setItem("compra",
      JSON.stringify(compra.map(producto => producto.id)));
  mostrarCarrito();
    });
  });
}
//Mostrar el carrito que vas eligiendo
function mostrarCarrito(){
//la pagina te muestra esa lista
  const carritoHtml = document.querySelector ("#carrito")
  carritoHtml.innerHTML = "";
  compra.forEach(producto => {
    carritoHtml.innerHTML += `
      <img src="${producto.imagen}" alt="" class="productosSeleccionados" data-nombre="${producto.nombre}">
    `
  eliminarProducto()
  })
}
//Eliminar productos del carrito
function eliminarProducto (){
  const carritoHtml = document.querySelector ("#carrito")
  const imagenesCarrito = document.querySelectorAll(".productosSeleccionados");
  imagenesCarrito.forEach(imagen => {
    imagen.addEventListener("click", () => {      
      const indice = compra.findIndex(producto => producto.nombre === imagen.dataset.nombre);
      compra.splice(indice, 1);
      //eliminar del Web Storage
        localStorage.setItem("compra",
          JSON.stringify(compra));
      mostrarCarrito()
    });
  })
}
//botón de la compra
function crearBotonComprar ( ){
  const tiendaHtml = document.querySelector("#tienda")
  tiendaHtml.innerHTML += `<button id="botonComprar" type="button">Comprar</button>`
  const botonComprar = document.querySelector("#botonComprar")
  botonComprar.addEventListener("click", () => {
    confirmarCompra()
  });
}
//Cuando finalizas el carrito
function confirmarCompra(){
  let total = 0;
  compra.forEach(producto => {
    total += producto.calcularPromocion()
  });
  const confirmacion = document.querySelector("#confirmacion");
    confirmacion.innerHTML = `
      <p>¿Desea concretar la compra?</p>
    `;
    compra.forEach(producto => {
      confirmacion.innerHTML += `
        <img src="${producto.imagen}" class="productosConfirmacion">
      `
    });
  confirmacion.innerHTML += `<p>Total: $${total}</p>`
  confirmacion.innerHTML += `<button id="botonAceptar" type="button">Aceptar</button>`;
  const botonAceptar = document.querySelector("#botonAceptar");
  botonAceptar.addEventListener("click", () => {
    confirmacion.innerHTML = total <= usuarioLogueado.dinero //condición
      ? `<p>La compra se realizó con éxito</p>`//if
      : `<p>"No tiene dinero suficiente."</p>` //else
  });
};
