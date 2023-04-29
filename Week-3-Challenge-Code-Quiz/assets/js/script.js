const startButton = document.getElementById("start");
var currentQuestion = 0;


startButton.addEventListener("click", function() {
    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = "block";
        
    }
    for (let i = 0; i < answers.length; i++) {
        answers[i].style.display = "block";
    }
});

const question1 = {
    question: "1. What is JavaScript?",
    answers: ["A dynamic programming language that's used for web development, in web applications.", "A programming language used to style web applications.", "A programming language add on that only helps with functionality.", "A programming language that fully automates script writing."],
    correctAnswer: 0
}


const question2 =  {
    question: "2. Which one of the following allows a user to create a variable which can change definitions?",
    answers: ["allow", "const", "var", "this"],
    correctAnswer: 2
}


const question3 =  {
    question: "3. How would you make an alert box using JavaScript?",
    answers: ["alert", "alertbox", "display", "bigbox"],
    correctAnswer: 0
}


const question4 =  {
    question: "4. How would you add a comment/note in JavaScript without using ctrl + /?",
    answers: ["**", "// before and after your comment/note.", "!*/", "quotation marks"],
    correctAnswer: 1
}


const question5 =  {
    question: "5. Which symbol is used when creating an array?",
    answers: ["single quotes", "()", "{}", "[]"],
    correctAnswer: 3
}

const questions = [question1, question2, question3, quesiton4, question5]



// function showQuestions() {
//         var questionContainer = document.getElementByClass("questionContainer")
//         var answers = document.getElementByClass("answers");
//         var visibleQuestion = questions[currentQuestion];
//         questions[i].style.display = "block";
//         for (let i = 0; i < questions.length; i++) {

// }
// }

function showQuestion(question, currentQuestion) {
    var questionContainer = document.getElementByClass("questionContainer");
    questionContainer.innerHTML = "<h2>" + question[currentQuestion];
    var answerList = ",ul>";
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        answerList = answerList + "<li><button onclick = [checkQuestion]>" + questions[currentQuestion].answer[i] + "</button></li>"
    }
    answerList = answerList + "</ul>"
    questionContainer.innerHTML = questionContainer.innerHTML = answerList;
}
<div class = "questionContainer">
    
</div>