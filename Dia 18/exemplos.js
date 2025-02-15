// simulando uma API
function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "João", idade: 25 });
        }, 2000);
    });
}

async function exibirUsuario() {
    const usuario = await buscarUsuario();
    console.log(`Usuário: ${usuario.nome}, Idade: ${usuario.idade}`);
}

exibirUsuario();

// Realizando tarefas paralelas com Promise.all
function tarefa1() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Tarefa 1 concluída!"), 2000)
    );
}

function tarefa2() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Tarefa 2 concluída!"), 1000)
    );
}

async function executarTarefas() {
    const resultados = await Promise.all([tarefa1(), tarefa2()]);
    console.log(resultados);
}

executarTarefas();

// temporizadores com setTimeout
async function temporizador(segundos) {
    console.log(`Esperando ${segundos} segundos...`);
    await new Promise((resolve) => setTimeout(resolve, segundos * 1000));
    console.log("Tempo concluído!");
}

temporizador(3);
