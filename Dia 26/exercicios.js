// 1. Reescreva a função abaixo, aplicando o princípio de DRY:

function calcularImposto10(valor) {
    return valor * 0.1;
}

function calcularImposto20(valor) {
    return valor * 0.2;
}

function calcularImposto(valor, porcentagem) {
    return valor * (porcentagem / 100);
}

// 2.Refatore o código a seguir para que as funções sejam menores e mais claras:

function calcularFrete(valor, distancia) {
    const frete = distancia * 2;
    const total = valor + frete;
    console.log(`O frete é: ${frete}`);
    console.log(`O total é: ${total}`);
    return total;
}

function calcularFreteRefatorada(valor, distancia) {
    return valor + distancia * 2;
}

function exibirFreteTotal(frete, total) {
    console.log(`O frete é: ${frete}\nO total é: ${total}`);
}

// 3. Identifique e substitua os "números mágicos" no código abaixo:

if (idade >= 18) {
    console.log("Maior de idade.");
}

const maioridade = 18;

if (idade >= maioridade) {
    console.log("Maior de idade.");
}

// 4. Transforme os comentários ruins em boas práticas no código abaixo:

// Verifica se o usuário é admin
if (usuario.permissao === "admin") {
    console.log("Acesso liberado.");
}

const permissaoAdmin = "admin";
// libera o acesso caso usuário seja admin
if (usuario.permissao === permissaoAdmin) {
    console.log("Acesso liberado.");
}

// 5. Refatore o seguinte código para melhorar os nomes de variáveis:

let x = 100;
let y = 50;
console.log(x - y);

let minuendo = 100;
let subtraendo = 50;
console.log(minuendo - subtraendo);

// 6. Separe as responsabilidades em funções menores:

function processarPedido(pedido) {
    const total = pedido.quantidade * pedido.preco;
    console.log(`Pedido processado: ${total}`);
}

function calcularValorTotalPedido(pedido) {
    return pedido.quantidade * pedido.preco;
}

function exibeValorTotalPedido(total) {
    console.log(`Pedido processado: ${total}`);
}
