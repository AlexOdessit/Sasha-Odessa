$(document).ready(function () {
  let video = $('#my_video').get(0);
  $('#my_video').on('loadedmetadata', function () {
    alert('hello!');
  });
  function PlayPause() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }
  $('.play').on('click', function () {
    $(this).toggleClass('active');
    PlayPause();
  });
});
let my_video = document.getElementById('myvideo');
my_video.addEventListener('loadedmetadata', function () {
  const videoDuration = Math.round(my_video.duration);
  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  }
  let my_time = formatTime(videoDuration);
  alert(my_time.minutes);
});
