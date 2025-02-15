// 1.  Implemente uma função que simula o carregamento de dados de um banco usando setTimeout e Promises.
const dados = {
    id: 1,
    nome: "João",
    idade: 30,
};
function carregarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Dados carregados com sucesso. -> ${dados.nome}`);
        }, 2000);
    });
}

carregarDados()
    .then((dados) => {
        console.log(dados);
    })
    .catch((erro) => {
        console.error("Erro ao buscar os dados:", erro);
    });

// 2. Escreva uma função que simule a espera por um evento usando setTimeout com Async/Await.
function aguardaEvento() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Evento executado");
        }, 3000);
    });
}

async function executar() {
    try {
        const evento = await aguardaEvento();
        console.log(evento);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

executar();

// 3. Crie uma API falsa que retorne dados de produtos com atraso simulado e exiba os resultados no console.
const produtos = [
    "Detergente",
    "Amaciante",
    "Arroz",
    "Café",
    "Papel Higiênico",
];
function carregarProdutos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(produtos);
        }, 4000);
    });
}

async function exibirProdutos() {
    const produtosCarregados = await carregarProdutos()
    console.log(`Produtos: ${produtosCarregados}`)
}

exibirProdutos()


// 4. Escreva uma função que execute três tarefas sequenciais usando Promises e Async/Await.
async function executarTarefas() {
    await carregarProdutos()
    console.log("Produtos carregados")
    await aguardaEvento()
    console.log("Evento executado")
    await carregarDados()
    console.log("Dados carregados")
}

executarTarefas()