// JSON (JavaScript Object Notation) é um formato de dados baseado em texto que segue a sintaxe de objetos JavaScript, simples, legível e ideal para troca de dados entre sistemas diferentes
// características do JSON
// baseado em texto, pode ser facilmente lido por humanos e máquinas
// estruturado, usa pares de chave-valor e arrays
// independente de linguagem, embora tenha raízes no JavaScript, pode ser usado em outras linguagens

// exemplo de JSON
// {
//     nome: "João",
//     idade: 25,
//     habilidades: ["JavaScript", "Python", "SQL"],
//     endereco: {
//         cidade: "São Paulo",
//         estado: "SP",
//     },
// };

// manipulando JSON no JavaScript
// convertendo objetos para JSON
// use JSON.stringify() para converter um objeto JavaScript para uma string JSON
const objeto = {
    nome: "João",
    idade: 25,
};

const jsonStr = JSON.stringify(objeto);
console.log(jsonStr);

// convertendo JSON para um objeto JavaScript
// use JSON.parse() para converter uma string JSON para um objeto JavaScript
const json = '{"nome":"João","idade":25}';
const novoObjeto = JSON.parse(json);
console.log(novoObjeto.nome); 

// estrutura do JSON
// pares de chave-valor
// cada entrada é formada por uma chave (string) e um valor
// {
//    "chave": "valor"
// }

// tipos de dados permitidos
// strings => "texto"
// números => 123 ou 12.34
// booleanos => true ou false
// Nulo => null
// arrays => [1, 2, 3]
// objetos => {nome: "João", idade: 25}

// valide o JSON, use ferramentas online para validar seu JSON e evitar erros
// atenção ao JSON.parse(), certifique que a string JSON é válida antes de convertê-la para um objeto
// use JSON para configurações, é ideal para armazenar configurações, dados de APIs e estruturações simples de dados
