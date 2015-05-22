$(document).ready(function() {
  
var points = 0;  

var correctAnswerListener = function() {
  $('#popUp').find(".correct").toggleClass("hide");
  $("#modal-content,#modal-background").toggleClass("active");
  $(".quizArea").empty();
  points++;
};
  
var nextQuestion = function (){
  $('#popUp').find(".correct").toggleClass("hide");
  $("#modal-content,#modal-background").toggleClass("active");
  $.ajax({
  type: "GET",
  url: "../quizzes.json",
  success: function(data) {
    var take = data["level"+points+""];

    var answers = createAnswersFromData(take);
    addAnswersToScreen(answers);
  }
});
};
$(".next").on('click', function(){
  nextQuestion();
});
var wrongAnswerListener = function(){
  $('#popUp').find(".incorrect").toggleClass("hide");
}

var createAnswer = function(data){
  return answers;
}

var addAnswersToScreen = function(answers) {
  for (index in answers) {
    if (answers[index].isCorrect) {
      $(".questionArea").find("h2").text("This special piece is located at " + answers[index].location + "?")
    }
    var answer = $('<img>').attr('src', answers[index].src).on('click', answers[index].isCorrect ? correctAnswerListener : wrongAnswerListener);
    $('.quizArea').append(answer);

  }
}

var createAnswersFromData = function(data) {
    var randomAnswers = [];
    var randomAnswer;
    var randomIndex;

    //want to grab the first random one and make that one isCorrect !!
    //and then generate the questions along with that one !!

    //1.  No duplicates 
    //2.  add isCorrect !!
    //3.  splicing used array object

    do {
      do {//generate random indicies 
        randomIndex = Math.floor(Math.random() * data.length);
        randomAnswer = data[randomIndex];
        randomAnswer["isCorrect"] = false;
      } while(randomAnswers.indexOf(randomAnswer) >= 0); //
      randomAnswers.push(randomAnswer); //push random answer to array
      //$('#gameLogic').find('.gameLogicContent').append("<img class='img-resize' src='" + randomAnswers[randomAnswers.length - 1].src + "'>");
    } while(randomAnswers.length < 3);//

    //after 3 places are generated, add isCorrect property to a random object
    randomAnswers[Math.floor(Math.random() * randomAnswers.length)].isCorrect = true;
    // $('#gameLogic').find('.gameLogicContent').append("<img src='" + answers[randomAnswers].src + "'>");
    console.log(randomAnswers);
    return randomAnswers;
}

$.ajax({
  type: "GET",
  url: "../quizzes.json",
  success: function(data) {
    var take = data["level"+points+""];

    var answers = createAnswersFromData(take);
    addAnswersToScreen(answers);
  }
});

});