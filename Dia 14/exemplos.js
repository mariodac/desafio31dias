// simulando um desfazer
class Editor{
    construtor() {
        this.acoes = [];
    }

    realizarAcao(acao) {
        this.acoes.push(acao);
        console.log(`Ação realizada: ${acao}`);
    }

    desfazer() {
        if (this.acoes.length === 0) {
            console.log("Nada para desfazer")
            return;
        }
        const ultimaAcao = this.acoes.pop();
        console.log(`Ação desfeita: ${ultimaAcao}`);
    }
}

const editor = new Editor();
editor.realizarAcao("Escreveu 'Olá")
editor.realizarAcao("Apagou uma palavra");
editor.desfazer();

// converter decimal para binário
function decimalParaBinario(numero) {
    const pilha = [];
    while (numero > 0) {
        pilha.push(numero % 2);
        numero = Math.floor(numero / 2);
    }
    return pilha.reverse().join("");
}

console.log(decimalParaBinario(10));

