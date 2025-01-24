// formatando texto
let nome = "   ana silva   ";
console.log(nome.trim().toUpperCase());

// validando strings
let email = "usuario@gmail.com";
if (email.includes("@")) {
    console.log("Email válido!");
} else {
    console.log("Email inválido!");
}

// cortando partes de um texto
let frase = "Eu amo programação!";
let palavra = frase.slice(6, 16);
console.log(palavra);

// verificando começo e fim de uma string
let site = "www.exemplo.com";
console.log(site.startsWith("www")); // Saída: true
console.log(site.endsWith(".com")); // Saída: true
