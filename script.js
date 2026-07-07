const playBtn=document.getElementById("playBtn");
const videoPlayer=document.getElementById("videoPlayer");
const playerFrame=document.getElementById("playerFrame");
const closeVideo=document.getElementById("closeVideo");

playBtn.onclick=function(){

videoPlayer.style.display="block";

playerFrame.src="https://drive.google.com/file/d/1pRJK-X5yiK9866JU4H88UQnfT5L62-rR/preview?autoplay=1";

}

closeVideo.onclick=function(){

videoPlayer.style.display="none";

playerFrame.src="";

}            card.style.display="none";

        }

    });

});

// Smooth scroll
document.documentElement.style.scrollBehavior="smooth";

// Fade animation
window.addEventListener("load",function(){

    document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition="opacity .8s";
