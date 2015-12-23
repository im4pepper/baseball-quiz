$(document).ready(function(){

    /*--- Variables ---*/
    var data = [
    {
        question:"How many outs are there in an inning?",
        options:[1,2,3],
        answer:"Each team gets 3 outs in their half of the inning."
    },
    {
        question:"What is the maximum number of players on the playing field during play?",
        options:[1,2,3],
        answer:"There are 9 defenders, and can be up to 4 offensive players."
    },
    {
        question:"How many innings must be played to make a Major League game official in the record books?",
        options:[1,2,3],
        answer:"Each team must complete 5 innings of play for the game to become offical."
    },
    {
        question:"How many pitches must a pitcher throw to become the pitcher of record?",
        options:[1,2,3],
        answer:"A pitcher becomes a pither of record when..."
    },
    {
        question:"How many hotdogs can a catcher eat during a game?",
        options:[1,2,3],
        answer:"Players may eat whatever they want, even during a game."
    }
    ]


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

    });