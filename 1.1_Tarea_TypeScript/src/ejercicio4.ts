// Ejercicio 4: Clases y Metodos

class CuentaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso de $${monto}.`);
        } else {
            console.log("El monto a depositar debe ser positivo.");
        }
    }

    retirar(monto: number): void {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro exitoso de $${monto}.`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }
    
    mostrarSaldo(): void {
        console.log(`El saldo actual de la cuenta de ${this.titular} es $${this.saldo}.`);
    }
}

console.log("----------------------------------------------------");
console.log("Ejercicio 4: Clases y Metodos");
console.log("----------------------------------------------------");

const cuenta = new CuentaBancaria("Miguel");
cuenta.depositar(5000);
cuenta.retirar(1000);
cuenta.retirar(1000);
cuenta.retirar(5000);
cuenta.depositar(-200);
cuenta.depositar(1500);
cuenta.mostrarSaldo();

console.log("----------------------------------------------------");

