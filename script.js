// Play button
document.getElementById("playBtn").addEventListener("click", function () {

    // Replace with your video link
    window.open("https://YOUR_VIDEO_LINK_HERE", "_blank");

});

// Card click
document.querySelectorAll(".card").forEach(function(card){

    card.addEventListener("click",function(){

        alert("Add your video link here.");

    });

});

// Search
const search=document.querySelector(".search input");

search.addEventListener("keyup",function(){

    let value=this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(function(card){

        let title=card.innerText.toLowerCase();

        if(title.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

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
