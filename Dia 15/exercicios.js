// 1. Implemente uma fila que gerencie o atendimento de clientes em um restaurante.

class Restaurante {
    constructor() {
        this.mesas = [];
    }

    restauranteVazio() {
        return this.mesas.length === 0;
    }

    atenderMesa() {
        if (this.restauranteVazio()) {
            console.log("Restaurante vazio");
            return;
        }
        const mesa = this.mesas.shift();
        console.log(`Mesa ${mesa} foi atendida`);
    }

    enfilaMesa(mesa) {
        this.mesas.push(mesa);
        console.log(`Mesa ${mesa} aguardando atendimento`);
    }

    proximaMesa() {
        return this.restauranteVazio() ? "Restaurante vazio" : this.mesas[0];
    }
}
const restaurante = new Restaurante();
restaurante.enfilaMesa(15);
restaurante.enfilaMesa(10);
restaurante.enfilaMesa(11);
restaurante.enfilaMesa(40);
restaurante.atenderMesa();
console.log(`Próxima mesa ${restaurante.proximaMesa()}`);
restaurante.atenderMesa();
console.log(`Próxima mesa ${restaurante.proximaMesa()}`);

// 2. Crie uma fila que armazene músicas em uma playlist e remova a música quando for tocada.
class Playlist {
    constructor() {
        this.musicas = []
    }

    listaVazia () {
        return this.musicas.length === 0;
    }

    proximaMusica () {
        return this.listaVazia() ? "Playlist vazia" : this.musicas[0]
    }

    novaMusica(musica) {
        this.musicas.push(musica)
        console.log(`Musica ${musica} adicionada a fila da playlist`)
    }

    musicaTocada() {
        if (this.listaVazia()) {
            console.log("Playlist vazia")
            return 
        }
        const musica = this.musicas.shift()
        console.log(`Musica ${musica} foi tocada`)
    }
    
}

const playlist = new Playlist()
playlist.novaMusica("Black Widow")
playlist.novaMusica("You're Next")
playlist.novaMusica("My Happy ending")
playlist.musicaTocada()
console.log(`Próxima música ${playlist.proximaMusica()}`)

// 3. Escreva uma função que use uma fila para simular uma fila de caixa de supermercado.
class CaixaSupermercado {
    constructor () {
        this.clientes = []
    }

    filaVazia() {
        return this.clientes.length === 0
    }

    primeiroNaFila() {
        return this.filaVazia() ? "Sem clientes" : this.clientes[0]
    }

    atenderCliente() {
        if (this.filaVazia()) {
            console.log("Sem clientes")
            return
        }
        const cliente = this.clientes.shift()
        console.log(`Cliente ${cliente} foi atendido`)
    }

    novoCliente(cliente) {
        this.clientes.push(cliente)
        console.log(`Cliente ${cliente} atendido`)
    }
}

const supermercado = new CaixaSupermercado()
supermercado.novoCliente("João")
supermercado.novoCliente("Maria")
supermercado.novoCliente("Pedro")
supermercado.atenderCliente()
console.log(`Próximo cliente ${supermercado.primeiroNaFila()}`)

// 4. Use uma fila para implementar um sistema de envio de mensagens em lote.
class SistemaMensagem {
    constructor() {
        this.mensagems = []
    }

    filaVazia() {
        return this.mensagems.length === 0
    }    

    proximaMensagem() { 
        return this.filaVazia() ? "Sem mensagens" : this.mensagems[0]
    }

    novaMensagem(mensagem) {
        this.mensagems.push(mensagem)
        console.log(`Mensagem ${mensagem} foi enviada`)
    }

    mensagemEnviada() {
        if (this.filaVazia()) {
            console.log("Sem mensagens")
            return
        }
        const mensagem = this.mensagems.shift()
        console.log(`Mensagem ${mensagem} foi enviada`)
    }
}

const sistema = new SistemaMensagem()
sistema.novaMensagem("Olá mundo")
sistema.novaMensagem("Como vai")
sistema.novaMensagem("Abre o chamado")
sistema.mensagemEnviada()
console.log(`Próxima mensagem ${sistema.proximaMensagem()}`)

// 5. Crie uma fila que armazene processos pendentes e os execute na ordem de chegada.
class Gerenciador {
    constructor() {
        this.processos = []
    }

    filaVazia() {
        return this.processos.length === 0
    }

    proximoProcesso() {
        return this.filaVazia() ? "Sem processos" : this.processos[0]
    }

    novoProcesso(processo) {
        this.processos.push(processo)
        console.log(`Processo ${processo} foi adicionado`)
    }

    executarProcesso() {
        if (this.filaVazia()) {
            console.log("Sem processos")
            return
        }
        const processo = this.processos.shift()
        console.log(`Processo ${processo} foi executado`)
    }
}

const gerenciador = new Gerenciador()
gerenciador.novoProcesso("Google Chrome")
gerenciador.novoProcesso("Adobe Photoshop")
gerenciador.novoProcesso("explorer")
gerenciador.executarProcesso()
console.log(`Próximo processo ${gerenciador.proximoProcesso()}`)