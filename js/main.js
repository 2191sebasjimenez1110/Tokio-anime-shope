import { Productos, mostrarTodosLosProductos, filtrarCategoria, agregarNuevoProducto } from './productos.js'

const form = document.getElementById("productoForm");
const btnRopa = document.getElementById("ropa");
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
    filtrarCategoria("busos");
});

btnIndex.addEventListener("click", () => {
    productsContainer.innerHTML = "";
    mostrarTodosLosProductos();
});


const btnMenu = document.querySelector('.btn-menu'),
sidebar = document.querySelector('.sidebar');

btnMenu.addEventListener('click',() => {
    sidebar.classList.toggle('expand');

    changesBtn()
})

function changesBtn() {
    if (sidebar.classList.contains('expand')) {
        btnMenu.classList.replace('bx-menu','bx-menu-alt-right')
    }else{
        btnMenu.classList.replace('bx-menu-alt-right','bx-menu')
    }
}


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











