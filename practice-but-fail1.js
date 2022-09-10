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
var button = document.querySelector("#button");

appear.style.visibility = "hidden";
python1.style.visibility = "hidden"
var btn = document.createElement("button")
var btntext = document.createTextNode("Next")
button.appendChild(btn)
btn.append(btntext)
btn.setAttribute('id', "NextQuiz")



function tests(parameter) {

    messageQuizSelectionPage.innerHTML = "Best Of Luck!"

    disapear.style.visibility = "hidden";
    appear.style.visibility = "visible";
    python1.style.visibility = "visible"
    QuizCategories.innerHTML = parameter;

    quizQuetions.innerHTML = "Quetions " + j+1 +  " of  4"  ;
    stopwatch.style.visibility = "visible"

    // console.log(btn)

    if (parameter === 'Python') {
        python()
        btn.setAttribute('onclcik', "python()")
        console.log(btn)

    }
    else if (parameter === 'Module-1 Exam') {
        test2()
        btn.setAttribute('onclcik', "test2()")
        console.log(btn)


    }
    else if (parameter === 'CCO') {
        test3()
        btn.setAttribute('onclcik', "test3()")
        console.log(btn)

    }
    else if (parameter === 'Web and App Crash Course') {
        test4()
        btn.setAttribute('onclcik', "test4()")
        console.log(btn)

    }
    else if (parameter === 'Web & App Development(Madaris)') {
        test5()
        btn.setAttribute('onclcik', " test5()")
        console.log(btn)


    }
    else if (parameter === 'Web And Mobile Hybrid App Develpment') {
        test6()
        btn.setAttribute('onclcik', " test6()")
        console.log(btn)


    }
    startTimer()
    // nextquiz(parameter)
}

// function nextquiz(parameter1){

//     if (parameter1 === 'Python') {
//         python() 

//         }
//         else if (parameter1 === 'Module-1 Exam') {
//             test2()

//         }
//         else if (parameter1 === 'CCO') {
//             test3()
//         }
//         else if (parameter1 === 'Web and App Crash Course') {
//             test4()
//         }
//         else if (parameter1 === 'Web & App Development(Madaris)') {
//             test5()

//         }
//         else if (parameter1 === 'Web And Mobile Hybrid App Develpment') {
//             test6() 

//         }


// }

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


var pythonQuetions = [
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




]

var module1 = [
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS ",
        answer4: " All of them",


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",


    },

]
var cco = [
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS ",
        answer4: " All of them",


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",


    },

]
var wapc = [
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS ",
        answer4: " All of them",


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",


    },

]
var wadm = [
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS ",
        answer4: " All of them",


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",


    },

]
var wamh = [
    {
        quetion: "Q1 : Who is your favourite Programer ",
        answer1: "Omer",
        answer2: "Ahmed",
        answer3: " Siddiqui",
        answer4: " Omer Ahmed Siddiqui",


    },
    {
        quetion: "Q2 : Who is your favourite Coder ",
        answer1: "Omer Ahmed Siddiqui",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "Both of them ",
        answer4: " None of them",


    },

    {
        quetion: "Q3 : Who will be fututer best Coder ",
        answer1: "Omer Ahmed ",
        answer2: "Omer Ahmed Siddiqui",
        answer3: "captainOAS ",
        answer4: " All of them",


    },

    {
        quetion: "Q4 : Who is this App Coder ",
        answer1: "Omer  ",
        answer2: "Omer Ahmed ",
        answer3: "Omer Ahmed Siddiqui ",
        answer4: " All of them",


    },

]


var j = 0;
function python() {
    console.log(j)
    quetion.innerHTML = pythonQuetions[j].quetion;
    answer1.innerHTML = " <input type='radio' class='input' >" + pythonQuetions[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' >" + pythonQuetions[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' >" + pythonQuetions[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' >" + pythonQuetions[j].answer4;
    j = j + 1;
    // console.log(j)
    // console.log(btn)
}
function test2() {
    console.log(j)

    quetion.innerHTML = module1[j].quetion;
    answer1.innerHTML = " <input type='radio' class='input' >" + module1[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' >" + module1[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' >" + module1[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' >" + module1[j].answer4;
    j = j + 1;
}
function test3() {
    console.log(j)

    quetion.innerHTML = cco[j].quetion;
    answer1.innerHTML = " <input type='radio' class='input' >" + cco[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' >" + cco[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' >" + cco[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' >" + cco[j].answer4;
    j = j + 1;
}
function test4() {
    console.log(j)

    quetion.innerHTML = wapc[j].quetion;
    answer1.innerHTML = " <input type='radio' class='input' >" + wapc[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' >" + wapc[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' >" + wapc[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' >" + wapc[j].answer4;
    j = j + 1;
}
function test5() {
    console.log(j)

    quetion.innerHTML = wamh[j].quetion;
    answer1.innerHTML = " <input type='radio' class='input' >" + wamh[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' >" + wamh[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' >" + wamh[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' >" + wamh[j].answer4;
    j = j + 1;
}
function test6() {
    console.log(j)

    quetion.innerHTML = wadm[j].quetion;
    answer1.innerHTML = " <input type='radio' class='input' >" + wadm[j].answer1;
    answer2.innerHTML = " <input type='radio' class='input' >" + wadm[j].answer2;
    answer3.innerHTML = " <input type='radio' class='input' >" + wadm[j].answer3;
    answer4.innerHTML = " <input type='radio' class='input' >" + wadm[j].answer4;
    j = j + 1;
}