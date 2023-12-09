import { agregarProducto } from "./carrito.js"; 
const productsContainer = document.getElementById("products-container");
let btnAgregar = document.querySelectorAll("#add-car");


function Productos(){
    const Productos = [
        {
            codigo: 1,
            img:"https://i.etsystatic.com/39688992/r/il/09b6f1/5102642746/il_794xN.5102642746_5n5m.jpg",
            nombre: "Sudadera estilo anime Blanca",
            cantidad: 20,
            descripcion: "Sudaderas con capucha japonesas de gran tamaño de Harajuku",
            precio: 230.000,
            categoria: "Ropa"
        },
        {
            codigo: 2,
            img:"https://i.etsystatic.com/39688992/r/il/5c77ec/5102632260/il_794xN.5102632260_rto2.jpg",
            nombre: "Sudadera estilo anime Negra",
            cantidad: 30,
            descripcion: "Sudaderas con capucha japonesas de gran tamaño de Harajuku",
            precio: 230.000,
            categoria: "Ropa"
        },
        {
            codigo: 3,
            img:"https://i.etsystatic.com/40501248/r/il/efaf28/5545043454/il_794xN.5545043454_fdd5.jpg",
            nombre: "Sudadera de Nanami",
            cantidad: 40,
            descripcion: "sudader inspirada Nanami estética, chaqueta de anime japonesa sutil",
            precio: 350.000,
            categoria: "Ropa"
        },
        {
            codigo: 4,
            img:"https://i.etsystatic.com/29540030/r/il/86704a/5528860983/il_794xN.5528860983_733w.jpg",
            nombre: "Sudadera de Monkey D. Luffy",
            cantidad: 40,
            descripcion: "sudader inspirada Nanami estética, chaqueta de anime japonesa sutil",
            precio: 350.000,
            categoria: "Ropa"
        },
        {
            codigo: 5,
            img:"https://i.etsystatic.com/40501248/r/il/efaf28/5545043454/il_794xN.5545043454_fdd5.jpg",
            nombre: "Sudadera de Nanami",
            cantidad: 40,
            descripcion: "sudader inspirada Nanami estética, chaqueta de anime japonesa sutil",
            precio: 50.000,
            categoria: "Manga"
        },
        {
            codigo: 6,
            img:"https://i.etsystatic.com/40501248/r/il/efaf28/5545043454/il_794xN.5545043454_fdd5.jpg",
            nombre: "Sudadera de Nanami",
            cantidad: 40,
            descripcion: "sudader inspirada Nanami estética, chaqueta de anime japonesa sutil",
            precio: 50.000,
            categoria: "Manga"
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
        localStorage.clear()
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
            <p class="products-category">Categoria ${valor.categoria}</p>
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












