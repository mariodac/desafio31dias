// fila é uma estrutura de dados linear que segue o princípio FIFO (First In First Out), ou seja, o primeiro elemento a entrar na fila será o primeiro a sair

// estrutura básica
// enqueue -> adiciona um elemento ao fim da fila
// dequeue -> remove o elemento do começo da fila
// front -> retorna o elemento do começo da fila
// isEmpty -> verifica se a fila está vazia

// filas em JavaScript
// usando um array simples
// array oferece métodos como push e shift, que torna fácil criar uma fila

class Fila {
    constructor() {
        this.itens = [];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    enqueue(elemento) {
        this.itens.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "A fila está vazia!";
        }
        return this.itens.shift();
    }

    front() {
        return this.isEmpty() ? "A fila está vazia!" : this.itens[0];
    }
}

const fila = new Fila()
fila.enqueue("Cliente 1")
fila.enqueue("Cliente 2")
console.log(fila.front())
fila.dequeue()
console.log(fila.front())

// filas são ideias para processos sequenciais, use quando tarefas precisam ser realizadas na ordem que foram recebidas
// evite operações ineficientes, usar shift em arrays pode ser lento para filas muito grandes. considera usar bibliotecas especializadas para filas maiores
// muitas filas em sistemas reais são implementadas usando estruturas mais complexas como filas

