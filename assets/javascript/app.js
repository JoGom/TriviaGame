$(document).ready(function(){
    var questionObj = [
        {
            question: "What was the first capital of ancient Egypt?",
            choice: ["Memphis","Thebes","Alexandria","Atlantis"],
            anwser: 0
        },
        {
            question: "The First World war began in which year?",
            choice: ["1910","1914","1923","1925"],
            anwser: 1
        },
        {
            question: "The Oldest civilization of the world is?",
            choice: ["The Aztecs Civilization","The Harappa Civilizaton","The Mesopotamian Civilization","The Ancient Egyptian civilization"],
            anwser: 2
        },
        {
            question: "The Opium war was held between which two countries?",
            choice: ["China and Russia","England and France","China and England","Russia and England"],
            anwser: 2
        },
        {
            question: "The oldest dynasty is still ruling in which country?",
            choice: ["Iran","Austria","England","Japan"],
            anwser: 3
        },
        {
            question: "Who was the first President of the USA?",
            choice: ["George Washington","Andrew Jackson","John Adams","Thomas Jefferson"],
            anwser: 0
        },
        {
            question: "The Statue of Liberty was a gift from which country?",
            choice: ["Japan","Russia","France","Egypt"],
            anwser: 2
        },
        {
            question: "Japan allied with which country in the first World War?",
            choice: ["China","Germany","Russia","France"],
            anwser: 1
        },
        {
            question: "When did the Second World War end?",
            choice: ["1941","1945","1944","1948"],
            anwser: 1
        },
        {
            question: "Who was the first U.S. President to be impeached?",
            choice: ["Richard Nixon","Bill Clinton","Herbert Hoover","Andrew Johnson"],
            anwser: 3
        }
    ];
    var running = false;
    var intervalId;
    var time = 20;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var qIndex = 0;
    var pick = "";

    $("#reset").hide();

    $("#start").on("click", function () {
		$("#start").hide();
        showQuestion();
    });

    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#choiceBlock").empty();
        $("#question").empty();
        qIndex = 0;
    
        showQuestion();
    });

    function showQuestion(){
        timer();
        $("#question").text(questionObj[qIndex].question);
        for(var i = 0; i < questionObj[qIndex].choice.length; i++){
            var userChoice = $("<div>");
			userChoice.addClass("choices");
			userChoice.html(questionObj[qIndex].choice[i]);
			userChoice.attr("data-value", i);
			$("#choiceBlock").append(userChoice);
        }
        $(".choices").on("click", function () {
            pick = parseInt($(this).attr("data-value"));
        
            if (pick === questionObj[qIndex].anwser){
                stop();
                correct++;
                console.log(correct);
                pick = "";
                $("#choiceBlock").html("<p>You are Correct!</p>");
                qIndex++;
                changeQuestion();
            }
            else if(pick !== questionObj[qIndex].anwser){
                stop();
                incorrect++;
                pick = "";
                $("#choiceBlock").html("<p>Nope! The correct anwser is: " +questionObj[qIndex].choice[questionObj[qIndex].anwser]+"</p>");
                qIndex++;
                changeQuestion();
            }
         });
    }

    function changeQuestion(){

        var delay = setTimeout(function(){
            time = 20;
            $("#choiceBlock").empty();
        if((correct + incorrect + unanswered) === questionObj.length){
            $("#question").empty();
            $("#choiceBlock").append("<h3> Correct: " + correct + "</h3>" );
		    $("#choiceBlock").append("<h3> Incorrect: " + incorrect + "</h3>" );
            $("#choiceBlock").append("<h3> Unanswered: " + unanswered + "</h3>" );
            $("#reset").show();
            correct = 0;
            incorrect = 0;
            unanswered = 0;
        }
        else{
            showQuestion();
        }
        }, 2000);
    }

    function timer(){
        if(running === false){
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
        

    }
    function decrement(){
        $("#timeBlock").text("Time Left: "+time);
        time--;
        if(time === 0 ){
            unanswered++;
            stop();
            $("#choiceBlock").html("<p>Timesup! The correct anwser is: " +questionObj[qIndex].choice[questionObj[qIndex].anwser]+"</p>");
            qIndex++;
            changeQuestion();
        }
    }
    function stop(){
        clearInterval(intervalId);
        running = false;
    }

});
