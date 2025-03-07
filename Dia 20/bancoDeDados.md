# 🌟 Bem-vindo ao mundo dos Bancos de Dados!

Os bancos de dados são uma das partes mais essenciais de qualquer sistema moderno. Eles armazenam, organizam e disponibilizam informações para que aplicações possam acessá-las e manipulá-las eficientemente. Vamos explorar esse universo e aprender como criar a base sólida para seus projetos! 🚀

##  📌O que é um Banco de Dados?

Um banco de dados é um sistema usado para armazenar, gerenciar e acessar informações. Ele é projetado para lidar com grandes volumes de dados, oferecendo formas eficientes de buscar e manipular essas informações.

💡 Exemplos do dia a dia:

- Redes sociais: Armazenam seus posts, fotos, mensagens e curtidas
- Lojas virtuais: Guardam informação sobre produtos, pedidos e clientes
- Bancos: Controlam transações financeiras e saldos de contas

## 📚 Tipos de Bancos de Dados

Existem diferentes tipos de bancos de dados, cada um com suas características especificas:

1. **Relacional:**
    - Organizam dados em tabelas (linhas e colunas)
    - Usam **SQL** (Structured Query Language) para manipulação de dados
    - Exemplos: MySQL, PostgreSQL, SQL Server 

2. **Nao-relacional (NoSQL):**
    - Usam estruturas flexíveis como documentos, grafos ou chave-valor
    - Ideais para grandes volumes de dados ou sistemas em tempo real
    - Exemplos: MongoDB, Firebase, Redis

## 🔍 Introdução ao SQL

O **SQL** (Structured Query Language) é a linguagem padrão usada para manipular bancos de dados relacionais. Ele permite **criar**, **consultar**, **atualizar** e **excluir** informações.

### 💡Principais categorias de comandos SQL:

1. **DDL (Data Definition Language)**: Usado para definir a estrutura do banco de dados (tabelas, colunas, etc.).
2. **DML (Data Manipulation Language)**: Usado para manipular dados (inserir, consultar, atualizar e deletar).
3. **DCL (Data Control Language)**: Usado para controlar permissões de acesso.

Hoje, vamos focar no **DDL**.

## ⚙️ Rodando PostgreSQL no Docker

Para seguir a prática, vamos rodar um banco de dados PostgreeSQL usando o Docker.

1. **Certifique-se de ter o Docker instalado**:
    - [Baixe o Docker Desktop](https://www.docker.com/products/docker-desktop/) e instale no seu sistema.

2. **Execute o comando abaixo para iniciar um container PostgreSQL:**

```powershell
docker run --name desafio-postgres -e POSTGRES_PASSWORD=senha123 -p 5432:5432 -d postgres
```

- `--name desafio-postgree`: Dá um nome ao container.
- `-e POSTGRES_PASSWORD=senha123`: Define a senha para o usuário `postgres`. 
- `-p 5432:5432`: Mapeia a porta 5432 do container para a porta 5432 do host.	
- `-d postgres`: Especifica a imagem do PostgreSQL.

3. **Conecte-se ao banco**:
    - Use uma ferramenta como **[DBeaver](https://dbeaver.io/download/)** ou **[BeekeperStudio](https://www.beekeeperstudio.io/get)**
    - Host: `localhost`, Porta: `5432`, Usuário: `postgres`, Senha: `senha123`

## 🛠️ DDL na Prática

### Criando uma Banco de Dados

```sql
CREATE DATABASE desafio;
```

💡 **Explicação**: Cria um banco de dados chamado `desafio`

### Criando uma Tabela

```sql
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_nascimento DATE
);
```

💡 **Explicação**:
- `id SERIAL PRIMARY KEY`: Cria uma chave primária com numeração automática.
- `nome VARCHAR(100)`: Coluna para armazenar nomes, com limite de 100 caracteres.
- `email UNIQUE`: Garante que os e-mails sejam únicos.
- `data_nascimento DATE`: Coluna para armazenar datas de nascimento.

## Exemplo de Manipulação de Dados (DML)

### Inserindo Dados na Tabela

```sql
INSERT INTO usuarios (nome, email, data_nascimento)
VALUES ('João Silva', 'joao@email.com', '1990-05-15'),
       ('Maria Santos', 'maria@email.com', '1985-10-20');
```

💡 **Explicação**: Adiciona dois registros à tabela `usuarios`.

## Consultando Dados da Tabela

```sql	
SELECT * FROM usuarios;
```

💡 **Explicação**: Retorna todos os registros da tabela `usuarios`.
📌 **Saída esperada**:

| id | nome | email | data_nascimento |
| --- | --- | --- | --- |
| 1 | João Silva | joao@email.com | 1990-05-15 |
| 2 | Maria Santos | maria@email.com | 1985-10-20 |

## Deletando uma Tabela

```sql
DROP TABLE usuarios;
```

💡 **Explicação**: Remove a tabela `usuarios` (⚠️ cuidado, essa ação é irreversível).

## 🚀 Exercícios Práticos

1. Crie um banco de dados chamado `empresa`.
2. Dentro do banco `empresa`, crie uma tabela chamada `funcionarios` com as seguintes campos:
    - `id` (chave primária, numeração automática)
    - `nome` (texto, obrigatório)
    - `cargo` (texto)
    - `salario` (número decimal)
3. Adicione uma coluna `data_admissao` na tabela `funcionarios`.
4. Insira pelo menos 3 registros na tabela `funcionarios`.
5. Liste os registros usando um comando SELECT.
6. Exclua a tabela `funcionarios` e recrie-a com um campo adicional para `departamento`.

