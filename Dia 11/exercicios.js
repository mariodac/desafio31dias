// 1. Crie uma classe ContaBancaria que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.
class ContaBancaria {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valorDeposito) {
        this.#saldo += valorDeposito;
    }

    sacar(valorSaque) {
        if (this.#saldo - valorSaque < 0) {
            console.log("Valor de Saque excede o saldo atual");
            return false;
        }
        this.#saldo -= valorSaque;
        return true;
    }

    consultarSaldo() {
        console.log(`Saldo atual: $${this.#saldo}`);
    }
}
const minhaConta = new ContaBancaria(100);
minhaConta.depositar(150);
minhaConta.consultarSaldo();
minhaConta.sacar(1000);
minhaConta.consultarSaldo();

// 2. Implemente uma classe Usuario que armazena uma senha privada e permite alterar a senha com validação.
class Usuario {
    #senha;
    constructor(senhaInicial) {
        this.#senha = senhaInicial;
    }

    validarSenha(novaSenha) {
        if (novaSenha === this.#senha) {
            return false;
        }
        return true;
    }

    alterarSenha(novaSenha) {
        if (this.validarSenha(novaSenha)) {
            this.#senha = novaSenha;
            console.log("Senha alterada com sucesso");
        } else {
            console.log("Nova senha não pode ser igual a anterior");
            console.log("Senha não alterada");
        }
    }
}

const user = new Usuario("123");
user.alterarSenha("123");
user.alterarSenha("1234");

// 3. Crie uma classe ControleRemoto com métodos para ligar e desligar a TV, escondendo o estado interno.
class ControleRemoto {
    #status;
    constructor(statusInicial) {
        this.#status = statusInicial;
    }

    ligar() {
        this.#status = true;
        console.log("TV ligada");
    }

    desligar() {
        this.#status = false;
        console.log("TV desligada");
    }
}

const meuControle = new ControleRemoto(true);
meuControle.ligar();
meuControle.desligar();

// 4. Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.
class Cofre {
    #senha;
    constructor(senhaInicial) {
        this.#senha = senhaInicial;
    }

    acessar(senha) {
        if (senha === this.#senha) {
            console.log("Bem-vindo");
        } else {
            console.log("Acesso negado");
        }
    }
}

const meuCofre = new Cofre("123");
meuCofre.acessar("qqwe");
meuCofre.acessar("123");

// 5. Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.
class CarrinhoCompras {
    #itens;
    constructor() {
        this.#itens = [];
    }

    adicionar(item) {
        if (this.#itens.includes(item)) {
            console.log("Existe já existe no carrinho");
        }
        this.#itens.push(item)
        console.log("Item adicionado com sucesso");
    }

    remover(itemRemover) {
        this.#itens = this.#itens.filter((item) => item !== itemRemover);
    }

    listarItens() {
        for (let i = 0; i < this.#itens.length; i++) {
            console.log(`Item ${i}: ${this.#itens[i]}`);
        }
    }
}

const meuCarrinho = new CarrinhoCompras();
meuCarrinho.adicionar("Placa de video Nvida");
meuCarrinho.adicionar("Processador Intel");
meuCarrinho.adicionar("Processador AMD");
meuCarrinho.listarItens();
meuCarrinho.remover("Processador Intel")
meuCarrinho.listarItens();
