      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
        //<div id="player></div>"
          videoId: 'An6LvWQuj_8', //youtube url의 파라미터 v의 값 = videoID
          playerVars: { //플레이어 매개변수
            autoplay: true,
            loop: true, // 반복 재생 유무
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록 
          },
          events: {
            'onReady': function(event) {
                event.target.mute() //음소거, playerVars에 속성이 없음 
                // 객체 데이터 내부에 함수가 할당 되어있는 속성 = 메소드 
            },
          }
        });
      }