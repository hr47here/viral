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

searchBox.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    const hero = document.querySelector(".hero");
    const sections = document.querySelectorAll(".section");

    if(value===""){
        hero.style.display="block";

        sections.forEach(section=>{
            section.style.display="block";

            const cards=section.querySelectorAll(".card");

            cards.forEach(card=>{
                card.style.display="";
            });
        });

        return;
    }

    hero.style.display="none";

    sections.forEach(section=>{

        let found=false;

        const cards=section.querySelectorAll(".card");

        cards.forEach(card=>{

            if(card.innerText.toLowerCase().includes(value)){
                card.style.display="";
                found=true;
            }else{
                card.style.display="none";
            }

        });

        section.style.display=found ? "block" : "none";

    });

});

const likeBtns = document.querySelectorAll(".likeBtn");

likeBtns.forEach((btn,index)=>{

    if(localStorage.getItem("like"+index)=="true"){
        btn.innerHTML="❤️ Liked";
        btn.classList.add("liked");
    }

    btn.onclick = function(event) {
    event.stopPropagation();

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
const shareBtns = document.querySelectorAll(".shareBtn");

shareBtns.forEach(btn => {

    btn.addEventListener("click", async function(e){

        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        try{
            await navigator.share({
                title:"hr47here",
                text:"Watch this video",
                url:window.location.href
            });
        }catch(err){}

    }, true);

});

const menuToggle=document.getElementById("menuToggle");
const menu=document.getElementById("menu");

menuToggle.onclick=function(){

menu.classList.toggle("active");

                }
window.addEventListener("scroll", function () {

const nav = document.querySelector("nav");

if(window.scrollY > 30){
    nav.style.background = "rgba(0,0,0,0.95)";
    nav.style.backdropFilter = "blur(15px)";
}else{
    nav.style.background = "rgba(0,0,0,0.85)";
    nav.style.backdropFilter = "blur(10px)";
}

});
const reveals = document.querySelectorAll(".section");

window.addEventListener("scroll", reveal);

function reveal(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight-100){
            section.classList.add("active");
        }

    });

}

reveals.forEach(section=>{
    section.classList.add("reveal");
});

reveal();
