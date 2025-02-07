// simulando um atendimento
class Atendimento {
    constructor() {
        this.clientes = [];
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente} entrou na fila.`);
    }

    atenderCliente() {
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente na fila.");
            return;
        }
        const clienteAtendido = this.clientes.shift();
        console.log(`Atendendo cliente ${clienteAtendido}`);
    }
}

const atendimento = new Atendimento();
atendimento.adicionarCliente("Mario");
atendimento.adicionarCliente("João");
atendimento.atenderCliente();
atendimento.atenderCliente();
atendimento.atenderCliente();

// gerenciando impressões
class Impressora {
    constructor() {
        this.documentos = [];
    }

    adicionarDocumento(documento) {
        this.documentos.push(documento);
        console.log(`Imprimindo documento ${documento}`);
    }

    imprimirDocumento() {
        if (this.documentos.length === 0) {
            console.log("Nenhum documento na fila.");
            return;
        }
        const documento = this.documentos.shift();
        console.log(`Imprimindo documento ${documento}`);
    }
}

const impressora = new Impressora();
impressora.adicionarDocumento("relatorio.pdf");
impressora.adicionarDocumento("planilha.xlsx");
impressora.imprimirDocumento();
impressora.imprimirDocumento();

// simulando uma fila de banco
class Banco {
    constructor() {
        this.fila = [];
    }

    entrarNaFila(cliente) {
        this.fila.push(cliente);
        console.log(`${cliente} entrou na fila do banco.`);
    }

    atenderCliente() {
        if (this.fila.length === 0) {
            console.log("Nenhum cliente na fila.");
            return;
        }
        const cliente = this.fila.shift();
        console.log(`Atendendo ${cliente}.`);
    }
}

const banco = new Banco();
banco.entrarNaFila("Carlos");
banco.entrarNaFila("Maria");
banco.atenderCliente();
banco.atenderCliente();
