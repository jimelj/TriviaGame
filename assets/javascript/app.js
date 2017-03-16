var timer;
var intervalId;



$(".mainBody").hide();

$("#buttonStart").on("click", function(){
    $(".splash").hide();
    $(".mainBody").show();
    timer = 5;
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

}

function validation() {
  
}
