
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'xBUFUM6eCjQ',  //최초 재생할 유투브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'xBUFUM6eCjQ' //반복재생할 유투브 영상 ID목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}