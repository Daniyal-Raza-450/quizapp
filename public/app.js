var obj =[
    {
        question : 'Q1:What is the full form of HTML',
        a:'Hellow to My Land',
        b:'Hey Text Msrkup Languge',
        c:'Hyper Text Makeup Languge ',
        d:'Hyper Text Marke legver',
        ans:'ans1',
    },
    
    
    {question : 'Q2:What is the full form of CSS',
    a:'Cascading Style Sheets',
    b:'Cascading Stuyle Sheets',
    c:'Contact Setting System ',
    d:'Contact Setting System ',
    ans:'ans2',
    
},
{question : 'Q3:What is the full form of JS',
a:'JavaScript',
b:'Javasupper',
c:'JordenShoes ',
d:'JordenShoes ',
ans:'ans3',

}, {question : 'Q4:JavaScript is --------',
a:'sansetive',
b:'not',
c:'null ',
d:'undefind ',
ans:'ans4',
}

]

var question = document.querySelector('.question') 
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')
var submit = document.querySelector('#submit')

var answers= document.querySelectorAll('.answer')

var showScore =document.querySelector('#showScore');


var questionCount =0
var score = 0;





function loadQuestion(){

    var questionlist =obj[questionCount];

    question.innerHTML =questionlist.question;

    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;



}
loadQuestion()



function getCheckAnswer(){
    var answer;
    answers.forEach((curAnswer) => {
        if(curAnswer.checked){
            answer = curAnswer.id
        }

        
    });
    return answer;


}
submit.addEventListener('click',()=>{
    var checkedAnswer =getCheckAnswer()
    console.log(checkedAnswer)

    if(checkedAnswer ===obj[questionCount].ans ){

        score++
    }
    questionCount++;
    if(questionCount <obj.length){
        loadQuestion()
    }else{
        showScore.innerHTML =
        <h3>your scroed {score}/{obj.length} </h3>,
        <button class ='btn' onclick='location.reload()'></button>;

        showScore.classList.remove('score');



    }
});

