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
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    $("#reset").hide();

    sortArray();
    function sortArray(){
        questionObj = questionObj[Math.floor(Math.random()*questionObj.length)];
    console.log(questionObj);
    }
    
    function showQuestion(){

    }




})
