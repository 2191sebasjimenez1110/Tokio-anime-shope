import { agregarProducto } from "./carrito.js";
const productsContainer = document.getElementById("products-container");
let btnAgregar = document.querySelectorAll("#add-car");


function Productos(){
    const Productos = [
        {
            codigo: 1,
            img:"images/Camiseta1.webp",
            nombre: "",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        {
            codigo: 2,
            img:"images/Camiseta2.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto naciona kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
            precio: 25.000,
            categoria: "camisa"
        },
        {
            codigo: 4,
            img:"images/Camiseta4.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        {
            codigo: 3,
            img:"images/Camiseta5.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        {
            codigo: 5,
            img:"images/Camiseta6.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        {
            codigo: 6,
            img:"images/Camiseta7.webp",
            nombre: "camiseta",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        {
            codigo: 7,
            img:"images/Camiseta8.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        {
            codigo: 8,
            img:"images/sueter1.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        {
            codigo: 11,
            img:"images/sueter2.webp",
            nombre: "",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        {
            codigo: 10,
            img:"images/sueter3.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        {
            codigo: 11,
            img:"images/sueter4.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        {   codigo: 12,
            img:"images/sueter5.jpg",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        {   
            codigo: 13,
            img:"images/sueter6.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        {
            codigo: 14,
            img:"images/sueter7.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "producto de excellente calidad en el cual se demarca lo",
            precio: 25.000,
            categoria: "busos"
        },
        {
            codigo: 15,
            img:"images/sueter8.jpg",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        }
    ]


    Productos.forEach(producto => {
        const clave = producto.codigo; 
        const valor = JSON.stringify(producto);
        localStorage.setItem(clave, valor); 
    });
}

function mostrarTodosLosProductos() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = JSON.parse(localStorage.getItem(clave));
        generarTarjetas(valor);
    }
}


function generarTarjetas(valor) {
    
    const productCardHTML = `
        <div class="product-card" id="${valor.codigo}">
            <img class="img-card" src="${valor.img}" />
        <div class="content-card">
            <h3 class="title-card">${valor.nombre}</h3>
            <p class="description-card">${valor.descripcion}</p>
        <div class="products-describe">
            <p class="stock-products">disponibles ${valor.cantidad}</p>
            <p class="products-category">${valor.categoria}</p>
        </div>
            <div id="container-button">
                <p class="prace-card">${valor.precio} COP</p>
                <button id="add-car" data-id="${valor.codigo}"><i class="bx bx-cart-add"></i></button>
            </div>
        </div>
    </div>
`;

productsContainer.innerHTML += productCardHTML;
AcutalizarBtnAgregar();
}

function agregarNuevoProducto(form) {
    const imgInput = document.getElementById('imgProducto');
    const imgProducto = imgInput.files[0];

    const nombreProd = document.getElementById('nombreProd').value;
    const catProd = document.getElementById('catProd').value;
    const cantProd = document.getElementById('cantProd').value;
    const precioProd = document.getElementById('precioProd').value;
    const descriptionProd = document.getElementById('descriptionProd').value;

    const reader = new FileReader();

    reader.onload = function (e) {
        const imgBlob = e.target.result;

        const nuevoProducto = {
            codigo: localStorage.length + 1,
            img: imgBlob,
            nombre: nombreProd,
            cantidad: parseInt(cantProd),
            precio: parseFloat(precioProd),
            descripcion: descriptionProd,
            categoria: catProd
        };

        localStorage.setItem(nuevoProducto.cod, JSON.stringify(nuevoProducto));
        form.reset();

        alert('Producto agregado correctamente');
    };
    reader.readAsDataURL(imgProducto);
}

function filtrarCategoria(cat) {
productsContainer.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = JSON.parse(localStorage.getItem(clave));
        if(cat === valor.categoria){
            generarTarjetas(valor);
        }
    }
}

function AcutalizarBtnAgregar(){
    btnAgregar = document.querySelectorAll('#add-car');

    btnAgregar.forEach(boton =>{
        boton.addEventListener('click',()=>{
            const idTrajeta = boton.getAttribute('data-id');
            agregarProducto(idTrajeta);
        })
    })
}



export {  mostrarTodosLosProductos, Productos,generarTarjetas,filtrarCategoria,
    agregarNuevoProducto };












