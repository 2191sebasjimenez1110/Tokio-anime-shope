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
            precio: 240000,
            categoria: "Ropa"
        },
        {
            codigo: 2,
            img:"https://i.etsystatic.com/39688992/r/il/5c77ec/5102632260/il_794xN.5102632260_rto2.jpg",
            nombre: "Sudadera estilo anime Negra",
            cantidad: 30,
            descripcion: "Sudaderas con capucha japonesas de gran tamaño de Harajuku",
            precio: 230000,
            categoria: "Ropa"
        },
        {
            codigo: 3,
            img:"https://i.etsystatic.com/40501248/r/il/efaf28/5545043454/il_794xN.5545043454_fdd5.jpg",
            nombre: "Sudadera de Nanami",
            cantidad: 40,
            descripcion: "sudader inspirada Nanami estética, chaqueta de anime japonesa sutil",
            precio: 350000,
            categoria: "Ropa"
        },
        {
            codigo: 4,
            img:"https://i.etsystatic.com/29540030/r/il/86704a/5528860983/il_794xN.5528860983_733w.jpg",
            nombre: "Sudadera de Monkey D. Luffy",
            cantidad: 40,
            descripcion: "sudader inspirada en monkey D. luffy estética",
            precio: 350000,
            categoria: "Ropa"
        },
        {
            codigo: 5,
            img:"https://mangalianza.com/storage/img/books/48/56/54/298/298.webp",
            nombre: "One Piece Tomo 1",
            cantidad: 10,
            descripcion: "Manga de one piece escrito por Eiichiro Oda edicion 144",
            precio: 54000,
            categoria: "Manga"
        },
        {
            codigo: 6,
            img:"https://mangalianza.com/storage/img/books/7/9/240/1688/1688.webp",
            nombre: "Dragon Ball Color Tomo 1",
            cantidad: 15,
            descripcion: "Manga de Dragon Ball escrito por Toriyama Akira edicion 34",
            precio: 106000,
            categoria: "Manga"
        },
        {
            codigo: 7,
            img:"https://mangalianza.com/storage/img/books/160/196/198/1188/1188.webp",
            nombre: "Akame ga Kill Tomo 2",
            cantidad: 40,
            descripcion: "Manga Akame ga kill escrito por Takahiro edicion 15",
            precio: 50000,
            categoria: "Manga"
        },
        {
            codigo: 8,
            img:"https://mangalianza.com/storage/img/books/5/5/6/147/147.webp",
            nombre: "My Hero Academia Tomo 25",
            cantidad: 10,
            descripcion: "Manga de My Hero Academi escrito por Hirokoshi Kohei",
            precio: 50000,
            categoria: "Manga"
        },
        {
            codigo: 9,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwa03bc141/images/funko/upload/74524_JJK_NanamiWithTieGW_POP_GLAM-WEB.png?sw=800&sh=800",
            nombre: "POP! KENTO NANAMI (GLOW)",
            cantidad: 20,
            descripcion: "Funko POP! jujustsu Kaisen de Nanami edicion limitada",
            precio: 70000,
            categoria: "Figuras"
        },
        {
            codigo: 10,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw2ca300ea/images/funko/upload/63132a_POP_Animation_SDS_Meliodas(DM)wCH_GLAM-WEB.png?sw=800&sh=800",
            nombre: "POP! MELIODAS",
            cantidad: 40,
            descripcion: "Funko POP! Siete pecados capitale de Dragon de la ira meliodas",
            precio: 60000,
            categoria: "Figuras"
        },
        {
            codigo: 11,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw6cdf224e/images/funko/upload/74712-POP-Animation-OP---Chopperemon(Wano)(FL)_GLAM-WEB.png?sw=800&sh=800",
            nombre: "POP! CHOPPEREMON",
            cantidad: 10,
            descripcion: "Funko POP! de one pice chopper en WANO OUTFIT edicion especial",
            precio: 80000,
            categoria: "Figuras"
        },
        {
            codigo: 12,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw3942aa84/images/funko/upload/68631_POPAnimation_MHA_ShotoTodoroki_GLAM-WEB.png?sw=800&sh=800",
            nombre: "POP! SHOTO TODOROKI",
            cantidad: 15,
            descripcion: "Funko POP! de My Hero Academy SHOTO TODOROKI edicion especial",
            precio: 90000,
            categoria: "Figuras"
        },
        {
            codigo: 13,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw86c3e534/images/funko/upload/60401_POPAnimation_Naruto_Kakashi_wPakkun_GLAM-1-WEB.png?sw=800&sh=800",
            nombre: "POP! & BUDDY KAKASHI",
            cantidad: 10,
            descripcion: "Funko POP! de naruto BUDDY KAKASHI HATAKE Combo",
            precio: 100000,
            categoria: "Figuras"
        },
        {
            codigo: 14,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwca62009e/images/funko/upload/71558_BlackClover_S2_YunoZephrGW_POP_GLAM-WEB.png?sw=800&sh=800",
            nombre: "POP! YUNO WITH",
            cantidad: 10,
            descripcion: "Funko POP! de Black Clover de Yuno SPIRIT OF ZEPHYR",
            precio: 95000,
            categoria: "Figuras"
        },
        {
            codigo: 15,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dweefe83a9/images/funko/upload/69372_AOT_S5_MikasaAckermannMT_POP_GLAM-WEB.png?sw=800&sh=800",
            nombre: "POP! MIKASA ACKERMAN",
            cantidad: 10,
            descripcion: "Funko POP! de Attack on titan MIKASA ACKERMAN",
            precio: 86000,
            categoria: "Figuras"
        },
        {
            codigo: 16,
            img:"https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw25356da0/images/funko/upload/73774_POPAnimation_JJK_SukunaTearingShirt_GLAM-WEB.png?sw=800&sh=800",
            nombre: "POP! RYOMEN SUKUNA",
            cantidad: 5,
            descripcion: "Funko POP! de Jujutsu Kaisen de RYOMEN SUKUNA",
            precio: 90000,
            categoria: "Figuras"
        },
        {
            codigo: 17,
            img:"https://mangalianza.com/storage/img/books/3/1/1/20/20.webp",
            nombre: "Chainsaw Man Tomo 11",
            cantidad: 10,
            descripcion: "Manga de Chainsaw Man escrito por Tatsuki Fujimoto edicion 12",
            precio: 53000,
            categoria: "Manga"
        },
        {
            codigo: 18,
            img:"https://mangalianza.com/storage/img/books/3/1/1/15/15.webp",
            nombre: "Chainsaw Man Tomo 6",
            cantidad: 10,
            descripcion: "Manga de Chainsaw Man escrito por Tatsuki Fujimoto edicion 12",
            precio: 53000,
            categoria: "Manga"
        },
        {
            codigo: 19,
            img:"https://mangalianza.com/storage/img/books/5/5/6/1419/1419.webp",
            nombre: "My Hero Academia Tomo 36",
            cantidad: 0,
            descripcion: "Manga de My Hero Academi escrito por Hirokoshi Kohei",
            precio: 50000,
            categoria: "Manga"
        },
        {
            codigo: 20,
            img:"https://mangalianza.com/storage/img/books/160/196/198/1201/1201.webp",
            nombre: "Akame ga Kill Tomo 15",
            cantidad: 40,
            descripcion: "Manga Akame ga kill escrito por Takahiro edicion 15",
            precio: 50000,
            categoria: "Manga"
        },
        {
            codigo: 21,
            img:"https://ih1.redbubble.net/image.2667080409.9672/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
            nombre: "Camiseta Ronoroa Zoro",
            cantidad: 10,
            descripcion: "Camiseta estilo anime de one pice inspirada en Zoro",
            precio: 60000,
            categoria: "Ropa"
        },
        {
            codigo: 22,
            img:"https://ih1.redbubble.net/image.1999792973.0761/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg",
            nombre: "Camiseta Evangelio",
            cantidad: 25,
            descripcion: "camiseta inspirada en Neon Genisis Evangelion",
            precio: 70000,
            categoria: "Ropa"
        },
        {
            codigo: 23,
            img:"https://ih1.redbubble.net/image.5086155603.2294/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
            nombre: "Camiseta Cyberpunk",
            cantidad: 30,
            descripcion: "Camiseta samurái inspirada en cyberpunk",
            precio: 60000,
            categoria: "Ropa"
        },
        {
            codigo: 24,
            img:"https://ih1.redbubble.net/image.1105549412.4858/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
            nombre: "Camiseta Evangelio clasica",
            cantidad: 25,
            descripcion: "camiseta inspirada en Neon Genisis Evangelion",
            precio: 70000,
            categoria: "Ropa"
        },
        {
            codigo: 25,
            img:"https://ih1.redbubble.net/image.5085332165.7682/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
            nombre: "Mi vecino Totoro",
            cantidad: 40,
            descripcion: "Camiseta de mi vecino totoro estetica, estilo anime",
            precio: 60000,
            categoria: "Ropa"
        },
        {
            codigo: 26,
            img:"https://mangalianza.com/storage/img/books/47/55/53/287/287.webp",
            nombre: "Black Clover Tomo 11",
            cantidad: 0,
            descripcion: "Manga de Black Clover escrito por Yuuki Tabata edicion 12",
            precio: 53000,
            categoria: "Manga"
        },
        {
            codigo: 27,
            img:"https://mangalianza.com/storage/img/books/47/55/53/282/282.webp",
            nombre: "Black Clover Tomo 6",
            cantidad: 5,
            descripcion: "Manga de Black Clover escrito por Yuuki Tabata edicion 12",
            precio: 54000,
            categoria: "Manga"
        },
        {
            codigo: 28,
            img:"https://mangalianza.com/storage/img/books/47/55/53/1370/1370.webp",
            nombre: "Black Clover Tomo 23",
            cantidad: 6,
            descripcion: "Manga de Black Clover escrito por Yuuki Tabata edicion 12",
            precio: 59000,
            categoria: "Manga"
        },
        {
            codigo: 29,
            img:"https://www.megaotaku.com/38767-medium_default/jujutsu-kaisen-figuarts-zero-yuji-itadori.jpg",
            nombre: "Jujutsu Kaisen Figuarts",
            cantidad: 10,
            descripcion: "Yuji Itadori, en pose de acción ejecutando su técnica Destello Negro",
            precio: 269000,
            categoria: "Figuras"
        },
        {
            codigo: 30,
            img:"https://www.megaotaku.com/67105-medium_default/one-piece-dxf-the-grandline-lady-wanokuni-vol-8-nami.jpg",
            nombre: "One Piece Figura",
            cantidad: 10,
            descripcion: "Figura de Nami, representada con su atuendo de la saga del País de Wano",
            precio: 235000,
            categoria: "Figuras"
        }
    ]


    Productos.forEach(producto => {
        const clave = producto.codigo; 
        const valor = JSON.stringify(producto);
        localStorage.setItem(clave, valor); 
    });
}

function mostrarTodosLosProductos() {
    const claves = Object.keys(localStorage);

    for (let i = 0; i < claves.length; i++) {
        const clave = claves[i];
        const valor = JSON.parse(localStorage.getItem(clave));
        generarTarjetas(valor);
    }
}


function generarTarjetas(valor) {
    const formattedPrecio = valor.precio.toLocaleString(); 

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
                    <p class="price-card">$${formattedPrecio} COP</p>
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

        localStorage.setItem(nuevoProducto.codigo, JSON.stringify(nuevoProducto));
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












