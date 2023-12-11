import { Productos, mostrarTodosLosProductos, filtrarCategoria, agregarNuevoProducto, generarTarjetas } from './productos.js'

const form = document.getElementById("productoForm");
const btnRopa = document.getElementById("ropa");
const btnFigura = document.getElementById("figura");
const btnManga = document.getElementById("manga");
const btnIndex = document.getElementById("index");
const productsContainer = document.getElementById("products-container");

document.addEventListener("DOMContentLoaded", () => {
    Productos();
    mostrarTodosLosProductos();
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", filtrarPorTitulo);
});

function filtrarPorTitulo() {
    const term = searchInput.value.toLowerCase();

    const productos = document.getElementsByClassName("product-card");
    for (let i = 0; i < productos.length; i++) {
        const titulo = productos[i].querySelector(".title-card").textContent.toLowerCase();
        if (titulo.includes(term)) {
            productos[i].style.display = "block";  
        } else {
            productos[i].style.display = "none";   
        }
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    agregarNuevoProducto(form);
});

btnRopa.addEventListener("click", () => {
    filtrarCategoria("Ropa");
});

btnFigura.addEventListener("click", () => {
    filtrarCategoria("Figuras");
});

btnManga.addEventListener("click", () => {
    filtrarCategoria("Manga");
});

btnIndex.addEventListener("click", () => {
    productsContainer.innerHTML = "";
    mostrarTodosLosProductos();
});


const file = document.getElementById('imgProducto');
const img = document.getElementById('img-form'); 
const openModalBtn = document.getElementById('btn-crear');
const closeModalBtn = document.getElementById('btn-close');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = 'block';
}

export function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

file.addEventListener('change', e => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    } else {
        img.src = defaultFile;
    }
});

const btnFiltroMayorMenor = document.getElementById("filtroMayorMenor");
const btnFiltroMenorMayor = document.getElementById("filtroMenorMayor");

btnFiltroMayorMenor.addEventListener("click", () => {
    filtrarPorPrecio("asc");
});

btnFiltroMenorMayor.addEventListener("click", () => {
    filtrarPorPrecio("desc");
});

function filtrarPorPrecio(order) {
    const productosArray = [];
    console.log(productosArray);

    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = JSON.parse(localStorage.getItem(clave));
        productosArray.push(valor);
    }

    productosArray.sort((a, b) => {
        return order === "desc" ? a.precio - b.precio : b.precio - a.precio;
    });

    mostrarProductosEnOrden(productosArray);
}


function mostrarProductosEnOrden(productosArray) {
    productsContainer.innerHTML = "";

    productosArray.forEach(valor => {
        generarTarjetas(valor);
    });

    AcutalizarBtnAgregar();
}













