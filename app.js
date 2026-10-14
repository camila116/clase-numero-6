const productos = [
    { id: 1, nombre: "Cuaderno", categoria: "Librería", precio: 2500, stock: 8 },
    { id: 2, nombre: "Lapicera", categoria: "Librería", precio: 900, stock: 0 },
    { id: 3, nombre: "Mochila", categoria: "Accesorios", precio: 18000, stock: 3 },
    { id: 4, nombre: "Cartuchera", categoria: "Accesorios", precio: 6500, stock: 5 }
];

const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

function iniciarSimulador() {
    const opcion = prompt("Elegí: 1) Buscar por ID  2) Ver disponibles  3) Ver descuentos");

    if (opcion === "1") {
        const id = Number(prompt("Escribí el ID del producto:"));
        const buscado = productos.find(producto => producto.id === id);
        mostrarResultado(buscado ? "Producto encontrado:" : "No se encontró el producto:", buscado);
    } else if (opcion === "2") {
        const disponibles = productos.filter(producto => producto.stock > 0);
        mostrarResultado("Productos disponibles:", disponibles);
    } else if (opcion === "3") {
        const conDescuento = productos.map(producto => ({
            nombre: producto.nombre,
            precio: producto.precio * 0.9
        }));
        mostrarResultado("Productos con descuento:", conDescuento);
    } else {
        resultado.textContent = "Opción incorrecta.";
    }
}

function mostrarResultado(titulo, datos) {
    resultado.textContent = titulo + "\n" + JSON.stringify(datos, null, 2);
    console.log(titulo, datos);
}

boton.addEventListener("click", iniciarSimulador);
