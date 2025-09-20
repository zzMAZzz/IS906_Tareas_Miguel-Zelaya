// Ejercicio 3: Arrays

const arrayNombre: string[] = [];

function repetirNombre(nombre: string, veces: number): void {
    for (let i = 0; i < veces; i++){
        arrayNombre.push(nombre);
    }
}

repetirNombre("Miguel ", 4);

console.log("----------------------------------------------------");
console.log("Ejercicio 3: Arrays");
console.log("----------------------------------------------------");
console.log(arrayNombre);
console.log("----------------------------------------------------");