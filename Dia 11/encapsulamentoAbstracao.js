// Encapsulamento e Abstração
// dois conceitos fundamentais para Programação Orientada a Objetos (POO)
// Encapsulamento: controlar o acesso aos atributos e métodos de uma classe
// Abstração: representar apenas a parte essencial de um objeto, escondendo detalhes internos do funcionamento

// encapsulamento é como um cofre, pode interagir com ele através de um painel de senha, mas não tem acesso direto ao seu conteúdo
// no código, protege os atributos e métodos de uma classe, permitindo acesso ou alteração apenas por métodos específicos (getters e setters)
class Cofre {
    #senha; // Atributo privado

    constructor(senhaInicial) {
        this.#senha = senhaInicial;
    }

    alterarSenha(novaSenha) {
        this.#senha = novaSenha;
    }

    verificarSenha(senha) {
        return this.#senha === senha;
    }
}

const meuCofre = new Cofre("1234");
console.log(meuCofre.verificarSenha("1234"));
meuCofre.alterarSenha("5678");
console.log(meuCofre.verificarSenha("1234"));

// usamos a palavra-chave # para indicar que um atributo ou método deve ser tratado como privado
class Conta {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const minhaConta = new Conta(1000);
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo());

// abstração é esconder os detalhes internos e fornecer apenas as funcionalidades
// para dirigir o carro, não é necessário saber como o motor funciona
class Carro {
    ligarMotor() {
        console.log("Motor ligado! 🔑🚗");
    }

    dirigir() {
        console.log("Dirigindo... 🛣️");
    }
}

const meuCarro = new Carro();
meuCarro.ligarMotor();
meuCarro.dirigir();

// combinação de encapsulamento e abstração
class CaixaEletronico {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente! ❌");
        } else {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso! ✅`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.#saldo}`);
    }
}

const caixa = new CaixaEletronico(1000);
caixa.sacar(500); 
caixa.consultarSaldo();
caixa.sacar(600);

// encapsule sempre que possível, proteja os dados sensíveis e forneça métodos específicos para manipula-los
// mantenha simples, use abstração para esconder detalhes irrelevantes e expor apenas o que importa
