const questions = [
    {
        question:"Which computer program converts assembly language to machine language ?",
        answer:[
        {text:"Interpreter",correct:false},
        {text:"Compiler",correct:false},
        {text:"Assembler",correct:true},
        {text:"Comparator",correct:false},
        ]
    },
    {

        question:"Who is the father of computer?",
        answer:[
        {text:"Charlie Babbage",correct:false},
        {text:"Dennis Ritchie",correct:false},
        {text:"Ken Thompson",correct:false},
        {text:"Charles Babbage",correct:true},
        ]
    },
    {

        question:"Which part of the computer is the brain of computer?",
        answer:[
        {text:"Random Access Memory",correct:false},
        {text:"Central Processing Unit",correct:true},
        {text:"Read Only Memory",correct:false},
        {text:"Hard Disk",correct:false},
        ]
    },
    {

        question:"Which of the following is a programming language?",
        answer:[
        {text:"HTTP",correct:false},
        {text:"HTML",correct:true},
        {text:"HPML",correct:false},
        {text:"FTP",correct:false},
        ]
    },

    {
        question:"A computer use which type of number system to calculate and to store data",
        answer:[
        {text:"Decimal",correct:false},
        {text:"Octal",correct:false},
        {text:"Binary",correct:true},
        {text:"Hexadecimal",correct:false},
        ]
    },
    {

        question:" Which key of the keyboard is mainly used to cancel the program                 ?",
        answer:[
        {text:"Del Key",correct:false},
        {text:"Enter Key",correct:false},
        {text:"Ins Key",correct:false},
        {text:"Esc Key",correct:true},
        ]
    },
    {

        question:"A program that palces programs into main memory and prepares them for execution ?",
        answer:[
        {text:"Linker",correct:false},
        {text:"Assembler",correct:false},
        {text:"Loader",correct:true},
        {text:"Absolute entity",correct:false},
        ]
    },
    {

        question:" Who is the first to develope a programming language               ?",
        answer:[
        {text:"Ada Lovelace",correct:true},
        {text:"Thomas E.Kurtz",correct:false},
        {text:"Adele Goldberg",correct:false},
        {text:"Donald D. Chamberlin",correct:false},
        ]
    },

    {
        question:"The headquarters of intel,a giant computer technology company,is in                     ?",
        answer:[
        {text:"London",correct:false},
        {text:"Tokyo",correct:false},
        {text:"California",correct:true},
        {text:"Praqackfurt",correct:false},
        ]
    },
    {

        question:"A web address is usually know as?",
        answer:[
        {text:"URL",correct:true},
        {text:"UWL",correct:false},
        {text:"WWW",correct:false},
        {text:"UVL",correct:false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+ currentQuestion.question;


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==='true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();



   let state;
   function mode(){
    const modeElement = document.getElementById("mode");

    if(state){
        modeElement.src="light-mode.png";
        state=false;
      }
      else{
        bulbElement.src ="dark-mode.png ";
        state=true;
  
      }

}