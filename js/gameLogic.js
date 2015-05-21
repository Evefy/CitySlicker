

$(document).ready(function(){



  $.ajax({
    type: "GET",
    url: "quizzes.json", // path to file
    dataType: "json", // type of file (text, json, xml, etc)
    success: function(quizzes) { // callback for successful completion
      // $("#gameLogic").html(data);
      //console.log(data.quiz1.img[0]);
      //populate to #gameLogic section
      for(var i=0; i<quizzes.quiz1.img.length; i++){ 
        $('#gameLogic').find('.gameLogicContent').append('<img class="picture img-resize" src="' + quizzes.quiz1.img[i]+ '">');
      }
    },
    error: function(e) { // callback if there's an error
      console.log(e);
    }

  });     


});
