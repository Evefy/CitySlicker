$(document).ready(function() {
	
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
  clearScreen();
  answers = generateAnswers();
  addAnswersToScreen(answers);
  quizNumber++;
}

var correctAnswerListener = function() {
  $('#popUp').find(".correct").toggleClass("hide");
  points++;
  newQuiz();
}	

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
    var points;
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
  success: function(newData) {
    data = newData;
    newQuiz();
  }
})

});
