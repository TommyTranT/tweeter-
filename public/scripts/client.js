$(() => {

  const $tweetContainer = $('#tweet-container');

  const fetchTweets = () => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/tweets',
      success: (data) => {
        console.log(`data we fetched`, data);
        $tweetContainer.empty();

        for (const tweet of data) {
          const $tweet = renderTweet(tweet);

          $tweetContainer.prepend($tweet);
          $("#inputted-tweet").val('')
         
        }
      }
    })
  };

  fetchTweets();

  const renderTweet = (tweet) => {
    const $tweet = $(`
    <div class="each-tweet">
      <header class="tweet-header">
          <div class="avatar-name">
            <img class="avatars"src=${tweet.user.avatars} />
            <h2 class="name"> ${tweet.user.name}</h2>
          </div>
          <small class="handle">${tweet.user.handle}</small>
      </header>

          <div class="tweet-body"> </p>
          <p class="text">${tweet.content.text}</p>
          </div>

      <footer class="tweet-footer">
        <small class ="footer-days">${timeago.format(tweet.created_at)}</small>
        <span class="footer-icons">
          <a href="#"><i class="fa fa-flag hover"></i></a>
          <a href="#"><i class="fa fa-retweet hover"></i></a>
          <a href="#"><i class="fa fa-heart hover"></i></a>
        </span>
      </footer>
    </div>
      `)

    return $tweet
  };

  const $form = $('#new-tweet');

  $form.on('submit', (event) => {
    event.preventDefault();

    if (!$("#inputted-tweet").val()){
      // return alert('Tweet is empty') 
     
      const $errrorMessage = $('#error-message');
      let errorMessage = $errrorMessage.val();
      errorMessage = errorMessage = "Tweet is empty";

      $errrorMessage.text(errorMessage)

      $errrorMessage.addClass('errorIcon');

      return $errrorMessage.slideDown();
    }

    if ($("#inputted-tweet").val().length > 140){
      const $errrorMessage = $('#error-message');
      let errorMessage = $errrorMessage.val();
      errorMessage = "Tweet is too long";

      $errrorMessage.text(errorMessage)

      return $errrorMessage.slideDown();
    }

    $('#error-message').slideUp();

    console.log($("#inputted-tweet").val())

    const serializedData = $form.serialize();
    // console.log(serializedData);

    $.post('/tweets', serializedData, (response) => {
      console.log(response);
      fetchTweets();
    });

  });

}); // End of Doc.ready.

