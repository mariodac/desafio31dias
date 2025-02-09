// 1. Implemente um grafo para representar rotas entre cidades.
const cidades = {
    "Rio Verde": ["Santa Helena", "Montividiu", "Jataí"],
    "Santa Helena": ["Rio Verde", "Ouroana"],
    "Montividiu": ["Rio Verde"],
    "Jataí": ["Rio Verde", "Serranopolis", "Mineiros"],
    "Ouroana": ["Santa Helena"],
    "Serranopolis": ["Jataí"],
    "Mineiros": ["Jataí"],
};

// 2. Crie uma função para verificar se dois nós estão conectados em um grafo.
const nosConectados = (grafo, no1, no2) => {
    if (grafo.hasOwnProperty(no1) && grafo.hasOwnProperty(no2)) {
        return grafo[no1].includes(no2) || grafo[no2].includes(no1);
    } else if (grafo.hasOwnProperty(no1) && !grafo.hasOwnProperty(no2)) {
        return grafo[no1].includes(no2);
    } else if (!grafo.hasOwnProperty(no1) && grafo.hasOwnProperty(no2)) {
        return grafo[no2].includes(no1);
    }
    return false;
};
console.log(nosConectados(cidades, "Rio Verde", "Ouroana"));


console.log(preprocessGraph(cidades));

// 3. Implemente um grafo para modelar um sistema de amizades em uma rede social.
const redeSocial = {
    Alice: ["Bob", "Carol"],
    Bob: ["Alice", "David"],
    Carol: ["Alice", "Eve"],
    David: ["Bob"],
    Eve: ["Carol"],
};

console.log(redeSocial["Alice"]);
