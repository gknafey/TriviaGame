$(document).ready(function() { 
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 30;
var interval = 0;
var timeUp;

$("#remaining").append("<button>" + "Start Game" + "</button>");
$("#remaining").on("click", start);
$("#remaining").on("click", timer);

function start(x) {
    question();
};

 function question(x) {
        clearInterval(interval);
        clearTimeout(timeUp); 
        correct = 0;
        wrong = 0;
        $("#clear").show();
        $("#question").empty();
        $("#remaining").empty();
        $("#video").empty();
        $("#remaining").append("Time Remaing: ");
        $("#question").append("Is Rick from Rick and Morty an alcholic?");
        $("#true").append("<button id='tru'>" + "True" + "</button>");
        $("#false").append("<button id='fal'>" + "False" + "</button>");

        
        $("#tru").on("click", function() {
            correct++;
            clearInterval(interval);
            question2(timeUp);
            timer();
        });
        $("#fal").on("click", function() {
            wrong++;
            clearInterval(interval);
            question2();
            timer();
            
        });
        timeUp = setTimeout(function() {
            unanswered++;
            clearInterval(interval);
            question2();
            timer();
        }, 30500);
            

        };
    
    
    
    
   
function question2(x) {
    clearTimeout(timeUp);
    $("#remaining").empty();
    $("#question").empty();
    $("#true").empty();
    $("#false").empty();
    $("#remaining").append("Time Remaing: ");
    $("#question").append("Does Batman never have a contingency plan?");
    $("#true").append("<button id='tru'>" + "True" + "</button>");
    $("#false").append("<button id='fal'>" + "False" + "</button>");
    $("#tru").on("click", function() {
        wrong++;
        clearInterval(interval);
        question3();
        timer();
    });
    $("#fal").on("click", function() {
        correct++;
        clearInterval(interval);
        question3();
        timer();
    });

    timeUp = setTimeout(function() {
        unanswered++;
        clearInterval(interval);
        question3();
        timer();
    }, 30500);

};

function question3(x) {
    clearTimeout(timeUp);
    $("#remaining").empty();
    $("#question").empty();
    $("#true").empty();
    $("#false").empty();
    $("#remaining").append("Time Remaing: ");
    $("#question").append("Did Mark Hamill do the voice of the Joker <br> in the Batman Animated Series?");
    $("#true").append("<button id='tru'>" + "True" + "</button>");
    $("#false").append("<button id='fal'>" + "False" + "</button>");
    $("#tru").on("click", function() {
        correct++;
        clearInterval(interval);
        question4();
        timer();
    });
    $("#fal").on("click", function() {
        wrong++;
        clearInterval(interval);
        question4();
        timer();
    });

    timeUp = setTimeout(function() {
        unanswered++;
        clearInterval(interval);
        question4(timeUp);
        timer();
    }, 30500);

};

function question4(x) {
    clearTimeout(timeUp);
    $("#remaining").empty();
    $("#question").empty();
    $("#true").empty();
    $("#false").empty();
    $("#remaining").append("Time Remaing: ");
    $("#question").append("The costume color of the new spiderman from Into the Spiderverse is orange?");
    $("#true").append("<button id='tru'>" + "True" + "</button>");
    $("#false").append("<button id='fal'>" + "False" + "</button>");
    $("#tru").on("click", function() {
        wrong++;
        clearInterval(interval);
        results();
        timer();
    });
    $("#fal").on("click", function() {
        correct++;
        clearInterval(interval);
        results();
        timer();
    });

    timeUp = setTimeout(function() {
        unanswered++;
        clearInterval(interval);
        results();
    }, 30500);
};

function results() {
    clearTimeout(timeUp);
    $("#remaining").empty();
    $("#question").empty();
    $("#true").empty();
    $("#false").empty();
    $("#clear").hide();
    clearInterval(interval);
    $("#question").append("<button id='restart'>" + "Restart Game" + "</button><br>Correct: " + correct + "<br>" + "Wrong:" + wrong + "<br>" + "Unanswered: " + unanswered);
    $("#restart").on("click", question);
    $("#restart").on("click", timer);
    if (correct > wrong) {
    $("#video").append("<img src='./assets/images/ilikewhatyougot.png'>")
    }
    else{
    $("#video").append("<img width='500px' height='400px' src='./assets/images/Boonotcool.png'>")
    }
    
};








function timer() {

    
    counter = 30;
    $("#time").text(counter);
     interval = setInterval(function() {
    
    counter--;
    
    if (counter <= 0) {
     		clearInterval(interval);
          $("#time").text("Times UP!"); ;
        return;
    }else{
    	$("#time").text(counter);
      
    }
}, 1000);
}

}
);