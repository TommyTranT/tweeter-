// composer-char-counter.js functions
// 1. checks the length of inputed tweet per key press
// 2. subtract length by 140 per key press to find remaining keys (remainingChar)
// 3. change html value to remainingChar
//     a) if that number is negative, change the color to red.
//     b) or remove that class.

$(() => {
  $("input").keyup(function(){

    const $counter = $('#max-char');    // Get element of counter

   
    const $text = $("#inputted-tweet"); // Get the value and string length
    const text = $text.val();
    const textLength = text.length
   
    // Subtract a fixed value of 140 by the length of the string.
    // Everytime we press a key, length of string increases
    const remainingChar = 140 - textLength

    // Everytime we press a key, we are REPLACING the $counter value with our remainingChar value.
    $($counter).text(remainingChar);

    if (remainingChar < 0) {
      $($counter).addClass('colorRed');
    } else {
      $($counter).removeClass('colorRed');
    }
    
  console.log(textLength)
  })

});