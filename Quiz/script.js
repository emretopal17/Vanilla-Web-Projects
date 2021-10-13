const quizData = [
    {
        question: 'How old is Emre ?',
        a: '10',
        b: '17',
        c: '25',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programing language in 2019 ?',
        a: 'java',
        b: 'c',
        c: 'python',
        d: 'javascript',
        correct: 'd'
    }, {
        question: 'Who is the president  pf US ?',
        a: 'Shakira',
        b: 'Donald Trump',
        c: 'ıvan saldano',
        d: 'mihai andrei',
        correct: 'b'
    }, {
        question: 'What does HTML stand for ?',
        a: 'hypetext markup language',
        b: 'cascading style sheet',
        c: 'jason object notation',
        d: 'application programing interface',
        correct: 'a'
    }

]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submitButton');
let answerEls = document.querySelectorAll('.answer');

let currentQuestion = 0;
let answer = undefined;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;


}

submitButton.addEventListener('click', () => {
    //chech the correct answer 
    answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML=`<h2>You answered correctly  at ${score}/ ${quizData.length} questions </h2>
            <button onClick='location.reload()'> Reload </button>`;
        }
    }
})

function getSelected() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
    });
    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    })
}
