// 1. Crie uma árvore para representar uma hierarquia organizacional (CEO - Diretores - Gerentes - Analistas).
class No {
    constructor(nome) {
        this.nome = nome;
        this.filhos = [];
        this.quantidadeNos = 0;
    }
    adicionarNo(no) {
        this.quantidadeNos++;
        this.filhos.push(no);
    }

    bfs(raiz, contador) {
        const fila = [raiz];
        console.log(contador);
        while (fila.length > 0) {
            const no = fila.shift();
            console.log(no.nome);
            no.filhos.forEach((filho) => {
                contador += raiz.quantidadeNos;
                this.bfs(filho, contador);
            });
        }
        return contador;
    }

    contarNos(raiz) {
        let contador = 0;
        contador = this.bfs(raiz, contador);
        return contador;
    }
}

const ceo = new No("CEO");
const diretorFinancas = new No("Diretor Finanças");
const diretorMarketing = new No("Diretor Marketing");
ceo.adicionarNo(diretorFinancas);
ceo.adicionarNo(diretorMarketing);

const gerenteFinancas = new No("Gerente Finanças");
const gerenteMarketing = new No("Gerente Finanças");
diretorFinancas.adicionarNo(gerenteFinancas);
diretorMarketing.adicionarNo(gerenteMarketing);

const analistaPagamentos = new No("Analista Pagamentos");
const analistaRecebimentos = new No("Analista Recebimentos");
gerenteFinancas.adicionarNo(analistaPagamentos);
gerenteFinancas.adicionarNo(analistaRecebimentos);

const analistaFrontEnd = new No("Analista Front End");
const analistaDesigner = new No("Analista Designer");
gerenteMarketing.adicionarNo(analistaDesigner);
gerenteMarketing.adicionarNo(analistaFrontEnd);

// ceo.bfs(ceo, 0);

// 2. Implemente uma função para contar o número total de nós em uma árvore.
// ceo.contarNos(ceo)
console.log(ceo.contarNos(ceo));
// console.log(gerenteFinancas.quantidadeNos)
