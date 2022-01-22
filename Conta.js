export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 100) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste() {
        console.log("ẗeste classe conta");
    }
}