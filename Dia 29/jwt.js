const jwt = require("jsonwebtoken");

// gerando um JWT
const payload = {
    id: 123,
    username: "joao",
    role: "admin",
};

const secretKey = "minha_chave_secreta";

const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Token JWT:", token);

// validando um JWT
const tokenRecebido = token;
try {
    const dados = jwt.verify(tokenRecebido, secretKey);
    console.log("Token válido:", dados);
} catch (error) {
    console.error("Token inválido:", error.message);
}
