
var messageQuizSelectionPage = document.querySelector("#message-quiz-selection-page");
var retriefItem = JSON.parse(localStorage.getItem('userdetail'));
messageQuizSelectionPage.innerHTML = "Welcome , " + retriefItem.username


//                           for python 




var disapear = document.querySelector("#disapear");
var appear = document.querySelector("#appear");
var python1 = document.querySelector("#python1");
var python2 = document.querySelector("#python2");
var python3 = document.querySelector("#python3");
var python4 = document.querySelector("#python4");
var QuizCategories = document.querySelector("#QuizCategories");
var quizQuetions = document.querySelector("#quizQuetions");
appear.style.visibility = "hidden";
python1.style.visibility = "hidden"
python2.style.visibility = "hidden"
python3.style.visibility = "hidden"
python4.style.visibility = "hidden"

function python() {
    disapear.style.visibility = "hidden";
    appear.style.visibility = "visible";
    QuizCategories.innerHTML = "Python";
    quizQuetions.innerHTML = "Quetions 1 of 25";
for(var i=1;i<5;i++){
python(i).style.visibility = "visible"

}

}