// We want a variable (var) for everything on our page that's gonna change (VARy).

var num1;
var num2;
var guess;
var answer;
var response;

$(document).ready(new function() {
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    guess = document.getElementById("inputfield");

    $("#submitbutton").click(function() {
        checkAnswer();
    });

    setNumbers();

});

function setNumbers() {
    num1.innerHTML = Math.floor(Math.random() * 10)+1;
    num2.innerHTML = Math.floor(Math.random() * 10)+1;
}

function checkAnswer() {
    var n1 = parseInt(num1.innerHTML);
    var n2 = parseInt(num2.innerHTML);
    var guessy = document.getElementById("inputfield");
    num2.innerHTML = guessy;
    answer = n1 * n2;
    

    if(guessy == answer) {
        num1.innerHTML = "Yes!"
        num1.innerHTML = "got this far"
    }
    else {
        // num2.innerHTML = "got this far"
        // num2.innerHTML = answer;
        num1.innerHTML = guess;
    }
    

}