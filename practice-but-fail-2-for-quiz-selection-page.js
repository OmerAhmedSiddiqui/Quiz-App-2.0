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

appear.style.visibility = "hidden";
python1.style.visibility = "hidden"

function tests(parameter) {

    messageQuizSelectionPage.innerHTML = "Best Of Luck!"

    disapear.style.visibility = "hidden";
    appear.style.visibility = "visible";
    python1.style.visibility = "visible"
    QuizCategories.innerHTML = parameter;

    quizQuetions.innerHTML = "Quetions 1 of 25";
    stopwatch.style.visibility = "visible"
    startTimer()
    nextQuiz()

    if (parameter === 'Python') {
        i = 0;
        console.log(i)
    }
    else if (parameter === 'Module-1 Exam') {
        i = 4
        console.log(i)

    }
    else if (parameter === 'CCO') {
        i = 8
        console.log(i)

    }
    else if (parameter === 'Web and App Crash Course') {
        i = 12
        console.log(i)

    }
    else if (parameter === 'Web & App Development(Madaris)') {
        i = 16
        console.log(i)

    }
    else if (parameter === 'Web And Mobile Hybrid App Develpment') {
        i = 20
        console.log(i)

    }


    return i;

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


    },
    {
        quetion: "Q2 :  Which operator has higher precedence in the following list",
        answer1: "% (Modulus)",
        answer2: " & (BitWise AND) ",
        answer3: " ** (Exponent)",
        answer4: " > (Comparison)",


    },
    {
        quetion: "Q3 :Python is designed by",
        answer1: "Guido van Rossum",
        answer2: "James Gosling",
        answer3: "Dennis Ritchie",
        answer4: "Google",


    },
    {
        quetion: "Q4 :Python first appeared in",
        answer1: "January 1982",
        answer2: "February 1991",
        answer3: " December 1987",
        answer4: " July 2001",


    },


    // // module 1


    // {
    //     quetion: "Q1 : Who is your favourite Programer ",
    //     answer1: "Omer",
    //     answer2: "Ahmed",
    //     answer3: " Siddiqui",
    //     answer4: " Omer Ahmed Siddiqui",


    // },
    // {
    //     quetion: "Q2 : Who is your favourite Coder ",
    //     answer1: "Omer Ahmed Siddiqui",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "Both of them ",
    //     answer4: " None of them",


    // },

    // {
    //     quetion: "Q3 : Who will be fututer best Coder ",
    //     answer1: "Omer Ahmed ",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "captainOAS ",
    //     answer4: " All of them",


    // },

    // {
    //     quetion: "Q4 : Who is this App Coder ",
    //     answer1: "Omer  ",
    //     answer2: "Omer Ahmed ",
    //     answer3: "Omer Ahmed Siddiqui ",
    //     answer4: " All of them",


    // },



    // // CC0

    // {
    //     quetion: "Q1 : Who is your favourite Programer ",
    //     answer1: "Omer",
    //     answer2: "Ahmed",
    //     answer3: " Siddiqui",
    //     answer4: " Omer Ahmed Siddiqui",


    // },
    // {
    //     quetion: "Q2 : Who is your favourite Coder ",
    //     answer1: "Omer Ahmed Siddiqui",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "Both of them ",
    //     answer4: " None of them",


    // },

    // {
    //     quetion: "Q3 : Who will be fututer best Coder ",
    //     answer1: "Omer Ahmed ",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "captainOAS",
    //     answer4: " All of them",


    // },

    // {
    //     quetion: "Q4 : Who is this App Coder ",
    //     answer1: "Omer  ",
    //     answer2: "Omer Ahmed ",
    //     answer3: "Omer Ahmed Siddiqui ",
    //     answer4: " All of them",


    // },
    // //    web and app crash corse
    // {
    //     quetion: "Q1 : Who is your favourite Programer ",
    //     answer1: "Omer",
    //     answer2: "Ahmed",
    //     answer3: " Siddiqui",
    //     answer4: " Omer Ahmed Siddiqui",


    // },
    // {
    //     quetion: "Q2 : Who is your favourite Coder ",
    //     answer1: "Omer Ahmed Siddiqui",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "Both of them ",
    //     answer4: " None of them",


    // },

    // {
    //     quetion: "Q3 : Who will be fututer best Coder ",
    //     answer1: "Omer Ahmed ",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "captainOAS ",
    //     answer4: " All of them",


    // },

    // {
    //     quetion: "Q4 : Who is this App Coder ",
    //     answer1: "Omer  ",
    //     answer2: "Omer Ahmed ",
    //     answer3: "Omer Ahmed Siddiqui ",
    //     answer4: " All of them",


    // },


    // // Web & App Development(Madaris)
    // {
    //     quetion: "Q1 : Who is your favourite Programer ",
    //     answer1: "Omer",
    //     answer2: "Ahmed",
    //     answer3: " Siddiqui",
    //     answer4: " Omer Ahmed Siddiqui",


    // },
    // {
    //     quetion: "Q2 : Who is your favourite Coder ",
    //     answer1: "Omer Ahmed Siddiqui",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "Both of them ",
    //     answer4: " None of them",


    // },

    // {
    //     quetion: "Q3 : Who will be fututer best Coder ",
    //     answer1: "Omer Ahmed ",
    //     answer2: "Omer Ahmed Siddiqui",
    //     answer3: "captainOAS",
    //     answer4: " All of them",


    // },

    // {
    //     quetion: "Q4 : Who is this App Coder ",
    //     answer1: "Omer  ",
    //     answer2: "Omer Ahmed ",
    //     answer3: "Omer Ahmed Siddiqui ",
    //     answer4: " All of them",


    // },
    // // Web And Mobile Hybrid App Develpment

]
var resultForI =  tests();
console.log(resultForI)
var j = 0
console.log(j)
function nextQuiz() {

    quetion.innerHTML = quetionAnswers[j].quetion;
    answer1.innerHTML = " <input type='radio' class='input' >" + quetionAnswers[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' >" + quetionAnswers[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' >" + quetionAnswers[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' >" + quetionAnswers[j].answer4;
    j = j + 1;




}