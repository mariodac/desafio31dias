const sequelize = require("./database");
const Usuario = require("./Usuario");
async function sincronizarBanco() {
    try {
        await sequelize.sync({ force: true });
        console.log("Banco de dados sincronizado com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar o banco de dados:", error);
    } 
}

module.exports = { sincronizarBanco };
