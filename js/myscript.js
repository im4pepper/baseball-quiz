$(document).ready(function(){

    /*--- Variables ---*/
    var question1 = {
        title:"How many outs are there in an inning?",
        //answer:"Each team gets 3 outs in their half of the inning.",
        choices:[3,6,9],
        answer:"6"
    };

    var question2 = {
        title:"What is the maximum number of players on the playing field during play?",
        choices:[9,11,13],
        answer:"13"
    };

    var question3 = {
        title:"How many pitches must a pitcher throw to become the pitcher of record?",
        choices:[3,6,9],
        answer:"6"
    };

    var question4 = {
        title:"How many outs are there in an inning?",
        choices:[3,6,9],
        answer:"6"
    };

    var question5 = {
        title:"How many outs are there in an inning?",
        choices:[3,6,9],
        answer:"6"
    };

    //Model is a single question...
//Collection is an array of all questions
function QuestionCollection(){
  //Check if its an Array then dont do any operations
  var arrayList;
  if(arguments.length === 1 && arguments[0] instanceof Array){
      arrayList <= arguments[0];
  }else{
    //slice is a way to copy an array
    var slice = Array.prototype.slice;
    arrayList = slice.apply(arguments)
  }

  // so map does each but returns an array after the operations
  return arrayList.map(function(elem){
    return new Question(elem);
  });
}

//MODEL
function Question(options){
  this.ensureCorrect(options);
  console.log(options);
  this.title = options.title;
  this.answer = options.answer;
  this.choices = options.choices;
  return this;
}

$(document).ready(function(){
//Create an instance of the QuestionCollection so that
  var catCollection = new QuestionCollection(data);
// Every View instance needs an array of questions in order
// render the current question
  var catView = new QuestionView(catCollection);

});

    /*--- Display information modal box ---*/
    $(".instruction").click(function(){
        $(".overlay").fadeIn(800);
        console.log("quiz rules functioning");

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(800);
    });

    /*--- Quiz reset functions ---*/
    function newQuiz(){
        console.log("success");
    }

    /*--- Reset Quiz ---*/
    $(".reset").click(function() {
    newQuiz();
  });

    function rightAnswer(){
        var $status = $('.results');
        $status.empty();
        $status.append('Correct!');
    };

    function wrongAnswer(){
        var $status = $('.results');
        $status.empty();
        $status.append('Incorrect');
    };

    //VIEW
function QuestionView (collection){
  this.collection = collection;
  this.initalize();
}

QuestionView.prototype.initalize = function initalize() {
 this.nextQuestion();
}

QuestionView.prototype.nextQuestion = function nextQuestion() {
  if (this.collection.length > 1) {
      this.currentQuestion = this.collection.shift(); //return first item array of questions
      this.showQuestion();
      this.handleQuestion();
  } else {
     //end of quiz function 
  }
}

QuestionView.prototype.showQuestion = function showQuestion(){
var $stage = $('#stage');
  $('#stage *').remove();
  $stage.prepend(this.currentQuestion.choices);
  $stage.append(".question" + this.currentQuestion.title);
  $('.question').text(this.currentQuestion.title);
  for (var x in this.currentQuestion.choices){
    $stage.append("<button type='button' class='solution'>" + this.currentQuestion.choices[x] +"</button>");
  }
  //This can be removed if you dont want an infinte loop.
  //this.collection.push(this.currentQuestion);
}

QuestionView.prototype.handleQuestion = function handleQuestion(){
  // store a reference to QuestionView so we dont have to type alot
  $('button').on('click', function clickHandler() {
    if ($('input:checked').val() === this.currentQuestion.answer){
      rightAnswer();
      this.nextQuestion();
    } else {
      wrongAnswer();
    }
  }.bind(this));
}

    });