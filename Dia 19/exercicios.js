// 1. Converta um objeto JavaScript para JSON e exiba a string resultante.
const objeto = {
    nome: "João",
    idade: 25,
    habilidades: ["JavaScript", "Python", "SQL"],
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
    },
};

const jsonStr = JSON.stringify(objeto);
console.log(jsonStr);

// 2. Crie um JSON representando uma lista de tarefas com campos como nome, prioridade e completo.
const tarefas = `{
                    "nome": "Ir para academia",
                    "prioridade": "alta",
                    "completo" : false
                }`;

const tarefasObjeto = JSON.parse(tarefas);
console.log(tarefasObjeto);

function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const jsonString = JSON.stringify({ nome: "João", idade: 25 });
            resolve(jsonString);
        }, 2000);
    });
}

async function exibirUsuario() {
    const usuario = await buscarUsuario();
    const usuarioObjeto = JSON.parse(usuario);
    console.log(
        `Usuário: ${usuarioObjeto.nome}, Idade: ${usuarioObjeto.idade}`
    );
}

exibirUsuario();

// 4. Use JSON.parse() para converter uma string JSON em um objeto e acessar suas propriedades.
const jsonObject = JSON.parse(
    `{ "nome": "Mario", "idade": 29, "casado": false }`
);
console.log(jsonObject);

// 5. Crie um objeto complexo em JavaScript, transforme-o em JSON e, em seguida, converta de volta para um objeto.
const objetoComplexo = {
    nome: "João",
    idade: 25,
    habilidades: ["JavaScript", "Python", "SQL"],
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
    },
};
const objetoString = JSON.stringify(objetoComplexo);
console.log(objetoString);
const novoObjeto = JSON.parse(objetoString)
console.log(novoObjeto);
