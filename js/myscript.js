var correctCount=0
var incorrectCount=0

$(document).ready(function(){

    /*--- Variables ---*/
    var question1 = {
        title: "How many outs are there in an inning?",
        choices: [3,6,9],
        //answer: "Each team gets 3 outs in their half of the inning.",
        solution: "6"
        //image: "../images/"
    }
    var question2 = {
      title: "How many times may a player re-enter a game after coming out?",
        choices: [0,1,3],
        solution: "0"
    }
    var question3 = {
        title: "How many innings make a Major League game official in the record books?",
        choices: [1,5,9],
        //answer: "Each team must complete 5 innings of play for the game and stats to become offical.",
        solution: "5"
    }
    var question4 = {
        title: "How many pitches must a pitcher throw to become the pitcher of record?",
        choices: [0,5,20],
        solution: "0"
    }
    var question5 = {
        title: "What is the maximum number of players on the playing field during play?",
        choices: [9,11,13],
        //answer: "There are 9 defenders, and can be up to 4 offensive players.",
        solution: "13"
    }

    /*--- Display question/results
    function newQuestion(options){
        console.log("options");
    }*/

    /*--- Display answer/explanation ---*/
    /*function newAnswer(){
        var $status = $('.status');
        $status.empty();
        $status.append(q);
    }*/

    /*--- Display question/results ---*/
    function newSolution(){
        console.log("solutions");
    }

    function QuestionCollection(){
        var arrayList;
        if(arguments.length === 1 && arguments[0] instanceof Array){
            arrayList = arguments[0];
        } else {
            var slice = Array.prototype.slice;
            arrayList = slice.apply(arguments)
        }
        console.log(arrayList);
        return arrayList.map(function(elem){
            return new Question(elem);
        });
    }

    var collection = new
    QuestionCollection(question1,question2,question3,question4,question5)

    var view = new QuestionView (collection)

    function Question(options){
        this.title = options.title;
        //this.answer = options.answer;
        this.choices = options.choices;
        this.solution = options.solution;
        return this;
    }

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
    $(".reset").click(function(){
        location.reload(true);
    });

    });

//VIEW
function QuestionView (collection){
  this.collection = collection;
  this.initalize();
}

QuestionView.prototype.initalize = function initalize() {
 this.nextQuestion();
}

QuestionView.prototype.nextQuestion = function nextQuestion() {
  if (this.collection.length >= 1) {
      this.currentQuestion = this.collection.shift(); //return first item array of questions
      this.showQuestion();
      this.handleQuestion();
  } else {
    this.endofQuiz();
     //end of quiz function 
  }
}

QuestionView.prototype.endofQuiz = function endofQuiz(){
    var $stage = $('#stage');
    $('#stage *').remove();
    $stage.append("<p class='question' id='question'>" + "You got " + correctCount + " out of 5 correct!" +"</p>");
  }

QuestionView.prototype.showQuestion = function showQuestion(){
    var $stage = $('#stage');
  $('#stage *').remove();
  $stage.append("<p class='question' id='question'>" + this.currentQuestion.title +"</p>");
  $('#question').text(this.currentQuestion.title);
  for (var x in this.currentQuestion.choices){
    $stage.append("<button type='button' class='solution'>" + this.currentQuestion.choices[x] +"</button>");
  }
  //$stage.append("<p class='answer'>" + "&nbsp" +"</p>");
  //This can be removed if you dont want an infinte loop.
  //this.collection.push(this.currentQuestion);
}

function rightAnswer(){
        correctCount +=1
        //var $status = $(".answer");
        //$status.empty();
        //$status.append("Correct!").fadeOut(1400);
        //console.log("correct");
   };

 function wrongAnswer(){
        incorrectCount +=1
        //var $status = $(".answer");
        //$status.empty();
        //$status.append('Incorrect').fadeOut(1400);
        //console.log("wong answer");
   };

function clearQuiz (){
    var $stage = $('#stage');
  $('#stage *').remove(); 
  $stage.append("<p class='question' id='question'>" + "&nbsp;" +"</p>");
  for (var x in this.currentQuestion.choices){
    $stage.append("<button type='button' class='solution'>" + this.currentQuestion.choices[x] +"</button>");
  }
  //$stage.append("<p class='answer'>" + "&nbsp" +"</p>");
};

QuestionView.prototype.handleQuestion = function handleQuestion(){
  // store a reference to QuestionView so we dont have to type alot
  $('#stage').unbind("click").on('click', function clickHandler(event) {
    event.preventDefault()
    console.log(event.target.innerHTML);
    if (event.target.innerHTML === this.currentQuestion.solution){
      rightAnswer();
      this.nextQuestion();
    } else {
      wrongAnswer();
      this.nextQuestion();
    }
  }.bind(this));
}