const Usuario = require("./Usuario");
const { Sequelize } = require("sequelize");

async function listarUsuarios() {
    try {
        return await Usuario.findAll();
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
    }
}

module.exports = {listarUsuarios}
