
var messageQuizSelectionPage = document.querySelector("#message-quiz-selection-page");
var retriefItem = JSON.parse(localStorage.getItem('userdetail'));
messageQuizSelectionPage.innerHTML = "Welcome , " + retriefItem.username





var quetion = document.querySelector("#quetion");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var disapear = document.querySelector("#disapear");
var appear = document.querySelector("#appear");
var python1 = document.querySelector("#python1");
var stopwatch = document.querySelector("#stopwatch");
var answers = document.querySelector("#answers");
var answer1FromArray = document.querySelector("#answer1FromArray");
var answer2FromArray = document.querySelector("#answer2FromArray");
var answer3FromArray = document.querySelector("#answer3FromArray");
var answer4FromArray = document.querySelector("#answer4FromArray");

appear.style.visibility = "hidden";
python1.style.visibility = "hidden"



function tests(parameter) {

    messageQuizSelectionPage.innerHTML = "Best Of Luck!"

    disapear.style.visibility = "hidden";
    appear.style.visibility = "visible";
    python1.style.visibility = "visible"
    QuizCategories.innerHTML = parameter;

    quizQuetions.innerHTML = "Quetions 1 of 4";
    stopwatch.style.visibility = "visible"


    if (parameter === 'Python') {
        i = 0;
        console.log(i)
        j = 4
    }
    else if (parameter === 'Module-1 Exam') {
        i = 4
        j = 8

        console.log(i)

    }
    else if (parameter === 'CCO') {
        i = 8
        j = 12

        console.log(i)

    }
    else if (parameter === 'Web and App Crash Course') {
        i = 12
        j = 16
        console.log(i)

    }
    else if (parameter === 'Web & App Development(Madaris)') {
        i = 16
        j = 20
        console.log(i)

    }
    else if (parameter === 'Web And Mobile Hybrid App Develpment') {
        i = 20
        j = 24

        console.log(i)

    }
    startTimer()
    nextQuiz(i, j)


}





var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
stopwatch.style.visibility = "hidden"
function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        stopwatch.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);

    }
    //   if (sec === 30) {
    //         result()
    //     }
}


function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

var quetionAnswers = [
    {
        quetion: "Q1 : Python filename extensions is/are",

        answer1: ".py",
        answer2: ".pyi",
        answer3: ".pyc and .pyd",
        answer4: "All the above",
        corectAnswer: "answer4"



    },
    {
        quetion: "Q2 :  Which operator has higher precedence in the following list",
        answer1: "% (Modulus)",
        answer2: " & (BitWise AND) ",
        answer3: " ** (Exponent)",
        answer4: " > (Comparison)",
        corectAnswer: "answer3"



    },
    {
        quetion: "Q3 :Python is designed by",
        answer1: "Guido van Rossum",
        answer2: "James Gosling",
        answer3: "Dennis Ritchie",
        answer4: "Google",
        corectAnswer: "answer1"


    },
    {
        quetion: "Q4 :Python first appeared in",
        answer1: "January 1982",
        answer2: "February 1991",
        answer3: " December 1987",
        answer4: " July 2001",
        corectAnswer: "answer2"


    },


    // module 1


    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",
        corectAnswer: "answer4"


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",
        corectAnswer: "answer3"


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS ",
        answer4: " All of them",
        corectAnswer: "answer4"


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",
        corectAnswer: "answer4"


    },



    // CC0

    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",
        corectAnswer: "answer4"


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",
        corectAnswer: "answer3"


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS",
        answer4: " All of them",
        corectAnswer: "answer4"


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",

        corectAnswer: "answer4"

    },
    //    web and app crash corse
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",
        corectAnswer: "answer4"


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",
        corectAnswer: "answer3"


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS ",
        answer4: " All of them",
        corectAnswer: "answer4"


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",
        corectAnswer: "answer4"


    },


    // Web & App Development(Madaris)
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",
        corectAnswer: "answer4"


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",
        corectAnswer: "answer3"


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS",
        answer4: " All of them",

        corectAnswer: "answer4"

    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",
        corectAnswer: "answer4"


    },
    // Web And Mobile Hybrid App Develpment
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",

        corectAnswer: "answer4"

    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",
        corectAnswer: "answer3"


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS",
        answer4: " All of them",
        corectAnswer: "answer4"


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",
        corectAnswer: "answer4"


    },

]


var ValueZ = null;
var ValueJ = null;

var x = 1

function nextQuiz(parameter1, parameter2) {
    if (ValueJ == null && parameter1 != undefined && ValueZ == null && parameter1 != undefined) {
        ValueJ = parameter1;
        ValueZ = parameter2
    }
    var j = parameter1;
    var z = parameter2
    if (parameter1 == undefined && parameter2 == undefined) {
        j = ValueJ;
        z = ValueZ
    }

    quetion.innerHTML = quetionAnswers[j].quetion;

    answer1.innerHTML = " <input type='radio' class='input' name='answers' value='answer1' onclick='handleClick(this)' id='answer1FromArray'>" + quetionAnswers[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' name='answers' value='answer2' onclick='handleClick(this)' id='answer2FromArray'>" + quetionAnswers[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' name='answers' value='answer3' onclick='handleClick(this)' id='answer3FromArray'>" + quetionAnswers[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' name='answers' value='answer4' onclick='handleClick(this)' id='answer4FromArray'> " + quetionAnswers[j].answer4;
    quizQuetions.innerHTML = "Quetions " + x + " out of 4";
    x = x + 1
    if (j === z) {
        report()
    }

    ValueJ += 1;

}

var o = 0;
var correct = 0;
var wrong = 0
var currentValue = 0;
function handleClick(myRadio) {
    currentValue = myRadio.value;
    console.log(currentValue)
    console.log(quetionAnswers[o].corectAnswer)
    if (currentValue === 'answer1' && quetionAnswers[o].corectAnswer === 'answer1' || currentValue === 'answer2' && quetionAnswers[o].corectAnswer === 'answer2' || currentValue === 'answer3' && quetionAnswers[o].corectAnswer === 'answer3' || currentValue === 'answer4' && quetionAnswers[o].corectAnswer === 'answer4') {
        correct = correct + 1

        console.log("corect" + correct)
    }
    else {
        wrong = wrong + 1
        console.log("wrong" + wrong)
    }
    o = o + 1

    // report()
}








//               results
var totalCorrect = document.querySelector("#correct");
var totalWrong = document.querySelector("#wrong");
var result = document.querySelector("#result-container");

var result = document.querySelector("#result-container");
result.style.visibility = "hidden"



var  totalcorrect1 = null
 var totalwrong1 = null

function report() {
    // if (totalcorrect1 == null && b != undefined && totalwrong1 == null && c != undefined) {
    //     totalcorrect1 = b;
    //     totalwrong1 = c
    // }
    // var n = parameter1;
    // var p  = parameter2
    // if (b == undefined && c == undefined) {
    //     n = totalcorrect1;
    //     p = totalwrong1
    // }
    appear.style.visibility = "hidden";
    python1.style.visibility = "hidden"
    result.style.visibility = "visible"
    stopwatch.style.visibility = "hidden"
    totalCorrect.innerHTML = "Total Correct : "+ correct;
    totalWrong.innerHTML = "Total Wrong : "+ wrong;
    console.log(correct, wrong);
    
}