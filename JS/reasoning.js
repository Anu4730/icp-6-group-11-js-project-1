const questions =[
    {
        question: "Look at this series:2,1,(1/2),(1/4),...What number should come next?",
        answer:[
            {text:"(1/3)",correct:false},
            {text:"(1/8)",correct:true},
            {text:"(2/8)",correct:false},
            {text:"(1/16)",correct:false},
        ]
    },
    {
        question: "Look at this series:53,53,40,40,27,27,...What number should come next?",
        answer:[
            {text:"12",correct:false},
            {text:"27",correct:false},
            {text:"14",correct:true},
            {text:"53",correct:false},
        ]
    },
    {
        question: "SCD,TEF,UGH,__,WKL",
        answer:[
            {text:"CMN",correct:false},
            {text:"UJI",correct:false},
            {text:"VIJ",correct:true},
            {text:"IJT",correct:false},
        ]
    },
    {
        question: "CNM,EOO,GQQ,__,KUU",
        answer:[
            {text:"GRR",correct:false},
            {text:"GSS",correct:false},
            {text:"ITT",correct:false},
            {text:"ISS",correct:true},
        ]
    },
    {
        question: "Which word does NOT belongs with the others?",
        answer:[
            {text:"parsley",correct:false},
            {text:"basil",correct:false},
            {text:"dill",correct:false},
            {text:"mayonnaise",correct:true},
        ]
    },
    {
        question: "Which word does NOT belongs with the others?",
        answer:[
            {text:"tyre",correct:false},
            {text:"steering wheel",correct:false},
            {text:"engine",correct:false},
            {text:"car",correct:true},
        ]
    },
    {
        question: "FAG,GAF,HAI,IAH,__",
        answer:[
            {text:"JAK",correct:true},
            {text:"KLM",correct:false},
            {text:"HAK",correct:false},
            {text:"JAI",correct:false},
        ]
    },
    {
        question: "Look at this series:53,53,40,40,27,27,...What number should come next?",
        answer:[
            {text:"12",correct:false},
            {text:"27",correct:false},
            {text:"14",correct:true},
            {text:"53",correct:false},
        ]
    },
    {
        question: "Look at this series:31,29,40,24,22,17,...What number should come next?",
        answer:[
            {text:"15",correct:true},
            {text:"14",correct:false},
            {text:"13",correct:false},
            {text:"12",correct:false},
        ]
    },
    {
        question: "Which is NOT belong with others?",
        answer:[
            {text:"unimportant",correct:false},
            {text:"trivial",correct:false},
            {text:"insignificant",correct:false},
            {text:"familiar",correct:true},
        ]
    }
];

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