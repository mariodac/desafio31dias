const Usuario = require("./Usuario");
const { Sequelize } = require("sequelize");

async function listarUsuarios() {
    try {
        const usuarios = await Usuario.findAll({
            where: { idade: { [Sequelize.Op.gt]: 30 } },
        });
        console.log(usuarios);
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
    }
}

listarUsuarios();
