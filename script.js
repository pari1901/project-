document.addEventListener('DOMContentLoaded', () => {

    
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote Hamlet?",
            choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        showQuestion();
    });
    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0
        score = 0
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add('hidden');
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        choicesList.innerHTML = "";

        currentQuestion.choices.forEach(choice => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => selectAnswer(choice));
            li.appendChild(button);
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(selectedChoice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedChoice === correctAnswer) {
            score++;
        }

        if (currentQuestionIndex < questions.length - 1) {
            nextBtn.classList.remove('hidden');
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}`;
    }

    function restartQuiz() {
        resultContainer.classList.add('hidden');
        startBtn.classList.remove('hidden');
    }
});
