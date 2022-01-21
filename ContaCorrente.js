import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    static numeroDeContas = 0;

    _cliente;
    _saldo = 0;
    //#saldo;

    constructor(cliente, agencia) {
        this._cliente = cliente;
        this.agencia = agencia
        ContaCorrente.numeroDeContas+=1;
    }

    set cliente(novovalor) {
        if (novovalor instanceof Cliente) {
            this._cliente = novovalor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}