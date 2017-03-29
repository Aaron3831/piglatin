$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
  event.preventDefault();

  // verify if the user input is string



  // words beginning with a vowel, add "ay" to the end.
    var userInput = $("input#input").val().toLowerCase();
    var userInputArray = userInput.split("");
    console.log(userInputArray);
    // var vowels = ["a", "e", "i", "o", "u"];
    // var newWordArray = [];
  //
  //
  // if (userInputArray[0] === "a" || userInputArray[0] === "e" || userInputArray[0] === "i" || userInputArray[0] === "o" || userInputArray[0] === "u" ) {
  //   userInputArray.push("ay");
  // }

  var quArray = userInputArray.slice(2, userInputArray.length);



  if (userInputArray[0] === "q" && userInputArray[1] === "u") {
    quArray.push("quay");
  }

  var combineQu = quArray.join("");

  console.log(combineQu);
  alert(combineQu);
//words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ['qu'];

// counterArray = the position of vowels in the userInput //

var counter = 0;
var counterArray = [];

for (var i=0; i<userInputArray.length; i++) {
  for (var j=0; j<vowels.length; j++) {
    if (userInputArray[i] === vowels[j] ) {
    counter = userInputArray.indexOf(userInputArray[i]);
    counterArray.push(counter);
    }
  }
}
var firstVowelIndex = counterArray[0];

//first part
var firstPartArray = userInputArray.slice(0, firstVowelIndex);
//second part
var secondPartArray = userInputArray.slice(firstVowelIndex, userInputArray.length);

firstPartArray.push("ay");


for (var i=0; i<firstPartArray.length; i++) {
  secondPartArray.push(firstPartArray[i]);
}


var combine = secondPartArray.join("");

console.log(combine);
alert(combine);

if (userInputArray[0] === "a" || userInputArray[0] === "e" || userInputArray[0] === "i" || userInputArray[0] === "o" || userInputArray[0] === "u" ) {
  userInputArray.push("ay");
}

console.log(userInputArray);
alert(userInputArray);

  });
});
