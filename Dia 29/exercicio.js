// 3. **Simule um fluxo de autenticação:**
//     - Crie uma função que gera um token ao validar credenciais e outra que valida esse token em requisições subsequentes.
// 4. **Implemente expiração de tokens:**
//     - Teste o comportamento de um token expirado.

const jwt = require("jsonwebtoken");

function gerarToken(payload, secretKey, expireTime) {
    const token = jwt.sign(payload, secretKey, { expiresIn: expireTime });
    return token;
}

function validarToken(tokenRecebido, secretKey) {
    try {
        const dados = jwt.verify(tokenRecebido, secretKey);
        console.log("Token válido:", dados);
    } catch (error) {
        console.error("Token inválido:", error.message);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
    const payload = { id: 123, username: "joao", role: "admin" };
    const secretKey = "minha_chave_secreta";
    const expiresIn = "3000";
    let token = gerarToken(payload, secretKey, expiresIn);
    await sleep(2000);
    validarToken(token, secretKey);
}

main();
