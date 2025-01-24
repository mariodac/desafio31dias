// No javascript para trabalhar com strings usamos aspas simples ou duplas e crase
// Aspas simples
let nome = "João";
// Aspas duplas
let sobrenome = "Silva";
// Template literals (crase)
let nomeCompleto = `Olá ${nome}  ${sobrenome}`;

// operações com strings

// concatenar strings
let nickName = "Ana";
let saudacao = "Olá, " + nickName + "!";
let saudacao2 = `Olá, ${nickName}!`;
console.log(saudacao);
console.log(saudacao2);

// acessando caracteres
console.log(saudacao[0]);
console.log(saudacao[saudacao.length - 1]);

// obter tamanho da string
console.log(saudacao.length);

// métodos uteis para manipular strings

// Transforma tudo em maiúsculas -> toUpperCase()
console.log(saudacao.toUpperCase());

// Transforma tudo em minúsculas -> toLowerCase()
console.log(saudacao.toLowerCase());

// Remove espaços do início e do fim -> trim()
console.log("  texto  ".trim());

// Verifica se contém um texto específico -> includes()
let str_includes = "Script"
console.log("JavaScript".includes(str_includes));
if ("JavaScript".includes(str_includes)) {
    console.log("Palavra contém Script");
} else {
    console.log("Palavra não contém Script");
}

// Verifica se começa com um texto -> startsWith()
let starts = "Java"
console.log("JavaScript".startsWith(starts));
if ("JavaScript".startsWith(starts)) {
    console.log("Palavra começa com Java");
} else {
    console.log("Palavra não começa com Java");
}

// Verifica se termina com um texto -> endsWith()
let ends = "Script"
console.log("JavaScript".endsWith(ends));
if ("JavaScript".endsWith(ends)) {
    console.log("Palavra termina com Script");
} else {
    console.log("Palavra não termina com Script");}

// Extrai uma parte da string -> slice()
console.log("JavaScript".slice(0, 4));

// Substitui uma parte da string -> replace()
console.log("Olá, João".replace("João", "Ana"));

// string são imutáveis
// não pode alterar diretamente um caractere de uma string
let texto = "Olá";
texto[0] = "A";  // Não funciona
console.log(texto);

// use métodos encadeados para manipulação eficiente
let frase = "  Olá, mundo!  ";
console.log(frase.trim().toUpperCase());