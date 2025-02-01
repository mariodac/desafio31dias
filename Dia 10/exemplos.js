// criando uma classe para um produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes() {
        console.log(`${this.nome} custa R$${this.preco}.`);
    }
}

const produto1 = new Produto("Celular", 1500);
produto1.exibirDetalhes();

// classe com método para cálculo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

const retangulo = new Retangulo(5, 10);
console.log(`Área: ${retangulo.calcularArea()}`);

// criando um banco de dados simples
class BancoDeDados {
    constructor() {
        this.dados = [];
    }

    adicionar(dado) {
        this.dados.push(dado);
        console.log("Dado adicionado!");
    }

    listar() {
        console.log(this.dados);
    }
}

const bd = new BancoDeDados();
bd.adicionar("Cliente 1");
bd.listar();

