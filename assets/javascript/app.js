var timer;
var intervalId;
var wrongAnswers = 0;
var correctAnswers = 0;
var unAnswered = 0;



$(".mainBody").hide();
$(".answers").hide();

$("#buttonStart").on("click", function(){
    $(".splash").hide();
    $(".mainBody").show();
    timer = 150;
    intervalId = setInterval(myTimer, 1000);
} )







function myTimer() {

    timer--;
    console.log(timer);
    $("#timer").html(timer +" Seconds");

    if (timer === 0) {
      done();
      clearInterval(intervalId);
      console.log("I AM HERE");
    }

}

function done() {
  console.log("here here");
  $(".mainBody").hide();
  $(".answers").show();
}

// function validation() {
//   if ()
// }
