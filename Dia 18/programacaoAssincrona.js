// Programação assíncrona, operações são executadas uma aós a outra, e o programa espera uma operação terminar antes de começar a próxima
// Programação síncrona, as operações podem ser iniciadas e concluídas em tempos diferentes, sem bloquear a execução do restante do código

// exemplo
// síncrono, você espera a água ferver antes de cortar os vegetais
// assíncrono, você coloca a água para ferver e, enquanto isso, corta os vegetais

// callbacks, início da assincronicidade
// um callback é uma função passada como argumento para outra função, que será chamada depois que um tarefa for concluída.

function buscarDados(callback) {
    setTimeout(() => {
        console.log("Dados buscados!");
        callback();
    }, 1000);
}

buscarDados(() => {
    console.log("Callback executado");
});

// problemas com callback
// quando muitas funções dependem umas das outras, os callbacks podem gerar algo chamado de "callback hell" (um código difícil de ler e manter)
// exemplo
function prepararIngredientes(callback) {
    console.log("Preparando ingredientes...");

    setTimeout(() => {
        console.log("Ingredientes preparados");
        callback();
    }, 2000);
}

function cozinhar(callback) {
    console.log("Cozinhando...");

    setTimeout(() => {
        console.log("Prato pronto.");
        callback();
    }, 3000);
}

function servir(callback) {
    console.log("Servindo prato...");

    setTimeout(() => {
        console.log("Prato servido.");
        callback();
    }, 4000);
}

prepararIngredientes(() => {
    cozinhar(() => {
        servir(() => {
            console.log("Finalizado");
        });
    });
});

// Promises, resolvendo o callback hell
// uma Promise representa uma operação que ainda não foi concluída, mas será resolvido ou rejeitada no futuro
const promise = new Promise((resolve, reject) => {
    let result = false
    if (result) {
        resolve('Deu certo')
    } else {
        reject('Deu errado')
    }
})
promise
    .then((resposta) => {
        console.log(resposta)
    })
    .catch((resposta) => {
        console.log(resposta)
    })
function buscarDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dados buscados com sucesso");
        }, 2000);
    });
}

buscarDado()
    .then((dados) => {
        console.log(dados);
    })
    .catch((erro) => {
        console.error("Erro ao buscar os dados", erro);
    });

// async/await, simplificando a sintaxe
// o async/await torna o código assíncrono mais legível, permitindo que você escreva como se fosse síncrono
function buscaDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dados foram buscados");
        }, 2000);
    });
}

async function executar() {
    try {
        const dados = await buscaDados();
        console.log(dados);
    } catch (erro) {
        console.error("Erro: ", erro);
    }
}

executar();

// entenda event loop, é o mecanismo que gerencia a execução assíncrona no JavaScript, saiba como ele funciona para evitar confusões
// evite misturar callbacks com promises, escolha uma abordagem e mantenha a consistência no código
// use try/catch com async/await, sempre trate erros para evitar falhas inesperadas

// exemplo com api placeholder
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((resposta) => {
        if (resposta.ok) {
            return resposta.json();
        } else {
            throw new Error("Erro ao buscar os dados");
        }
    })
    .then((repostaJson) => {
        console.log(repostaJson);
    })
    .catch((erro) => {
        console.error("Erro: ", erro);
    });
