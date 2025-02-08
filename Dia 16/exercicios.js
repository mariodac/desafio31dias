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

    bfs(raiz) {
        const fila = [raiz];
        // console.log();
        while (fila.length > 0) {
            const no = fila.shift();
            console.log(no.nome);
            no.filhos.forEach((filho) => {
                fila.push(filho);
            });
        }
    }

    dfs(no) {
        console.log(no.nome);
        no.filhos.forEach((filho) => {
            this.dfs(filho);
        });
    }

    contarNos() {
        let total = 1;
        this.filhos.forEach((filho) => {
            total += filho.contarNos();
        });
        return total;
    }

    buscarDFS(valor) {
        if (this.nome === valor) return this;
        for (const filho of this.filhos) {
            const resultado = filho.buscarDFS(valor);
            if (resultado) return resultado;
        }
        return null;
    }

    buscarBFS(valor) {
        const fila = [this];
        while (fila.length > 0) {
            const atual = fila.shift();
            if (atual.nome === valor) return atual;
            fila.push(...atual.filhos);
        }
        return null;
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

// ceo.bfs(ceo);

// 2. Implemente uma função para contar o número total de nós em uma árvore.
// ceo.contarNos(ceo)
console.log(ceo.contarNos(ceo));

// 3. Crie uma árvore genealógica e implemente um método para listar todos os descendentes de um nó.
const bisavo = new No("Bisavo");
const avo = new No("Avo");
const pai = new No("Pai");
const filho = new No("Filho");

bisavo.adicionarNo(avo);
avo.adicionarNo(pai);
pai.adicionarNo(filho);
bisavo.bfs(bisavo);

// 4. Implemente uma busca em profundidade e largura para encontrar um nó com um valor específico.
console.log("Buscando valor");
let noEncontrado = ceo.buscarDFS("Gerente Finanças");
console.log(noEncontrado)
noEncontrado = ceo.buscarBFS("Gerente Finanças");
console.log(noEncontrado)

