// 1.Crie uma classe chamada Livro com atributos titulo, autor e ano. Adicione um método para exibir os detalhes do livro.
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    exibirDetalhes() {
        console.log(
            `Informações do Livro\nTitulo: ${this.titulo}; Autor:${this.autor}; Ano: ${this.ano}`
        );
    }
}
const livro1 = new Livro("Senhor dos Anéis", "J. R. R. Tolkien", 1954);
livro1.exibirDetalhes();

// 2. Implemente uma classe ContaBancaria com os métodos depositar e sacar.
class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }

    verSaldo() {
        console.log(`Seu saldo é $ ${this.saldo}`);
    }
}
const conta1 = new ContaBancaria(10);
conta1.depositar(100);
conta1.verSaldo();
conta1.sacar(30);
conta1.verSaldo();

// 3. Crie uma classe Pessoa com um método que exibe "Bem-vindo, [nome]!".
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    saudacao() {
        console.log(`Bem-vindo ${this.nome}!`);
    }
}

const pessoa1 = new Pessoa("Mario");
pessoa1.saudacao();

// 4. Implemente uma classe Calculadora com métodos para soma, subtração, multiplicação e divisão.
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    somar() {
        console.log(
            `${this.valor1} + ${this.valor2} = ${this.valor1 + this.valor2}`
        );
    }

    subtrair() {
        console.log(
            `${this.valor1} - ${this.valor2} = ${this.valor1 - this.valor2}`
        );
    }

    multiplicar() {
        console.log(
            `${this.valor1} * ${this.valor2} = ${this.valor1 * this.valor2}`
        );
    }

    dividir() {
        console.log(
            `${this.valor1} / ${this.valor2} = ${this.valor1 / this.valor2}`
        );
    }
}

const calculadora = new Calculadora(1, 2);
calculadora.somar();
calculadora.subtrair();
calculadora.multiplicar();
calculadora.dividir();

// 5. Crie uma classe Agenda para armazenar e exibir contatos.
class Agenda {
    constructor() {
        this.dados = [];
    }

    adicionarContato(nome, numero) {
        this.dados.push([nome, numero]);
    }

    exibirContatos() {
        console.log("Dados de seus contatos");
        console.log(this.dados.length);
        
        for (let i = 0; i < this.dados.length; i++) {
            console.log(`Nome: ${this.dados[i][0]}; Email: ${this.dados[i][1]}`);
        }
    }
}

const agenda = new Agenda();
agenda.adicionarContato("Mario", "mario@gmail.com");
agenda.adicionarContato("Douglas", "douglas@email.com");
agenda.adicionarContato("Ricardo", "ricardo@gmail.com");
agenda.exibirContatos();
