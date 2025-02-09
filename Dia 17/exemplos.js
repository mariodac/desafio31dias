// rede social, simula conexões entre amigos
const redeSocial = {
    Alice: ["Bob", "Carol"],
    Bob: ["Alice", "David"],
    Carol: ["Alice", "Eve"],
    David: ["Bob"],
    Eve: ["Carol"],
};

console.log(redeSocial["Alice"]);

// rota de GPS, calcule rotas entre cidades
const rotas = {
    SP: ["RJ", "MG"],
    RJ: ["SP", "ES"],
    MG: ["SP", "ES"],
    ES: ["RJ", "MG"],
};

function bfs(grafo, inicio) {
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

bfs(rotas, "SP");

// sistema de recomendação, recomenda produtos baseados em conexões entre usuários e produtos
const recomendacoes = {
    Usuario1: ["ProdutoA", "ProdutoB"],
    Usuario2: ["ProdutoB", "ProdutoC"],
    Usuario3: ["ProdutoC", "ProdutoA"],
};

console.log(recomendacoes["Usuario1"]);
