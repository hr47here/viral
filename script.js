const playBtn = document.getElementById("playBtn");
const videoPlayer = document.getElementById("videoPlayer");
const playerFrame = document.getElementById("playerFrame");
const closeVideo = document.getElementById("closeVideo");

playBtn.onclick = function () {
    videoPlayer.style.display = "block";
    playerFrame.src = "https://drive.google.com/file/d/1pRJK-X5yiK9866JU4H88UQnfT5L62-rR/preview";
};

closeVideo.onclick = function () {
    videoPlayer.style.display = "none";
    playerFrame.src = "";
};
function playVideo(link){
    videoPlayer.style.display = "block";
    playerFrame.src = link + "?autoplay=1";
}
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const likeBtns = document.querySelectorAll(".likeBtn");

likeBtns.forEach((btn,index)=>{

    if(localStorage.getItem("like"+index)=="true"){
        btn.innerHTML="❤️ Liked";
        btn.classList.add("liked");
    }

    btn.onclick=function(){

        if(btn.classList.contains("liked")){
            btn.classList.remove("liked");
            btn.innerHTML="🤍 Like";
            localStorage.setItem("like"+index,false);
        }else{
            btn.classList.add("liked");
            btn.innerHTML="❤️ Liked";
            localStorage.setItem("like"+index,true);
        }

    };

});
