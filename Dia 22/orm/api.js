const express = require("express");
const { sincronizarBanco } = require("./sync");
const { criarUsuarios } = require("./create");
const { listarUsuarios } = require("./read");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).json({
        mensagem: "Olá mundo",
    });
});

app.post("/usuarios", async (request, response) => {
    criarUsuarios(request.body.nome, request.body.email, request.body.idade)
        .then(() => {
            response.status(200).json({ mensagem: "Usuário criado" });
        })
        .catch((error) => {
            response.status(500).json(error);
        });
});

app.get("/usuarios", async (request, response) => {
    const usuario = await listarUsuarios();

    response.status(200).json({ usuario });
});

sincronizarBanco().then(() => {
    app.listen(3000, () => {
        console.log("Aplicação rodando");
    });
});
