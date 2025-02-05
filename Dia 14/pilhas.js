// pilha é como uma torre de pratos
// só pode adicionar ou remover pratos do topo da pilha, o prato que foi colocado por último será o primeiro a ser removido

// estrutura básica
// push -> adiciona um elemento ao topo da pilha
// pop -> remove o elemento do topo da pilha
// peek -> retorna o elemento do topo da pilha
// isEmpty -> verifica se a pilha está vazia

// pilhas no JavaScript
// usando um array simples
// array oferece métodos como push e pop, que tornam fácil criar uma pilha
class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        if (this.isEmpty()) {
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
pilha.push(1);
pilha.push(2);
console.log(pilha.peek());
pilha.pop();
console.log(pilha.peek());

// aplicações práticas de pilhas
// histórico de navegação, navegador usa uma pilha para armazenar páginas visitadas, clicando no botão boltar, ele remove a página atual da pilha
class Historico {
    constructor() {
        this.paginas = [];
    }

    visitarPagina(pagina) {
        this.paginas.push(pagina);
        console.log(`Visitou: ${pagina}`);
    }

    voltar() {
        if (this.paginas.length === 0) {
            console.log("Nenhuma página para voltar.");
            return;
        }
        const ultimaPagina = this.paginas.pop();
        console.log(`Voltou da página: ${ultimaPagina}`);
    }
}

const historico = new Historico();
historico.visitarPagina("google.com");
historico.visitarPagina("youtube.com");
historico.voltar();

// checar parênteses balanceados
// pilhas sã úteis para verifcar se os parênteses e uma expressão estão balanceados
function checarParenteses(expressao) {
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

console.log(checarParenteses("(a + b) * (c + d)"));
console.log(checarParenteses("(a + b * (c + d)"));

// reverter uma string

function reverterString(str) {
    const pilha =  [];
    for (let char of str) {
        pilha.push(char);
    }
    let resultado = "";
    while (pilha.length > 0) {
        resultado += pilha.pop();
    }
    return resultado
}

console.log(reverterString("Hello, World!"));

// evite underflow, verifique se a pilha está vazia antes de tentar remover um elemento
// use pilhas para resolver problemas recursivos, alguns problemas que paraecem recursivos, podem ser resolvidos com pilhas de forma iterativa
// mantenha as operações simples, concentre-se em usar as operações puh pop para manter a pilha organizada