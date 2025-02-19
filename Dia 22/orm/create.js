const Usuario = require("./Usuario");

async function criarUsuarios(nome, email, idade) {
    try {
        await Usuario.create({
            nome,
            email,
            idade,
        });
        console.log("Usuário criado com sucesso!");
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
    }
}

module.exports = { criarUsuarios };
