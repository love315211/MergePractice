var player;
var currentPlay = 0;


function onYouTubeIframeAPIReady(){    

    player = new YT.Player("player",
        {
            height:"390",
            width:"640",
            videoId:playList[currentPlay],
            playerVars:{
                "autoplay":0,
                "controls":0,
                "start":playTime[currentPlay][0],
                "end":playTime[currentPlay][1],
                "showinfo":0,
                "rel":0,
                "iv_load_policy":3
            },
            events:{
                "onReady":onplayerReady,
                "onStateChange":onplayerStateChange
            }
        }
    );
}
function onplayerReady(event){

    $("playButton").click(function(){
        $("h2").text(plater.getVideoData().title);
        plater.platVideo();
    });
}
function onplayerStateChange(event){

    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){

        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playList[currentPlay][0],
                "endSeconds":playList[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{
            currentPlay= 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playList[currentPlay][0],
                "endSeconds":playList[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }
}
