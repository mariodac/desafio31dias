const Usuario = require("./Usuario");
const { faker } = require("@faker-js/faker");

const usuarios = Array.from({ length: 3 }, () => ({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    idade: Math.floor(Math.random() * 50) + 18,
}));

// console.log(usuarios)

async function criarVariosUsuarios() {
    try {
        await Usuario.bulkCreate(usuarios);
        console.log("Usuários criados com sucesso!");
    } catch (error) {
        console.error("Erro ao criar usuários:", error);
    }
}

criarVariosUsuarios();
