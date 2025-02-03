// 1. Crie uma classe Veiculo e duas subclasses: Carro e Moto. Adicione métodos específicos para cada subclasse.

class Veiculo {
    constructor(marca, modelo) {
        this.modelo = modelo;
        this.marca = marca;
    }

    acelerar() {
        console.log(`Acelerando ${this.modelo}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, quantidadePortas) {
        super(marca, modelo);
        this.quantidadePortas = quantidadePortas;
    }

    abrirPortas() {
        console.log(`Abrindo ${this.quantidadePortas} portas`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, guidao) {
        super(marca, modelo);
        this.guidao = guidao;
    }

    virar() {
        console.log(`Virando moto com guidão ${this.guidao}`);
    }
}

const carro = new Carro("Chevrolet", "Classic", "4");
carro.acelerar();
carro.abrirPortas();
const moto = new Moto("Honda", "Titan", "Ape Hanger");
moto.acelerar();
moto.virar();

// 2. Implemente uma classe Funcionario e uma subclasse Gerente que adicione um atributo setor.
class Funcionario {
    constructor(nome, empresa, salario) {
        this.nome = nome;
        this.empresa = empresa;
        this.salario = salario;
    }

    exibirInfo() {
        console.log(
            `Funcionário ${this.nome} da empresa ${this.empresa}, possui salário $${this.salario}`
        );
    }
}

class Gerente extends Funcionario {
    constructor(nome, empresa, salario, setor) {
        super(nome, empresa, salario);
        this.setor = setor;
    }

    exibirInfo() {
        console.log(
            `Gerente ${this.nome} da empresa ${this.empresa} responsável pelo setor ${this.setor}, possui salário $${this.salario}`
        );
    }
}

const funcionario = new Funcionario("Mario", "Google", 3000);
funcionario.exibirInfo();
const gerente = new Gerente("Douglas", "Google", 15000, "Tecnologia");
gerente.exibirInfo();

// 3. Crie uma superclasse Forma com um método para calcular área, e subclasses como Quadrado e Círculo que sobrescrevam esse método.
class Forma {
    constructor(formula) {
        this.formula = formula;
    }

    area(medida) {
        return medida;
    }
}

class Quadrado extends Forma {
    constructor(formula, comprimentoLado) {
        super(formula);
        this.comprimentoLado = comprimentoLado;
    }

    area() {
        return this.comprimentoLado * this.comprimentoLado;
    }
}

class Circulo extends Forma {
    constructor(formula, raio) {
        super(formula);
        this.raio = raio;
    }

    area() {
        return 3.14 * (this.raio * this.raio);
    }
}

const quadrado = new Quadrado("A = l²", 2);
console.log(quadrado.area());
const circulo = new Circulo("A = π * r²", 2);
console.log(circulo.area());

// 4. Escreva uma classe Animal e subclasses como Cachorro e Gato, cada uma com métodos específicos.
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log("Emitindo som");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("Au Au");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miau");
    }
}

const cachorro = new Cachorro("Tôtô");
cachorro.emitirSom();
const gato = new Gato("Bichano");
gato.emitirSom();

// 5. Crie uma classe Conta e uma subclasse ContaPoupanca que adicione juros ao saldo.
class Conta {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    verSaldo() {
        console.log(`Saldo = $${this.saldo}`)
    }
}

class ContaPoupanca extends Conta {
    constructor(saldoInicial, juros) {
        super(saldoInicial)
        this.juros = juros
    }

    aumentarSaldo() {
        this.saldo += (this.juros / 100) * this.saldo
    }
}

const poupanca = new ContaPoupanca(100, 3)
poupanca.aumentarSaldo()
poupanca.verSaldo()


