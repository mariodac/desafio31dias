// gerenciador de tarefas
class GerenciadorDeTarefas {
    #tarefas;

    constructor() {
        this.#tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.#tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada!`);
    }

    listarTarefas() {
        console.log("Tarefas:");
        this.#tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }
}

const gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa("Estudar JavaScript");
gerenciador.listarTarefas();

// validação de senhas
class Usuario {
    #senha;

    constructor(senhaInicial) {
        this.#senha = senhaInicial;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual === this.#senha) {
            this.#senha = novaSenha;
            console.log("Senha alterada com sucesso!");
        } else {
            console.log("Senha atual incorreta!");
        }
    }
}

const usuario = new Usuario("1234");
usuario.alterarSenha("1234", "abcd"); 
usuario.alterarSenha("1234", "efgh"); 


