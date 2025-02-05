// sistemas de pagamentos
class Pagamento {
    processar() {
        console.log("Processando pagamento genérico.");
    }
}

class PagamentoCartao extends Pagamento {
    processar() {
        console.log("Pagamento realizado com cartão de crédito. 💳");
    }
}

class PagamentoPix extends Pagamento {
    processar() {
        console.log("Pagamento realizado via Pix. 📲");
    }
}

const pagamentos = [new PagamentoCartao(), new PagamentoPix()];
pagamentos.forEach((pagamento) => pagamento.processar());

// veículos com métodos diferentes
class Veiculo {
    mover() {
        console.log("O veículo está se movendo.");
    }
}

class Carro extends Veiculo {
    mover() {
        console.log("O carro está dirigindo. 🚗");
    }
}

class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta está pedalando. 🚴‍♂️");
    }
}

const veiculos = [new Carro(), new Bicicleta()];
veiculos.forEach((veiculo) => veiculo.mover());

