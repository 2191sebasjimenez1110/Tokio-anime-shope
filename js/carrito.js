import { mostrarTodosLosProductos} from "./productos.js";
const openCar = document.getElementById("shopping-cart");
const closeCar = document.getElementById("close-car");
const carrito = document.getElementById("carrito-container");
const limpiarCar = document.getElementById("limpiar-car");
const continuarCompra = document.getElementById('continuar-compra');
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
    // Mostrar todos los productos en el carrito antes de finalizar la compra
    mostrarTodosLosProductos();

    // Restaurar la apariencia y funcionalidad del carrito
    carrito.classList.remove("nueva");
    carrito.setAttribute("id", "carrito-container");

    // Ocultar el botón de finalizarCompra y mostrar el de continuarCompra
    finalizarCompra.style.display = 'none';
    continuarCompra.style.display = 'block';
    carrito.style.display = 'none';
});

continuarCompra.addEventListener("click", () => {
    // Limpiar el contenedor de productos
    productsContainer.innerHTML = '';

    // Preparar el carrito para continuar la compra
    carrito.classList.add("nueva");
    carrito.removeAttribute("id");

    // Ocultar el botón de continuarCompra y mostrar el de finalizarCompra
    finalizarCompra.style.display = 'block';
    continuarCompra.style.display = 'none';
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
        <td class="cantidad">${producto.cantidad}<button onclick="aumentarCantidad(this)">+</button><button onclick="disminuirCantidad(this)">-</button></td>
        <td>${producto.cantidad * producto.precio}</td>
    `;

    tbody.appendChild(fila);
}

function limpiarCarrito() {
    let tbody = document.getElementById('Productos-carrito');
    // Eliminar todas las filas en el tbody
    tbody.innerHTML = '';
}

/* function aumentarCantidad(btn) {
    var cantidadElement = btn.parentElement;
    var cantidad = parseInt(cantidadElement.textContent, 10);
    cantidad += 1;
    cantidadElement.textContent = cantidad;
    actualizarTotal(cantidadElement.parentElement);
}


function disminuirCantidad(btn) {
    var cantidadElement = btn.parentElement;
    var cantidad = parseInt(cantidadElement.textContent, 10);
    if (cantidad > 0) {
        cantidad -= 1;
        cantidadElement.textContent = cantidad;
        actualizarTotal(cantidadElement.parentElement);
    }
}

function actualizarTotal(fila) {
    var cantidad = parseInt(fila.querySelector('.cantidad').textContent, 10);
    var precio = parseInt(fila.querySelector('td:nth-child(4)').textContent, 10);
    fila.querySelector('td:nth-child(6)').textContent = cantidad * precio;
} */






