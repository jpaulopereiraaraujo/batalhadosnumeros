# Batalha dos Números

Este é um jogo de cartas matemático simples para ser rodado no console. O objetivo do jogador é utilizar cartas numeradas e operadores para aproximar ou acertar o resultado de uma operação matemática gerada aleatoriamente.

## Requisitos

- **Node.js** instalado no seu sistema (versão 12 ou superior).
- https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
- https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos#:~:text=Node%20%C3%A9%20um%20executor%20de%20c%C3%B3digo%20JavaScript
- https://nodejs.org/en/download/prebuilt-installer

## Instruções para rodar o jogo

### 1. Clone o repositório ou baixe os arquivos
//TODO Criar o repositório do jogo
Você pode clonar o repositório ou baixar os arquivos do jogo em sua máquina local.

```bash
git clone https://github.com/exemploUser/jogo-de-cartas-matematico.git
```

### 2. Instale as dependências

Na pasta do projeto, abra seu console e execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

> Nota: Não há dependências externas neste projeto, mas o comando acima garante que você tenha tudo configurado.

### 3. Inicie o jogo

Depois de instalar as dependências, você pode rodar o jogo com o seguinte comando:

```bash
node index.js
```

### 4. Como jogar

- A cada rodada, uma operação matemática aleatória será gerada no formato `[a operador b]`, onde `a` e `b` são números entre 1 e 10, e o operador pode ser `+` ou `-`.
- Você verá a sua mão de cartas numeradas e operadores.
- O jogador terá duas opções:
  - Usar uma carta numerada.
  - Usar duas cartas numeradas e um operador.
- O objetivo é acertar ou chegar o mais próximo possível do resultado da operação gerada.
- A pontuação máxima por rodada é 20, e a pontuação será 20 menos o valor absoluto da diferença entre o resultado esperado e o valor que você obteve.

### 5. Pontuação

- Se o jogador acertar o resultado exato da operação, ele ganha **20 pontos**.
- Se o jogador errar, ele ganha **20 menos o valor absoluto da diferença** entre o resultado da operação e o valor obtido com suas cartas.
- O jogo continua até o jogador decidir sair digitando `q`.

### 6. Comandos do jogo

- **1**: Usar uma carta numerada.
- **2**: Usar duas cartas numeradas e um operador.
- **q**: Sair do jogo.

### Exemplo de jogo:

```bash
Sua mão atual é: 3 - 7 + 1
Pontuação atual: 0
Sua operação é: 10 - 5
Escolha: 1 para uma carta numerada, 2 para duas cartas numeradas e um operador, ou q para sair: 1
Escolha uma carta numerada: 3
Faltou 2 para você acertar.
Pontuação atual: 18
```

### 7. Finalizando o jogo

O jogo pode ser finalizado a qualquer momento digitando `q` para sair. A pontuação final será mostrada no console.
