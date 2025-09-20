// Ejercicio 1: Interfaces, Enums y Tipos de Unión

enum EstadoProducto {
    Disponible = "Disponible",
    Agotado = "Agotado",
    Descontinuado = "Descontinuado"
}

type IDProducto = number | string;

interface Producto {
    id: IDProducto;
    nombre: string;
    precio: number;
    estado: EstadoProducto;
    descripcion?: string;
}

function mostrarDetallesProductos(producto: Producto): void {
    console.log( "------- Detalles del Producto ------- ");
    console.log("ID: ", producto.id);
    console.log("Nombre: ", producto.nombre);
    console.log("Precio: ", producto.precio);
    console.log("Estado: ", producto.estado);
    if (producto.descripcion) {
        console.log("Descripción: ", producto.descripcion);
    }
    console.log( "------------------------------------- ");
}

const producto1: Producto = {
    id: 101,
    nombre: "Laptop",
    precio: 1500,
    estado: EstadoProducto.Disponible,
    descripcion: "Laptop de alta gama con 16GB RAM y 512GB SSD"
};
const producto2: Producto = {
    id: "A202",
    nombre: "Smartphone",
    precio: 800,
    estado: EstadoProducto.Agotado
};

console.log("----------------------------------------------------");
console.log("Ejercicio 1: Interfaces, Enums y Tipos de Unión");
console.log("----------------------------------------------------");
mostrarDetallesProductos(producto1);
mostrarDetallesProductos(producto2);
console.log("----------------------------------------------------");