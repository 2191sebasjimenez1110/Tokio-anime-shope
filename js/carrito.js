import { mostrarTodosLosProductos } from "./productos.js";

const openCar = document.getElementById("shopping-cart");
const closeCar = document.getElementById("close-car");
const carrito = document.getElementById("carrito-container");
const limpiarCar = document.getElementById("limpiar-car");
const finalizarCompra = document.getElementById('finalizar-compra');

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
    simularCompra();
});

export function agregarProducto(idTarjeta) {
    const producto = JSON.parse(localStorage.getItem(idTarjeta));
    if (producto.cantidad > 0) {
        agregarFilaAlCarrito(producto);
    }
}

function agregarFilaAlCarrito(producto) {
    let tbody = document.getElementById('Productos-carrito');
    let fila = document.createElement('tr');
    let cantidad = 1; // Cantidad inicial
    const formattedPrecio = producto.precio.toLocaleString(); 

    fila.innerHTML = `
        <td><img src="${producto.img}" alt="" class="img-carrito"></td>
        <td>${producto.nombre}</td>
        <td>${formattedPrecio}</td>
        <td class="cantidad" id="cart-cant">${cantidad}</td>
        <td>
            <button class="sumar-cart">+</button>
            <button class="restar">-</button>
        </td>
        <td class="total-fila">${producto.precio * cantidad}</td>
    `;

    tbody.appendChild(fila);
    incrementarContador();

    // Escuchador de eventos para el botón "sumar-cart"
    fila.querySelector('.sumar-cart').addEventListener('click', () => {
        cantidad++;
        fila.querySelector('.cantidad').textContent = cantidad;
        actualizarTotal(fila, producto.precio, cantidad);
    });

    // Escuchador de eventos para el botón "restar"
    fila.querySelector('.restar').addEventListener('click', () => {
        if (cantidad > 1) {
            cantidad--;
            fila.querySelector('.cantidad').textContent = cantidad;
            actualizarTotal(fila, producto.precio, cantidad);
        }
    });
}

function actualizarTotal(fila, precio, cantidad) {
    const totalColumn = fila.querySelector('.total-fila');
    const total = precio * cantidad;
    totalColumn.textContent = total;
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

function simularCompra() {
    // Obtén las filas del carrito
    let filasCarrito = document.querySelectorAll('#carrito-container tbody tr');

    // Inicializa variables para la sumatoria total y el resumen de la compra
    let totalCompra = 0;
    let resumenCompra = '';

    // Actualiza el localStorage y realiza cualquier otra lógica que desees
    filasCarrito.forEach((fila) => {
        const nombreProducto = fila.querySelector('td:nth-child(2)').textContent;
        const cantidad = parseInt(fila.querySelector('.cantidad').textContent);
        const precioUnitario = parseFloat(fila.querySelector('td:nth-child(3)').textContent);
        const totalProducto = precioUnitario * cantidad;

        // Resta la cantidad comprada al producto en el localStorage
        restarProductoLocalStorage(nombreProducto, cantidad);

        // Actualiza la sumatoria total
        totalCompra += totalProducto;

        // Agrega información al resumen de la compra
        resumenCompra += `${cantidad} x ${nombreProducto} = $${totalProducto.toFixed(2)}\n`;
    });

    // Muestra el resumen de la compra y el mensaje de agradecimiento
    alert(`Resumen de la compra:\n${resumenCompra}\nTotal: $${totalCompra.toFixed(2)}\n\n¡Gracias por su compra!`);

    // Limpia el carrito después de la compra
    limpiarCarrito();
    carrito.style.display = 'none';
}

function restarProductoLocalStorage(nombreProducto, cantidad) {
    // Obtiene el producto del localStorage por su nombre
    const producto = JSON.parse(localStorage.getItem(nombreProducto));

    // Resta la cantidad comprada al producto en el localStorage
    if (producto) {
        producto.cantidad -= cantidad;
        localStorage.setItem(nombreProducto, JSON.stringify(producto));
    }
}

document.addEventListener('click', (event) => {
    const isClickInsideCarrito = carrito.contains(event.target) || openCar.contains(event.target);

    if (!isClickInsideCarrito) {
        carrito.style.display = 'none';
    }
});