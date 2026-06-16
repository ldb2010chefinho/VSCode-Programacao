console.log("------Encapsulamento-----");
class Conta {
    #saldo = 0;
    constructor(saldoInicial) {
        if (saldoInicial < 0 ) {
            this.#saldo = 0;
            console.warn("Valor Negativo");
            
        }else{
            this.#saldo = saldoInicial;
            console.log();
        }
    }
    get getSaldo(){
        return this.#saldo;
    }

    set mudarSaldo(diferenca){
        this.#saldo = diferenca
    }

    depositar(depSaldo){
        if (depSaldo > 0) {
            return this.#saldo += depSaldo;
        }
    }

    sacar(tirarSaldo){
        if (tirarSaldo <= this.#saldo) {
            return this.#saldo -= tirarSaldo;

        }
    }
}

let c1 = new Conta(2010);
console.log(c1.getSaldo);
c1.mudarSaldo = 2026
console.log(c1.getSaldo);
console.log(c1.depositar(4));
c1.sacar(28);
console.log(c1.getSaldo);



