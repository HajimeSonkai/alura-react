class Cliente{
    nome;
    cpf;
};

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
    };

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(this.#saldo);
        }
    }
};

const cliente1 = new Cliente();

cliente1.nome = "ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "alice";
cliente2.CPF = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);