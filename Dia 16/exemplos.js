// sistema de arquivos
class No {
    constructor(nome) {
        this.nome = nome;
        this.filhos = [];
    }

    adicionarFilho(filho) {
        this.filhos.push(filho);
    }
}

const pastaRaiz = new No("Raiz");
const pastaDocs = new No("Documentos");
const pastaImgs = new No("Imagens");
pastaRaiz.adicionarFilho(pastaDocs);
pastaRaiz.adicionarFilho(pastaImgs);

const pdf = new No("documento.pdf");
const imagem = new No("imagem.jpg");

pastaDocs.adicionarFilho(pdf);
pastaImgs.adicionarFilho(imagem);

console.log(pastaRaiz);

// árvore genealógica
class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.filhos = [];
    }

    adicionarFilho(filho) {
        this.filhos.push(filho);
    }
}

const avo = new Pessoa("João");
const pai = new Pessoa("Carlos");
const filho = new Pessoa("Maria");

avo.adicionarFilho(pai);
pai.adicionarFilho(filho);

console.log(avo);
