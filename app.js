var mainpage = document.querySelector("#mainpage");
var popup = document.querySelector("#mainBorder");
var chkPassword = document.querySelector("#chkPassword");
var passwordSignIn = document.querySelector("#passwordSignIn");
var username = document.querySelector("#username")
var emailSignIn = document.querySelector("#emailSignIn")
var signIn = document.querySelector("#SignIn")
var signUp = document.querySelector("#SignUp")
var mainBorder = document.querySelector("#mainBorder")
var emailSignUp = document.querySelector("#emailSignUp")
var usernameSignUp = document.querySelector("#usernameSignUp")
var passwordSignUp = document.querySelector("#passwordSignUp")
var RepasswordSignUp = document.querySelector("#RepasswordSignUp")
var message = document.querySelector("#message")
var secondborder = document.querySelector("#secondborder")


signUp.style.visibility = "hidden"
signIn.style.visibility = "visible"


function openPopup() {
    popup.id = "open-popup"
    console.log(popup.className)
}


function passwordChkerForSignUp() {
    if (passwordSignUp.type === "password") {
        passwordSignUp.type = "text"
        RepasswordSignUp.type = "text"

    }
    else if (RepasswordSignUp.type === "text") {
        passwordSignUp.type = "password"
        RepasswordSignUp.type = "password"
    }
}


function passwordChkerForSignIn() {
    if (password.type === "password") {
        password.type = "text"
    }
    else if (password.type === "text") {
        password.type = "password"
    }

}


function signup() {




    button1.style.backgroundColor = "#0c319e";
    button1.style.color = "#ffffff";
    button2.style.backgroundColor = "#10266b";
    button2.style.color = "#ffffff";
    signUp.style.visibility = "visible"
    signIn.style.visibility = "hidden"
    mainBorder.style.height = "400px"

}

function signin() {

    button1.style.backgroundColor = "#10266b";
    button1.style.color = "#ffffff";
    button2.style.backgroundColor = "#0c319e";
    button2.style.color = "#ffffff";
    signUp.style.visibility = "hidden"
    signIn.style.visibility = "visible"
    mainBorder.style.height = "300px"


}



function Userdetails(email,username, password) {
    this.username = username;
    this.email = email;
    this.password = password;

}

function loginSignUp(parameter) {
    if (parameter === 'signup') {//signup
        if (passwordSignUp.value === RepasswordSignUp.value) {
            var newuser = new Userdetails(emailSignUp.value,usernameSignUp.value, passwordSignUp.value)
            localStorage.setItem("userdetail", JSON.stringify(newuser))

            signin()
        }
        else {
            message.innerHTML = "ReCheck Password"
            mainBorder.style.height = "430px"
            secondborder.style.height = "400px"


        }
    }
    else if (parameter === 'signin') { //signin
        var retriefItem = JSON.parse(localStorage.getItem('userdetail'));
        // console.log(retriefItem,emailSignIn.value,passwordSignIn.value)
       if(retriefItem.email === emailSignIn.value && retriefItem.password === passwordSignIn.value){
        // window.location("quizesChoices.html");
      console.log(retriefItem.email,retriefItem.password)
       }
    }



}








