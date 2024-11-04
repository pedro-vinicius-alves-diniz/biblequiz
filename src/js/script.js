// IMPORTAÇÕES
import { perguntas } from "./database.js";


//DECLARAÇÃO DE VARIAVEIS
const containerQuiz = document.getElementById('container-quiz');
const question = document.getElementById('pergunta');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const anwser = document.getElementById('correct')
const containerPosGame = document.getElementById("container-posgame");
const btnAgain = document.getElementById("play-again");
const btnClose = document.getElementById("close")
const spanScore = document.getElementById("score")
var score = 0;
var currentQuestion = 1


//FUNÇÕES
function updateScreen(event) {
    // containerQuiz.style.display = "flex";
    // containerPosGame.style.display = "none";

    console.log('Score: ', score)
    console.log('Rodada: ', currentQuestion)

    var indexQuiz = Math.floor(Math.random() * 46)
    var currentQuiz = perguntas[indexQuiz]

    question.innerHTML = currentQuiz.pergunta;
    option1.innerHTML = currentQuiz.alternativa1;
    option2.innerHTML = currentQuiz.alternativa2;
    option3.innerHTML = currentQuiz.alternativa3;
    option4.innerHTML = currentQuiz.alternativa4;
    anwser.innerHTML = currentQuiz.alternativaCorreta
}

// ALGORITMO DE PONTUAÇÃO
const systemScore = (event) => {
    if (event.target.textContent === anwser.textContent) {
        score += 1
    }

    if (currentQuestion === 10) {
        containerQuiz.style.display = "none";
        containerPosGame.style.display = "flex";
        spanScore.innerHTML = score

    } else {
        currentQuestion += 1
        updateScreen();
    }
}

// ALGORITMO DE TEMPO


// EVENTOS
window.addEventListener('load', updateScreen);

option1.addEventListener('click', systemScore);
option2.addEventListener('click', systemScore);
option3.addEventListener('click', systemScore);
option4.addEventListener('click', systemScore);

btnAgain.addEventListener('click', () => {
    containerQuiz.style.display = "flex";
    containerPosGame.style.display = "none";

    score = 0;
    currentQuestion = 1;
    console.clear();
    updateScreen();
});
btnClose.addEventListener('click', () => {
    window.close()
});

