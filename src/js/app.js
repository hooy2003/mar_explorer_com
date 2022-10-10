(function(){
  var burger = document.querySelector('.__burger__container'),
      header = document.querySelector('.__mobile__header');
  burger.addEventListener("click", function() {
    header.classList.toggle('__menu__opened');
  });
  if(document.getElementById('autoplay_1')&&document.getElementById('autoplay_1').clientHeight>0) {
    document.getElementById('autoplay_1').play();
  }
  if(document.getElementById('autoplay_2')&&document.getElementById('autoplay_2').clientHeight>0) {
    document.getElementById('autoplay_2').play();
  }
}());


// Get element
var youtubeEmbedElement = document.getElementById("youtubeEmbed");
if(youtubeEmbedElement) {
  // Add YouTube API script
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];

  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  var videoId = youtubeEmbedElement.dataset.videoId;

  onYouTubeIframeAPIReady = function () {
    player = new YT.Player("youtubeEmbed", {
      videoId: videoId, // YouTube Video ID
      playerVars: {
        autoplay: 1, // Auto-play the video on load
        disablekb: 1,
        controls: 0, // Hide pause/play buttons in player
        showinfo: 0, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        loop: 1, // Run the video in a loop
        fs: 0, // Hide the full screen button
        rel: 0,
        enablejsapi: 1
      },
      events: {
        onReady: function (e) {
          e.target.mute();
          e.target.playVideo();
        },
        onStateChange: function (e) {
          if (e.data === YT.PlayerState.PLAYING) {
            document.getElementById("youtubeEmbed").classList.add("loaded");
          }
          // codepen.io/objoe/pen/PoNyyNj
          if (e.data === YT.PlayerState.ENDED) {
            player.seekTo(0);
          }
        }
      }
    });
  };
}
