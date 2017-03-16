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

$("#buttonDone").on("click", function(){
  done();
  clearInterval(intervalId);

})





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

function validation(Boolean) {
  if (Boolean)
  {
    correctAnswers++;
    console.log("correct",correctAnswers);
    console.log("INSIDE validation");

  }else if ($('[type="radio"]').is(":not(':checked')")) {
      unAnswered++
      console.log("unAnswered", unAnswered);
      console.log("inside not", unAnswered);
  }


  else{
    wrongAnswers++
    console.log("wrong",wrongAnswers);
  }


}

function done() {
  console.log("here here");
  $(".mainBody").hide();
  $(".answers").show();
  validation($('[value="10000"]').is(':checked'));
  validation($('[value="1966"]').is(':checked'));
  validation($('[value="elanor rigby"]').is(':checked'));
  validation($('[value="the end"]').is(':checked'));
  validation($('[value="king lear"]').is(':checked'));
  validation($('[value="allan williams"]').is(':checked'));
  validation($('[value="paul mccartney"]').is(':checked'));

$(".correct").html("Correct Answers: "+correctAnswers);
$(".wrong").html("Wrong Answers: "+wrongAnswers);
$(".un").html("Unanswered: "+unAnswered);


}



console.log("test", $('[type="radio"]').is(':checked'));
