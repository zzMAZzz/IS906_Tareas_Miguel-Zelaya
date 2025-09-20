// Ejercicio 5: Enums y Estructuras de Control

enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

function esFinDeSemana(dia: DiaSemana): boolean {
    switch (dia) {
        case DiaSemana.Sabado:
        case DiaSemana.Domingo:
            return true;
        default:
            return false;
    }
}
console.log("----------------------------------------------------");
console.log("Ejercicio 5: Enums y Funciones");
console.log("----------------------------------------------------");
console.log("¿Es Lunes fin de semana? ", esFinDeSemana(DiaSemana.Lunes));
console.log("¿Es Sabado fin de semana? ", esFinDeSemana(DiaSemana.Sabado));
console.log("----------------------------------------------------");