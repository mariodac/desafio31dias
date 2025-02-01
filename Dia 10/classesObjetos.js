// Programação Orientada a Objetos (POO) -> Classes e Objetos
// na vida real, temos vários objetos: carros, pessoas, animais e etc.
// cada objeto possui características (atributos) e ações (métodos)
// na programação, usamos classes para representar esses objetos
// objetos são instâncias dessas classes

// classes -> é o molde ou modelo que define as características (atributos) e comportamentos (métodos) de um objeto
// objetos -> são instâncias das classes, ou seja, eles herdam as características e comportamentos da classe, algo criado a partir do molde

// exemplo
// classe Carro (com atributos como marca, modelo e cor, com métodos como acelerar, frear)
// objeto um carro específico, como "Toyota Corolla Branco"

class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca; // Atributo
        this.modelo = modelo;
        this.cor = cor;
    }

    acelerar() {
        // Método
        console.log(`${this.marca} está acelerando! 🚗💨`);
    }
}

const meuCarro = new Carro("Toyota", "Corolla", "Branco");
meuCarro.acelerar();

// declare uma classe utilizando a palavra-chave class
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// crie um objeto utilizando a palavra-chave new
const pessoa1 = new Pessoa("Joaquim", 30);
pessoa1.apresentar();

// atributos e métodos
// atributos -> características do objeto
// métodos -> comportamentos do objeto
class Animal {
    constructor(nome, especie) {
        this.nome = nome; // Atributo
        this.especie = especie;
    }

    fazerSom() {
        // Método
        console.log(`${this.nome} está fazendo um som! 🐾`);
    }
}

const cachorro = new Animal("Rex", "Cachorro");
cachorro.fazerSom();

