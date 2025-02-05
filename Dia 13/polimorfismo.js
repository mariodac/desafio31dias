// polimorfismo
// em POO, é habilidade de diferentes classes derivadas implementarem métodos com o mesmo nome e comportamentos diferentes

// no mundo real, temos diferentes tipos de sapatos: tênis, chinelo e sapato social
// todos têm a função "usar", mas cada um é usado de forma diferente
// tênis para correr, chinelo para casa, sapato social para eventos formais

class Sapato {
    usar() {
        console.log("Usando um sapato genérico.");
    }
}

class Tenis extends Sapato {
    usar() {
        console.log("Usando tênis para correr. 🏃‍♂️");
    }
}

class Chinelo extends Sapato {
    usar() {
        console.log("Usando chinelo em casa. 🏠");
    }
}

const meuTenis = new Tenis();
const meuChinelo = new Chinelo();

meuTenis.usar();
meuChinelo.usar();

// sobrescrita de métodos
// polimorfismo acontece quando uma subclasse sobrescreve um método herdado da superclasse para fornecer um comportamento específico
class Animal {
    emitirSom() {
        console.log("O animal emite um som.");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("O cachorro late. 🐶");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("O gato mia. 🐱");
    }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.emitirSom(); // Saída: O cachorro late. 🐶
gato.emitirSom(); // Saída: O gato mia. 🐱

// polimorfismo com métodos genéricos
// utilize o polimorfismo para tratar diferentes tipos de objetos de forma genérica

class Forma {
    calcularArea() {
        console.log("Área da forma genérica.");
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        console.log(`Área do quadrado: ${this.lado * this.lado}`);
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        console.log(`Área do círculo: ${Math.PI * this.raio ** 2}`);
    }
}

const formas = [new Quadrado(4), new Circulo(3)];

formas.forEach((forma) => forma.calcularArea());

// use a sobrescrita com propósito, certifique-se de que a implementação específica de um método em uma subclasse faz sentido no contexto
// mantenha o código flexível, polimorfismo ajuda a reduzir o acoplamento entre partes do sistema, facilitando futuras alterações ou extensões
// evite repetição de código, reutilize ao máximo os métodos da superclasse antes de sobrescrevê-los
