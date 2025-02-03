// classe para veículos
class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }

    ligar() {
        console.log(`${this.marca} está ligado! 🔑`);
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log(`${this.marca} está empinando! 🏍️`);
    }
}

const minhaMoto = new Moto("Yamaha");
minhaMoto.ligar(); // Saída: Yamaha está ligado! 🔑
minhaMoto.empinar(); // Saída: Yamaha está empinando! 🏍️

// sistema de funcionários
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirInfo() {
        console.log(`${this.nome} tem um salário de R$${this.salario}.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, setor) {
        super(nome, salario);
        this.setor = setor;
    }

    exibirInfo() {
        console.log(
            `${this.nome} é gerente do setor ${this.setor}, com salário de R$${this.salario}.`
        );
    }
}

const gerente = new Gerente("Ana", 8000, "RH");
gerente.exibirInfo(); // Saída: Ana é gerente do setor RH, com salário de R$8000.

// animais com métodos diferentes
class Animal {
    mover() {
        console.log("O animal está se movendo.");
    }
}

class Passaro extends Animal {
    mover() {
        console.log("O pássaro está voando! 🦅");
    }
}

class Peixe extends Animal {
    mover() {
        console.log("O peixe está nadando! 🐟");
    }
}

const passaro = new Passaro();
const peixe = new Peixe();
passaro.mover(); // Saída: O pássaro está voando! 🦅
peixe.mover(); // Saída: O peixe está nadando! 🐟
