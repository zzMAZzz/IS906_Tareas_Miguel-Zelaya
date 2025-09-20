// Ejercicio 2: Interfaces y Objetos

interface Usuario {
    nombre: string;
    edad: number;
    mail?: string;
};

const usuario1: Usuario = {
    nombre: "Miguel",
    edad: 25,
    mail: "miguelzelaya99@gmail.com"
};

const usuario2: Usuario = {
    nombre: "Maria",
    edad: 25
};

function imprimirUsuario(usuario: Usuario): void {
    console.log("------------------------------------");
    console.log("Nombre: ", usuario.nombre);
    console.log("Edad: ", usuario.edad);
    if (usuario.mail) {
        console.log("Mail: ", usuario.mail);
    }
    console.log("------------------------------------");
}
console.log("------------------------------------");
console.log("Ejercicio 2: Interfaces y Objetos");
console.log("------------------------------------");
imprimirUsuario(usuario1);
imprimirUsuario(usuario2);
console.log("------------------------------------");