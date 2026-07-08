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
