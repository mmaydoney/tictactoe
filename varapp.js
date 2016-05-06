
$(document).ready(function() {

  var turn = "X";


//Set up click event on each space
  $(document).on("click", ".game-space", function(){
    if ($(this).html() === "") {
    //Change inner html of element selected
     $(this).addClass("animate");
     $(this).html(turn);





     // Change turn based on state of turn variable
     if (turn === "X") {
       turn = "O";
      } else {
        turn = "X";
      }
    }

  });




});
