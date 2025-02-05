// 1. Crie uma classe Funcionario com um método calcularSalario. Implemente subclasses como Desenvolvedor e Gerente que sobrescrevem esse método.

class Funcionario {
    constructor(nome) {
        this.nome = nome;
    }

    calcularSalario() {
        return 0;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, diasTrabalhados, valorDia) {
        super(nome);
        this.diasTrabalhados = diasTrabalhados;
        this.valorDia = valorDia;
    }

    calcularSalario() {
        return this.diasTrabalhados * this.valorDia;
    }
}

class Gerente extends Funcionario {
    constructor(nome, diasTrabalhados, valorDia, bonus) {
        super(nome);
        this.diasTrabalhados = diasTrabalhados;
        this.valorDia = valorDia;
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.diasTrabalhados * this.valorDia + this.bonus;
    }
}

const dev = new Desenvolvedor("Mario", 25, 85);
console.log(`Desenvolvedor ${dev.nome} recebeu $${dev.calcularSalario()}`)
const gerente = new Gerente("Roberto", 20, 100, 300);
console.log(`Gerente ${gerente.nome} recebeu $${gerente.calcularSalario()}\n`)

// 2. Implemente uma classe Transporte e subclasses como Carro, Avião e Barco, cada uma com seu método mover.
class Transporte {
    constructor(nomeMotorista) {
        this.nomeMotorista = nomeMotorista;
    }

    mover() {
        console.log(`${this.nomeMotorista} está se movendo!`);
    }
}

class Carro extends Transporte {
    constructor(nomeMotorista, marca, modelo) {
        super(nomeMotorista);
        this.marca = marca;
        this.modelo = modelo;
    }

    mover() {
        console.log(`Carro ${this.marca} ${this.modelo} está se trafegando pela rodovia!`);
    }
}

class Aviao extends Transporte {
    constructor(nomeMotorista, companhiaAerea) {
        super(nomeMotorista);
        this.companhiaAerea = companhiaAerea;
    }

    mover() {
        console.log(`Avião ${this.companhiaAerea} está se navegando pelo ar!`);
    }
}

class Barco extends Transporte {
    constructor(nomeMotorista, nomeBarco) {
        super(nomeMotorista);
        this.nomeBarco = nomeBarco;
    }

    mover() {
        console.log(`Barco ${this.nomeBarco} está se navegando pelo mar!`);
    }
}

const transportes = [new Carro("Mario", "Honda", "Civic"), new Aviao("Roberto", "Gol"), new Barco("Roberto", "Barco")];
transportes.forEach((transporte) => transporte.mover());
console.log();


// 3. Crie uma superclasse Documento com um método exibirConteudo, e subclasses como PDF e Word que personalizem esse método.

class Documento {
    constructor(nome) {
        this.nome = nome;
    }

    exibirConteudo() {
        return
    }
}

class PDF extends Documento {
    exibirConteudo() {
        return "Conteúdo do PDF";
    }
}

class Word extends Documento {
    exibirConteudo() {
        return "Conteúdo do Word";
    }
}

const documentos = [new PDF("PDF"), new Word("Word")];
documentos.forEach((documento) => console.log(documento.exibirConteudo()));
console.log();

// 4. Implemente um sistema de animais com uma superclasse Animal e métodos específicos em subclasses como Passaro e Peixe.
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    movimentar() {
        console.log(`${this.nome} está se movendo!`);
    }
}

class Passaro extends Animal {
    movimentar() {
        console.log(`${this.nome} está voando!`);
    }
}

class Peixe extends Animal {
    movimentar() {
        console.log(`${this.nome} está nadando!`);
    }
}

const animais = [new Passaro("Papagaio"), new Peixe("Tubarão")];
animais.forEach((animal) => animal.movimentar());
console.log();

// 5. Use o polimorfismo para criar uma lista de diferentes formas geométricas (Quadrado, Círculo, etc.) e calcule suas áreas.
class FormaGeometrica {
    calcularArea() {
        console.log("Calculando a área da forma geométrica...");
    }
}

class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        console.log(`Área do quadrado: ${this.lado * this.lado}`);
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        console.log(`Área do círculo: ${Math.PI * this.raio * this.raio}`);
    }
}

class Triangulo extends FormaGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        console.log(`Área do triângulo: ${(this.base * this.altura) / 2}`);
    }
}

const formas = [new Quadrado(5), new Circulo(3), new Triangulo(4, 6)];
formas.forEach((forma) => forma.calcularArea());
