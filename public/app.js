var questions =[ {
    question: 'Q1:What is the full form of HTML',
    option :['Hellow to My Land','Hey Text Msrkup Languge','Hyper Text Makeup Languge ','Hyper Text Marke legver',],
    correctanswer :'Hyper Text Makeup Languge ',
},

{ question: 'Q2:What is the full form of CSS',
option :['Cascading Style Sheets','Cascading Stuyle Sheets','Contact Setting System ','Contact Setting System '],
correctanswer :'Cascading Style Sheets',
}
,

{ question: 'Q3:What is the full form of JS',
option :['JavaScript','Javasupper','JordenShoes ','JordenShoes ',],
correctanswer :'JavaScript',
}

,

{ question:'Q4:JavaScript is --------',
option :['sansetive','not','null ','undefind ',],
correctanswer :'sansetive',
}
]

var indexnumber =0
var marks =0

function counter(e){
    var done = document.getElementById('done')
    var total = document.getElementById('total')
    done.innerHTML = e+1
    total.innerHTML= questions.length

}
function check(e){
    var userans = e.firstChild.nodeValue
    var ans = questions[indexnumber].correctanswer
    var mam = document.getElementById('marks')
    if(ans === userans){
        marks ++
        mam.innerHTML = marks /4 * 100
        console.log(marks)
    }
}

function display(){
    var que = document.getElementById('question')
    que.innerHTML = questions[indexnumber].question
    var main = document.getElementById('options')
    for(var i=0; i<questions[indexnumber].option.length; i++){
        var div =document.createElement('div')
        div.setAttribute('class','da')
        div.setAttribute('class','col-md-6')
        // var radio = document.createElement('')
        var option = document.createElement('button')
        option.setAttribute('class','wa')
        option.setAttribute('onclick','check(this)')
        var btntext = document.createTextNode(questions[indexnumber].option[i])
        option.appendChild(btntext)
        div.appendChild(option)
        main.appendChild(div)
        // main.appendChild(div)

    }
    counter(indexnumber)
}

display()
function next(){
    document.getElementById('options').innerHTML=''
    indexnumber++
    display()
var a = document.getElementById('done').innerHTML


// document.getElementById('submit').style.display= 'none'
// for( i=1; i<a.length; i++){
//     if( a == +a){
//         document.getElementById('next').style.display = 'block'
//     }else if( a == 4){
//         document.getElementById('next').style.display = 'none'
//         document.getElementById('submit').style.display= 'inline-block'
//     }else{}
// }

if(a == 4){
    document.getElementById('next').style.display = 'none'

    document.getElementById('submit').style.display= 'inline-block'

}else{}
}
function timer(){
    var a = document.getElementById('min')
    var b = document.getElementById('sec')
    b.innerHTML --
    if(b.innerHTML == -1){
        a.innerHTML --
        b.innerHTML =59

    }else{}
    if( a.innerHTML == 0 && b.innerHTML == 0 ){
        document.getElementById('main').style.display= 'none'
        document.getElementById('result').style.display= 'inline-block'
    }
}

time =setInterval(timer, 1000)

function submit(){
    document.getElementById('main').style.display ='none'
    document.getElementById('result').style.display ='inline-block'
}