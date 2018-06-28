/*
* @Author: Marte
* @Date:   2018-06-11 16:29:35
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-11 17:04:51
*/

'use strict';
function createVideoControls(){
    var vids = document.getElementsByTagName("video");
    for(i=0;i<vids.length;i++){
        addControls()
    }
}

function addControls(vid){
    vid.removeAttribute('controls');
    vid.height = vid.videoHeight;
    vid.width = vid.videoWidth;
    vid.parentNode.style.height = vid.videoHeight +'px';
    vid.parentNode.style.width = vid.videoWidth + 'px';

    var controls = document.createElement("div");
    controls.setAttribute('class','controls')

    var play = document.createElement("button")
    play.setAttribute('title','play');
    play.innerHTML = '&#25BA';
    controls.appendChild(play);

    vid.parentNode.insertBefore('controls,vid');

    play.onclick = function(){
        if(vid.ended){
            vid.currentTime = 0;
        }

        if(vid.paused){
            vid.play();
        }else{
            vid.pause()
        }
    }

    vid.addEventListener('play', function(){
        play.innerHTML = '&#x2590;&#x2590;';
        play.setAttribute('pause',true)
    },false);

    vid.addEventListener('pause', function(){
        play.removeAttribute('pause');
        play.innerHTML = '&#x25BA';
    }, false);

    vid.addEventListener('ended', function(){
        vid.pause();
    }, false)

}

window.onload = function(){
    createVideoControls();
}