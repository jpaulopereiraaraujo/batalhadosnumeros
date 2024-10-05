const readline = require('readline');

// Mão estática do jogador
const userHand = [3, '-', 7, '+', 1];
let score = 0; // Pontuação inicial do jogador
//TODO Criar o objeto das cartas
//TODO criar a função para obtenção aleatória das cartas
//TODO simplificar o código
//TODO separar as funções em outros arquivos

// Função para gerar um número aleatório entre dois valores (min e max, inclusivos)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar a operação aleatória no formato [a operador b]
function generateRandomOperation() {
    let a = getRandomNumber(1, 10);
    let b = getRandomNumber(1, a);  // Garante que b será menor ou igual a a
    let operator = Math.random() < 0.5 ? '+' : '-';  // Escolhe o operador aleatoriamente

    return {
        operation: `${a} ${operator} ${b}`,
        result: eval(`${a} ${operator} ${b}`) // Calcula o resultado
    };
}

// Função para exibir a mão do jogador e a pontuação
function showUserHandAndScore(hand, score) {
    console.log("Sua mão atual é: " + hand.join(' '));
    console.log("Pontuação atual: " + score);
}


// Função para o jogador usar duas cartas numeradas e um operador
function playWithTwoCards(hand, num1, operator, num2) {
    // Verifica se as cartas e o operador estão na mão
    if (hand.includes(num1) && hand.includes(num2) && hand.includes(operator)) {
        return eval(`${num1} ${operator} ${num2}`);
    } else {
        console.log("Cartas ou operador inválidos.");
        return null;
    }
}

// Função para o jogador usar uma única carta numerada
function playWithOneCard(hand, num) {
    if (hand.includes(num)) {
        return num;
    } else {
        console.log("Carta inválida.");
        return null;
    }
}

// Função para comparar o resultado do jogador com a operação aleatória e atualizar a pontuação
function compareResults(playerResult, targetResult) {
    let difference = Math.abs(targetResult - playerResult); // Diferença absoluta

    if (difference === 0) {
        console.log("Exato! Você acertou.");
        score += 20; // Ganha 20 pontos por acertar exatamente
    } else {
        console.log(`Faltou ou excedeu ${difference} para você acertar.`);
        score += (20 - difference); // Ganha 20 menos a diferença absoluta
    }
}

// Função principal do jogo com loop
function startGame() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Gerar operação aleatória
    const randomOperation = generateRandomOperation();
    
    // Exibir a mão do jogador e a pontuação
    showUserHandAndScore(userHand, score);
    console.log("Sua operação é: " + randomOperation.operation);

    // Loop principal
    function gameLoop() {
        rl.question('Escolha: 1 para uma carta numerada, 2 para duas cartas numeradas e um operador, ou q para sair: ', (input) => {
            if (input === 'q') {
                console.log('Obrigado por jogar! Pontuação final: ' + score);
                rl.close();
                return;
            }

            if (input === '1') {
                rl.question('Escolha uma carta numerada: ', (num) => {
                    let playerResult = playWithOneCard(userHand, parseInt(num));
                    if (playerResult !== null) {
                        compareResults(playerResult, randomOperation.result);
                    }
                    showUserHandAndScore(userHand, score); // Exibir novamente a mão e a pontuação
                    gameLoop();
                });
            } else if (input === '2') {
                rl.question('Escolha a primeira carta numerada: ', (num1) => {
                    rl.question('Escolha um operador (+ ou -): ', (operator) => {
                        rl.question('Escolha a segunda carta numerada: ', (num2) => {
                            let playerResult = playWithTwoCards(userHand, parseInt(num1), operator, parseInt(num2));
                            if (playerResult !== null) {
                                compareResults(playerResult, randomOperation.result);
                            }
                            showUserHandAndScore(userHand, score); // Exibir novamente a mão e a pontuação
                            gameLoop();
                        });
                    });
                });
            } else {
                console.log('Entrada inválida. Tente novamente.');
                gameLoop();
            }
        });
    }

    gameLoop();
}

// Iniciar o jogo
startGame();
