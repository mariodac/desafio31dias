// 1. Implemente uma pilha com métodos para adicionar, remover e visualizar o topo.
class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {    
        this.itens.push(elemento);
    }   

    pop() {
        if (this.itens.length === 0) {
            return "A pilha está vazia!";
        }
        return this.itens.pop();
    }   

    peek() {
        return this.itens[this.itens.length - 1];
    }

    isEmpty() {    
        return this.itens.length === 0;
    }
}

const pilha = new Pilha();
pilha.push(4);
pilha.push(2);
console.log(pilha.peek());
pilha.pop();
console.log(pilha.peek());

// 2. Crie uma função que use uma pilha para verificar se uma string é um palíndromo.
function palindromo(palavra) {
    const pilha = [];
    for (let char of palavra) {
        pilha.push(char);
    }
    let palavraInvertida = "";
    while (pilha.length > 0) {
        palavraInvertida += pilha.pop();
    }
    return palavraInvertida === palavra;
}

console.log(palindromo("arara"));
console.log(palindromo("desenvolvimento"));

// 3. Simule o funcionamento do botão "Desfazer" em um editor de texto usando pilhas.
class Editor {
    constructor() {
        this.acoes = [];
    }

    realizarAcao(acao) {        
        this.acoes.push(acao);
        console.log(`Ação realizada: ${acao}`);
    }

    desfazer() {
        if (this.acoes.length === 0) {
            console.log("Nada para desfazer");
            return;
        }        
        const ultimaAcao = this.acoes.pop();
        console.log(`Ação desfeita: ${ultimaAcao}`);
    }
}

const editor = new Editor();
editor.realizarAcao("Escreveu 'Olá");
editor.realizarAcao("Apagou 'Olá'");
editor.desfazer();


// 4. Escreva uma função que converta números decimais para binários usando pilhas.
function decimalParaBinario(numero) {
    const pilha = [];
    while (numero > 0) {
        pilha.push(numero % 2);
        numero = Math.floor(numero / 2);
    }
    return pilha.reverse().join("");
}

console.log(decimalParaBinario(101));

// 5. Use uma pilha para resolver expressões matemáticas como (1 + (2 * 3)).
function resolverExpressao(expressao) {
    const pilha = [];
    for (let char of expressao) {
        if (char === "(") {
            pilha.push(char);
        } else if (char === ")") {
            if (pilha.length === 0) {
                return false;
            }
            pilha.pop();
        }
    }
    return pilha.length === 0;
}