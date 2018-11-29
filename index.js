let player = 1;
$(".square").on("click", add);

function add() {
  let squareSelected = $(this);

  if (squareSelected.hasClass("fa fa-times") || squareSelected.hasClass("far fa-circle")) {

  } else {
    if (player === 1) {
      squareSelected.addClass("fa fa-times")
      if (checkIfPlayerWon("fa fa-times")) {
        alert("Congratz! Player " + player + " has Won!");

      } else //if true player won
        player = 2;
    } else {
      squareSelected.addClass("far fa-circle")
      if (checkIfPlayerWon("far fa-circle")) {
        alert("Congratz! Player " + player + " has Won!");

      } else {
        player = 1;
      }
    }

  }
}

function boardStop() {
  $(".square").off("click", add);
}


function checkIfPlayerWon(symbol) {
  //horisontal rows
  if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
    boardStop();
    return true;
  } else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
    boardStop();
    return true;
  } else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
    boardStop();
    return true;
    //vertical rows
  } else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
    boardStop();
    return true;
  } else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
    boardStop();
    return true;
  } else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
    boardStop();
    return true;
    //diagnol rows
  } else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
    boardStop();
    return true;
  } else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
    boardStop();
    return true;
  } else {
    return false;
  }
}




$("button").on("click", resetSquares);

function resetSquares() {

  $("div").removeClass("fa fa-times");
  $("div").removeClass("far fa-circle");
  $(".square").on("click", add);

}