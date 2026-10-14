// Lista de productos de la tienda. Cada producto tiene cinco propiedades.
const productos = [
    { id: 1, nombre: "Cuaderno", categoria: "Librería", precio: 2500, stock: 8 },
    { id: 2, nombre: "Lapicera", categoria: "Librería", precio: 900, stock: 0 },
    { id: 3, nombre: "Mochila", categoria: "Accesorios", precio: 18000, stock: 3 },
    { id: 4, nombre: "Cartuchera", categoria: "Accesorios", precio: 6500, stock: 5 }
];

const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

function mostrarResultado(titulo, datos) {
    resultado.textContent = titulo + "\n" + JSON.stringify(datos, null, 2);
    console.log(titulo, datos);
}

function iniciarSimulador() {
    const opcion = prompt(
        "Elegí una opción:\n" +
        "1. Buscar un producto por ID\n" +
        "2. Ver productos disponibles\n" +
        "3. Ver productos con descuento"
    );

    if (opcion === null) {
        return;
    }

    if (opcion === "1") {
        const idIngresado = prompt("Escribí el ID del producto (del 1 al 4):");

        if (idIngresado === null) {
            return;
        }

        // find busca un producto por su ID.
        const productoBuscado = productos.find(function (producto) {
            return producto.id === Number(idIngresado);
        });

        if (productoBuscado) {
            mostrarResultado("Producto encontrado:", productoBuscado);
        } else {
            mostrarResultado("No se encontró un producto con ese ID.", "");
        }
    } else if (opcion === "2") {
        // filter devuelve los productos que tienen stock.
        const productosDisponibles = productos.filter(function (producto) {
            return producto.stock > 0;
        });

        mostrarResultado("Productos disponibles:", productosDisponibles);
    } else if (opcion === "3") {
        // map crea una lista nueva con un precio rebajado.
        const productosConDescuento = productos.map(function (producto) {
            return {
                nombre: producto.nombre,
                precioOriginal: producto.precio,
                precioConDescuento: producto.precio * 0.9
            };
        });

        mostrarResultado("Productos con 10% de descuento:", productosConDescuento);
    } else {
        mostrarResultado("Opción incorrecta. Elegí 1, 2 o 3.", "");
    }
}

boton.addEventListener("click", iniciarSimulador);
