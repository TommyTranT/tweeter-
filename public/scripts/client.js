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
        }
      }
    })
  };

  fetchTweets();

  const renderTweet = (tweet) => {
    $('time.timeago').timeago();
    const $tweet = $(`
      <header class="tweet-header">
          <div>
            <img class="avatars"src=${tweet.user.avatars} />
            <h2 class="name"> ${tweet.user.name}</h2>
          </div>
          <small class="handle">${tweet.user.handle}</small>
      </header>

          <div class="tweet-body"> </p>
          <p class="text">${tweet.content.text}</p>
          </div>

      <footer class="tweet-footer">
        <small class ="footer-days">${tweet.created_at}</small>
        <span class="footer-icons">
          <a href="#"><i class="fa fa-flag"></i></a>
          <a href="#"><i class="fa fa-retweet"></i></a>
          <a href="#"><i class="fa fa-heart"></i></a>
        </span>
      </footer>
      `)

    return $tweet
  };


  const $form = $('#new-tweet');

  $form.on('submit', (event) => {
    event.preventDefault();

    if (!$("#inputted-tweet").val()){
      alert('Tweet is empty')
    }



    console.log($("#inputted-tweet").val())

    const serializedData = $form.serialize();
    // console.log(serializedData);

    $.post('/tweets', serializedData, (response) => {
      console.log(response);
    });

    fetchTweets();
  });

}); // End of Doc.ready.

//         <small class ="footer-days">${tweet.created_at}</small>
