// grafos são usados para modelar relações conexões
// grafo é uma coleção de nós (ou vértices) conectados por arestas, conexões que podem ser direcionadas ou não, cada aresta pode ter um peso associado
// uma rede social, cada pessoa é um nó e cada conexão (amizade) é uma aresta
// um mapa de rotas, cada cidade é um nó e cada conexão (rota) é uma aresta

// termos importantes
// vértices (nós) -> os pontos do grafo
// arestas -> conexões entre os vértices
// grafo direcionado -> arestas tem uma direção
// grafo não direcionado -> arestas não tem uma direção

// representação de grafo
// 6    5 -- 1
//  \  / |  /
//   4   | /
//   |   |/
//   3 - 2

// representar grafo em JavaScript
// usando lista de adjacência, cda nó tem uma lista de nós conectados a ele
const grafo = {
    1: [2, 5],
    2: [1, 4, 3],
    3: [2, 4],
    4: [2, 3, 5, 6],
    5: [1, 4],
    6: [4],
};

console.log(grafo);

// usando matriz de adjacência, matriz que indica quais nós estão conectados
const matrizAdjacencia = [
    //   A  B  C  D
    [0, 1, 1, 0], // A
    [1, 0, 0, 1], // B
    [1, 0, 0, 1], // C
    [0, 1, 1, 0], // D
];

console.log(matrizAdjacencia[0][1]);

// percorrendo um grafo
// Busca em profundidade (DFS - Depth First Search) - explorar o máximo de profundidade antes de voltar e explorar outros caminhos
function buscaEmProfundidade(grafo, no, visitados = new Set()) {
    if (visitados.has(no)) return;
    console.log(no);
    visitados.add(no);
    grafo[no].forEach((vizinho) =>
        buscaEmProfundidade(grafo, vizinho, visitados)
    );
}

const grafoNumeros = {
    1: [2, 5],
    2: [1, 4, 3],
    3: [2, 4],
    4: [2, 3, 5, 6],
    5: [1, 4],
    6: [4],
};

buscaEmProfundidade(grafoNumeros, 1);

// Busca em largura (BFS - Breadth First Search) - explorar todos os nós no mesmo nível antes de descer
function buscaEmLargura(grafo, inicio) {
    const visitados = new Set();
    const fila = [inicio];

    while (fila.length > 0) {
        const no = fila.shift();
        if (!visitados.has(no)) {
            console.log(no);
            visitados.add(no);
            fila.push(...grafo[no]);
        }
    }
}

buscaEmLargura(grafo, 1);

// escolha a representação correta, use lista de adjacência para grafos esparsos e matriz de adjacência para grafos densos
// evite loops infinitos, sempre acompanhe os nós visitados para evitar percorrer o mesmo nó repetidamente
// aplique o grafo em problemas reais, como rotas de GPS, redes sociais, algoritmos de recomendação
