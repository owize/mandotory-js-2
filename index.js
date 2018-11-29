$(document).ready(function() {

  let player = 1;
  $
    (".square").on("click", function(event) {


      let squareSelected = $(this);

      if (squareSelected.hasClass("fa fa-times") || squareSelected.hasClass("far fa-circle")) {
        //alert("this square has already been selected");
      } else {
        if (player === 1) {
          squareSelected.addClass("fa fa-times")
          if (checkIfPlayerWon("fa fa-times")) {
            alert("congrats! Player " + player + " has won!");

          } else //if true player won
            player = 2;
        } else {
          squareSelected.addClass("far fa-circle")
          if (checkIfPlayerWon("far fa-circle")) {
            alert("congrats! Player " + player + " has won!");

          } else {
            player = 1;
          }
        }
        //add the rest of logic
      }


    });

  function checkIfPlayerWon(symbol) {
    //horisontal rows
    if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
      return true;
    } else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
      return true;
    } else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
      return true;
      //vertical rows
    } else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
      return true;
    } else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
      return true;
    } else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
      return true;
      //diagnol rows
    } else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
      return true;
    } else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
      return true;
    } else {
      return false;

    }

  }

  $("button").on("click", function(event) {

      $("div").removeClass("squareSelected");
    }

    //testing

  });


});