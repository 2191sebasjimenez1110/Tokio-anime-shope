import { mostrarTodosLosProductos} from "./productos.js";
const openCar = document.getElementById("shopping-cart");
const closeCar = document.getElementById("close-car");
const carrito = document.getElementById("carrito-container");
const limpiarCar = document.getElementById("limpiar-car");
const finalizarCompra = document.getElementById('finalizar-compra');
const productsContainer = document.getElementById("products-container");


openCar.addEventListener("click", () => {
    carrito.style.display = "block";
});

limpiarCar.addEventListener("click", () => {
    limpiarCarrito();
});

closeCar.addEventListener("click", () => {
    carrito.style.display = 'none';
});

finalizarCompra.addEventListener("click", () => {
    mostrarTodosLosProductos();

    carrito.classList.remove("tabla-cart");
    carrito.setAttribute("id", "carrito-container");

    finalizarCompra.style.display = 'none';
    continuarCompra.style.display = 'block';
    carrito.style.display = 'none';
});


export function agregarProducto(idTarjeta) {
    const producto = JSON.parse(localStorage.getItem(idTarjeta));
    agregarFilaAlCarrito(producto);
}

function agregarFilaAlCarrito(producto) {
    let tbody = document.getElementById('Productos-carrito');
    let fila = document.createElement('tr');
    fila.innerHTML = `
        <td><img src="${producto.img}" alt="" class="img-carrito"></td>
        <td>${producto.nombre}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.precio}</td>
        <td class="cantidad" id="cart-cant">1<button id="sumar-cart">+</button><button id="restar ">-</button></td>
        <td>${producto.cantidad * producto.precio}</td>
    `;

    tbody.appendChild(fila);
    incrementarContador();
}

function limpiarCarrito() {
    const contadorElemento = document.getElementById('count-cart');
    let tbody = document.getElementById('Productos-carrito');
    tbody.innerHTML = '';
    contadorElemento.innerText = 0;
} 


function incrementarContador() {
    const contadorElemento = document.getElementById('count-cart');
    let contadorActual = parseInt(contadorElemento.innerText);
    contadorActual++;
    contadorElemento.innerText = contadorActual;
}







