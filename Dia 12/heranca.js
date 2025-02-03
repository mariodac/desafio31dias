// herança é um mecanismo que permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse)
// classe pai: veículo com atributos e métodos comuns a todos os veículos, como métodos acelerar, frear, etc, e atributos como rodas e motor
// classe filha: carro herda atributos e métodos de veículo, mas pode ter características próprias, como portas, trânsmissão, etc
// exemplo
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mover() {
        console.log(`${this.marca} ${this.modelo} está se movendo! 🚗`);
    }
}

class Carro extends Veiculo {
    abrirPorta() {
        console.log(`${this.marca} ${this.modelo} está abrindo as portas! 🚪`);
    }
}

const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.mover();
meuCarro.abrirPorta();

// herança em javascript
// superclasse contém os atributos e métodos que podem ser herdados por outras subclasses
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log(`${this.nome} está fazendo um som! 🐾`);
    }
}

// subclasses herdam os atributos e métodos da superclasse, usando a palavra-chave extends
class Cachorro extends Animal {
    latir() {
        console.log(`${this.nome} está latindo! 🐶`);
    }
}

// construtor da superclasse sendo chamado na classe filha, utilizando palavra-chave super
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da superclasse
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome}, da raça ${this.raca}, está latindo! 🐶`);
    }
}

// sobrescrita de métodos (override)
// subclasses podem sobrescrever métodos herdados da superclasse
class Animal {
    fazerSom() {
        console.log("Algum som genérico!");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("Miau! 🐱");
    }
}

const meuGato = new Gato();
meuGato.fazerSom();

// use herança com moderação, pode ser utilizado composição de objetos em vez de herança
// cuidado com sobrescrita de métodos, cheque que métodos sobrescritos cause comportamento inesperado
// aproveite a reutilização de código, herança pode tornar o código mais modular e reutilizável


