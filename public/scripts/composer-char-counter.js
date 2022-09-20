/* <textarea class="text-box" name="text" id="box-of-tweet"></textarea>
 <button id="help-button">click me</button>
<output id="max-char" name="counter" class="counter logo" for="tweet-text">140</output>  */

// # = ID
// . = class
// nothing = element

// apply style in jquery

$(() => {
  $("input").keyup(function(){
    // Get element of counter
    const $counter = $('#max-char');

    // Get the value and string length
    const $text = $("#inputted-tweet");
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

})


// $(() => {
//   $("textarea").keyup(function(){
//     // Get element of counter
//     const $counter = $('#max-char');

//     // Get element of the text area
//     const $text = $("#box-of-tweet");

//     // Get the value and string length
//     const text = $text.val();
//     const textLength = text.length
   
//     // Subtract a fixed value of 140 by the length of the string.
//     // Everytime we press a key, length of string increases
//     const remainingChar = 140 - textLength


//     // Everytime we press a key, we are REPLACING the $counter value with our remainingChar value.
//     $($counter).text(remainingChar);
    
//   console.log(textLength)
//   })

// })



