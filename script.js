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
