// árvore é uma estrutura hierárquica onde cada elemento (nó) pode ter filhos
// usada para representar dados organizados de forma hierárquica, como sistemas de arquivos, hierarquias organizacionais

// uma árvore é composta de nós conectados por arestas, o nó principal é chamado de raiz e cada nó pode ter 0 o mais filhos

// exemplos de árvores:
// árvore genealógica: relações familiares
// sistemas de arquivos: pastas e subpastas

// termos importantes
// raiz -> nó principal da árvore
// filho -> nó que está conectado a um nó pai
// pai -> nó que está conectado a um nó filho
// folha -> nó sem filhos
// altura da árvore ->número máximo de níveis

//       A (Raiz)
//     /   \
//    B     C (pai)
//   / \   / \
//  D   E F   G (filhos)
// /
// H (folha)
// altura 3

// implementação de árvores em JavaScript
// usando objetos
const arvore = {
    valor: "A",
    filhos: [
        {
            valor: "B",
            filhos: [
                { valor: "D", filhos: [] },
                { valor: "E", filhos: [] },
            ],
        },
        {
            valor: "C",
            filhos: [
                { valor: "F", filhos: [] },
                { valor: "G", filhos: [{ valor: "H", filhos: [] }] },
            ],
        },
    ],
};

// usando classes
class No {
    constructor(valor) {
        this.valor = valor;
        this.filhos = [];
    }

    adicionarFilho(no) {
        this.filhos.push(no);
    }
}

const raiz = new No("A");
const noB = new No("B");
const noC = new No("C");
const noD = new No("D");

noB.adicionarFilho(noD);
raiz.adicionarFilho(noB);
raiz.adicionarFilho(noC);

console.log(raiz);

// percorrendo uma árvore
// busca em profundidade (DFS - Depth First Search)
// explora o máximo de profundidade antes de voltar e explorar outros caminhos

function dfs(no) {
    console.log(no.valor);
    no.filhos.forEach((filho) => dfs(filho));
}
console.log("Busca em profundidade (DFS):");
dfs(raiz);

// busca em largura (BFS - Breadth First Search)
// explorar todos os nós no mesmo nível antes de descer

function bfs(raiz) {
    const fila = [raiz];
    while (fila.length > 0) {
        const no = fila.shift();
        console.log(no.valor);
        no.filhos.forEach((filho) => fila.push(filho));
    }
}
console.log("Busca em largura (BFS):");
bfs(raiz);

// escolha o algoritmo certo
// use DFS para explorar toda a árvore e BFS para encontrar o caminho mais curto em árvores amplas
// organize bem os nós, estruturas bem definidas tornam o gerenciamento de árvores muito mais simples
// use árvore para dados hierárquicos, sempre que precisar organizar informações em níveis (como menus ou pastas), considere usar árvores
