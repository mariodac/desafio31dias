const Usuario = require("./Usuario");

async function criarUsuarios() {
    try {
        await Usuario.create({
            nome: "João Campos",
            email: "joao2@email.com",
            idade: 30,
        });
        await Usuario.create({
            nome: "Maria Oliveira",
            email: "maria@email.com",
            idade: 28,
        });
        console.log("Usuários criados com sucesso!");
    } catch (error) {
        console.error("Erro ao criar usuários:", error);
    }
}

criarUsuarios();
