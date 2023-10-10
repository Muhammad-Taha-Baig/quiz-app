const questions = [
    {
        'question': 'What is the preferred way for adding a background color in HTML?',
        'a': '<body background="yellow">',
        'b': '<background>yellow</background>',
        'c': '<body style="background-color:yellow">',
        'd': '<background color="yellow">text<background>',
        'correct': 'c'
    },
    {
        'question': ' Which of the following JavaScript cannot do?',
        'a': 'JavaScript can react to events',
        'b': 'JavaScript can manipulate HTML elements',
        'c': 'JavaScript can be use to validate data',
        'd': 'All of the Above',
        'correct': 'd'
    },
    {
        'question': 'Which is not a property of attribute Behaviour of <Marquee> tag?',
        'a': 'alternate',
        'b': 'blur',
        'c': 'scroll',
        'd': 'slide',
        'correct': 'b'
    }
]

const questionBox = document.querySelector(".question-box");
const optionInputs = document.querySelectorAll(".options");
let total = questions.length;
let indexValue = 0;
let right = 0,
    wrong = 0;

const loadQuestion = () => {

    if (indexValue === total) {
        return endQuiz();
    } 

    if (indexValue === 0) {
        document.querySelector(".prev-btn").classList.remove('active');
    }
    else {
        document.querySelector(".prev-btn").classList.add('active');

    }
    
    const questionsData = questions[indexValue];
    questionBox.innerText = `${indexValue + 1}. ${questionsData.question}`;
    optionInputs[0].nextElementSibling.innerText = questionsData.a;
    optionInputs[1].nextElementSibling.innerText = questionsData.b;
    optionInputs[2].nextElementSibling.innerText = questionsData.c;
    optionInputs[3].nextElementSibling.innerText = questionsData.d;

    
}

const submitQuiz = () => {
    const questionsData = questions[indexValue];
    const checkAns = getAnswer();
    reset();
    if (checkAns === questionsData.correct) {
        right++;
    } 
    else {
        wrong++;
    }

    indexValue++;
    loadQuestion();
}

const getAnswer = () => {
    let result;
    optionInputs.forEach(
        (inputs) => {
            if (inputs.checked) {
                result = inputs.value;
            }
        }
    )
    return result;
}

const reset = () => {
    optionInputs.forEach(
        (inputs) => {
            inputs.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector(".quiz-container").innerHTML = `
    <h1 style="text-align:center; padding: 1rem;">Thank You For Playing the Quiz</h1>
    <h2 style="text-align:center; padding: 1rem;">${right} / ${total}</h2>
    `
}

const backQuiz = () => {
    if (indexValue === 0) {
        return loadQuestion();
    } 
    indexValue--;
    loadQuestion();
}

// Function Call
loadQuestion();