// lendo e exibindo dados de um JSON
const dados = `{
    "nome": "Maria",
    "idade": 30,
    "habilidades": ["HTML", "CSS", "JavaScript"]
  }`;

const usuario = JSON.parse(dados);
console.log(`Nome: ${usuario.nome}`);
console.log(`Habilidades: ${usuario.habilidades.join(", ")}`);

// criando um String JSON
const produto = {
    nome: "Celular",
    preco: 1500,
    disponivel: true,
};

const json = JSON.stringify(produto);
console.log(json);

// consumindo dados de uma API
async function buscarDados() {
    const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );
    const dados = await resposta.json();
    console.log(dados);
}

buscarDados();

// trabalhando com arrays de objetos
const produtos = [
    { nome: "Celular", preco: 1500 },
    { nome: "Notebook", preco: 3000 },
];

const jsonStr = JSON.stringify(produtos);
console.log(jsonStr);
