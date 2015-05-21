$(document).ready(function() {
	
var points = 0;  

var correctAnswerListener = function() {
  $('#popUp').find(".correct").toggleClass("hide");
  points++;
}	

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
  var answers = [
    {
     "id": "briewood",
     "src": "img/img1.jpg",
     "location" : "Briewood Neighboorhood",
     "isCorrect": false
    },
    {
     "id": "btp",
     "src": "img/img2.jpg",
     "location" : "Beld Triangle Park",
     "isCorrect": true
    },
    {
     "id": "wondo",
     "src": "img/img3.jpg",
     "location" : "Wondo",
     "isCorrect": false
    }
  ];

    var randomAnswers = [];
    var randomAnswer;

    //want to grab the first random one and make that one isCorrect
    //and then generate the questions along with that one

    //1.  No duplicates
    //2.  add isCorrect
    //3.  splicing used array object

    do {
      randomAnswer = data[Math.floor(Math.random() * data.length)];
      randomAnswers.push(randomAnswer);
      $('#gameLogic').find('.gameLogicContent').append("<img class='img-resize' src='" + randomAnswers[0].src + "'>");

    } while(randomAnswers.length < 3);

    console.log(randomAnswers);
    // $('#gameLogic').find('.gameLogicContent').append("<img src='" + answers[randomAnswers].src + "'>");

    return answers;
}

$.ajax({
  type: "GET",
  url: "quizzes.json",
  success: function(data) {
    var answers = createAnswersFromData(data);
    addAnswersToScreen(answers);
  }
})

});
