// const playBtn=document.querySelectorAll(".main-cards");

// const hoverBtn=document.getElementsByClassName("play-button");


// for(let i=0;i<playBtn.length;i++){

//     playBtn[i].addEventListener("mouseover",(e)=>{
//         playBtn[i].style.backgroundColor="#3b3b3b";
//         hoverBtn.style.zIndex="2";
//         hoverBtn.style.dsiplay="block";

//         });   
//         playBtn[i].addEventListener("mouseout",(e)=>{
//             playBtn[i].style.backgroundColor="#333333";
//             });
// }
const play0 = document.getElementById("play0");
const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const playtext = document.getElementById("play-text");

let isPlaying1 = true;
const playMusic1 = () => {
    isPlaying1 = false;
    play0.classList.replace("fa-play-circle", "fa-pause-circle");
    play1.classList.replace("fa-play-circle", "fa-pause-circle");
    play2.classList.replace("fa-play-circle", "fa-pause-circle");
    playtext.textContent = "PLAYING";
    playtext.style.color = "green"
    playtext.style.letterSpacing = "2px";
};
const pauseMusic1 = () => {
    isPlaying1 = true;
    play0.classList.replace("fa-pause-circle", "fa-play-circle");
    play1.classList.replace("fa-pause-circle", "fa-play-circle");
    play2.classList.replace("fa-pause-circle", "fa-play-circle");
    playtext.textContent = "PLAY IT";
    playtext.style.color = "black"
    playtext.style.letterSpacing = "2px";
};
play0.addEventListener("click", () => {
    isPlaying1 ? playMusic1() : pauseMusic1();
});
play1.addEventListener("click", () => {
    isPlaying1 ? playMusic1() : pauseMusic1();
});
play2.addEventListener("click", () => {
    isPlaying1 ? playMusic1() : pauseMusic1();
});