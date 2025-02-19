const Usuario = require("./Usuario");
const { faker } = require("@faker-js/faker");


async function atualizarUsuario(nomeUsuario) {
    try {
        await Usuario.update({ email: faker.internet.email() }, { where: { nome: nomeUsuario } });
        console.log("Usuário atualizado com sucesso!");
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
    }
}

atualizarUsuario("Martin Lynch");
