const Usuario = require("./Usuario");

async function deletarUsuario(nomeUsuario) {
    try {
        await Usuario.destroy({ where: { nome:  nomeUsuario} });
        console.log("Usuário deletado com sucesso!");
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
    }
}

deletarUsuario("Martin Lynch");
