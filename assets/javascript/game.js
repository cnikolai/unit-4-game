$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    function game() {
    var targetNumber = Math.floor(Math.random()*102)+19;
    // var targetNumber = Math.floor(Math.random()*10)+1;
    var counter = 0;
    
    $("#random-number").text("Target number: " + targetNumber);
    $("#player-total").text("Your total: " + counter);
    $("#crystals").empty();
    $("#aboutgame").empty();

    // We begin by expanding our array to include four options.
    var numberOptions = [];
    for (var i = 0; i < 4; i++) {
        numberOptions[i] = Math.floor(Math.random()*12)+1;
    }
    // numberOptions = ["1","2","3","4"];

    //stores the source destination for the crytstal images
    var crystalImageSource = ["assets/images/jewel1.png","assets/images/jewel2.jpg","assets/images/jewel3.jpg","assets/images/jewel4.jpg"];
  
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {
  
      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
  
      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");
  
      // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", crystalImageSource[i]);
  
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
    }
  
    $(".crystal-image").on("click", function() {
  
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      
      counter += crystalValue;
      $("#player-total").text("Your total: " + counter); 

  
      console.log("New score: " + counter);
      $("#player-total").text("New score: " + counter);
  
      if (counter === targetNumber) {
          wins++;
        console.log("You win!");
        $("#aboutgame").text("You Win!");
        $("#wins").text("Wins: " + wins);
        game();
      } else if (counter > targetNumber) {
        console.log("You lose!!");
        losses++;
        $("#aboutgame").text("You Lose!");
        $("#losses").text("Losses: " + losses);
        game();
      }
  
    });
  }
  game();
});