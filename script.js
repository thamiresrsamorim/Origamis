// Quiz
const quizData = [
    {
        question: "O origami é uma arte tradicional de qual país?",
        answers: [
            { text: "Japão", correct: true },
            { text: "China", correct: false },
            { text: "Coreia", correct: false },
            { text: "Índia", correct: false }
        ]
    },
    {
        question: "O que é um Tsuru?",
        answers: [
            { text: "Um tipo de pássaro", correct: true },
            { text: "Uma flor", correct: false },
            { text: "Um peixe", correct: false },
            { text: "Uma borboleta", correct: false }
        ]
    },
    {
        question: "O papel utilizado no origami pode ser de qualquer cor?",
        answers: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
        ]
    },
    {
        question: "Origamis são usados apenas para decoração. (Verdadeiro ou Falso)",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "O Tsuru é considerado um símbolo de boa sorte e longevidade. (Verdadeiro ou Falso)",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    }
];

let currentQuiz = 0;
let score = 0;
const quizContainer = document.querySelector('.quiz-container');
const quizResult = document.querySelector('.quiz-result');

function loadQuiz() {
    const currentQuestion = quizData[currentQuiz];
    quizContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        ${currentQuestion.answers.map((answer, index) => `
            <button onclick="selectAnswer(${index})">${answer.text}</button>
        `).join('')}
    `;
}

function selectAnswer(selectedIndex) {
    const correct = quizData[currentQuiz].answers[selectedIndex].correct;
    if (correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = '';
    quizResult.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas. ${score === 5 ? 'Parabéns, você aprendeu todo o conteúdo!' : 'Você pode melhorar!'}`;
    if (score < 5) {
        quizResult.innerHTML += '<br><button onclick="restartQuiz()">Refazer</button>';
    }
}

function restartQuiz() {
    score = 0;
    currentQuiz = 0;
    quizResult.innerHTML = '';
    loadQuiz();
}

// Inicialização do quiz
loadQuiz();

//imagens
function toggleDescription(element) {
    const cardText = element.querySelector('.card-text');
    const allCardTexts = document.querySelectorAll('.card-text');

    allCardTexts.forEach(text => {
        if (text !== cardText) {
            text.style.display = 'none';
        }
    });

    cardText.style.display = cardText.style.display === 'none' || cardText.style.display === '' ? 'block' : 'none';
}

