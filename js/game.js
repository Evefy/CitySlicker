$(document).ready(function() {
<<<<<<< HEAD
	
var points = 0;
var data = [];
var quizNumber = 0;
var usedIndices = [];
var difficulty = 0;

// var clearScreen() {
//   //jquery to remove things from screen
  
// }

var newQuiz = function() {
  var answers;
  // clearScreen();
  answers = generateAnswers();
  addAnswersToScreen(answers);
  quizNumber++;
}
=======
  
var points = 0;  
>>>>>>> 0a82240e0cd057afb0ccf24a9142b6617958a785

var correctAnswerListener = function() {
  $('#popUp').find(".correct").toggleClass("hide");
  $(".quizArea").empty();
  points++;
<<<<<<< HEAD
  newQuiz();
}	
=======
};
  
var nextQuestion = function (){
  $('#popUp').find(".correct").toggleClass("hide");
  $.ajax({
  type: "GET",
  url: "quizzes.json",
  success: function(data) {
    var take = data["level"+points+""];
>>>>>>> 0a82240e0cd057afb0ccf24a9142b6617958a785

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
  newQuiz;
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

var generateAnswers = function() {
    var randomAnswers = [];
    var randomAnswer;
    var randomIndex;
    var correctIndex;

    //want to grab the first random one and make that one isCorrect !!
    //and then generate the questions along with that one !!

    //1.  No duplicates 
    //2.  add isCorrect !!
    //3.  splicing used array object

    do {
      do {//generate random indicies desirably 
        randomIndex = Math.floor(Math.random() * data.length);
        randomAnswer = data[randomIndex];
        randomAnswer["isCorrect"] = false;
      } while(randomAnswers.indexOf(randomAnswer) >= 0); //
      randomAnswers.push(randomAnswer); //push random answer to array
      //$('#gameLogic').find('.gameLogicContent').append("<img class='img-resize' src='" + randomAnswers[randomAnswers.length - 1].src + "'>");
    } while(randomAnswers.length < 3);//

    //after 3 places are generated, add isCorrect property to a random object
    randomAnswers[Math.floor(Math.random() * randomAnswers.length)].isCorrect = true;


    //Checking for duplicates in usedIndicies
    /*
    do{
      correctIndex = Math.floor(Math.random() * randomAnswers.length);
    } while(0 < usedIndices.indexOf(correctIndex))

    randomAnswers[correctIndex].isCorrect = true;
    randomAnswers.push(usedIndices);*/

    console.log(randomAnswers);
    return randomAnswers;
}

$.ajax({
  type: "GET",
  url: "quizzes.json",
<<<<<<< HEAD
  success: function(newData) {
    data = newData;
    newQuiz();
=======
  success: function(data) {
    var take = data["level"+points+""];

    var answers = createAnswersFromData(take);
    addAnswersToScreen(answers);
>>>>>>> 0a82240e0cd057afb0ccf24a9142b6617958a785
  }
});

});
