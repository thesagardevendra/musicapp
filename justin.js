const play0 = document.getElementById("play0");
const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const likes = document.getElementById("likes");
const hours=document.getElementById("hours");
let universal = true;

const playMusic1 = () => {
    universal = false;
    hours.play();
    play0.classList.replace("fa-play-circle", "fa-pause-circle");
    play1.classList.replace("fa-play-circle", "fa-pause-circle");
    play2.classList.replace("fa-play-circle", "fa-pause-circle");

};
const pauseMusic1 = () => {
    universal = true;
    hours.pause();
    play0.classList.replace("fa-pause-circle", "fa-play-circle");
    play1.classList.replace("fa-pause-circle", "fa-play-circle");
    play2.classList.replace("fa-pause-circle", "fa-play-circle");

};
play0.addEventListener("click", () => {
    universal ? playMusic1() : pauseMusic1();
});
play1.addEventListener("click", () => {
    universal ? playMusic1() : pauseMusic1();
});
play2.addEventListener("click", () => {
    universal ? playMusic1() : pauseMusic1();
});
let isLikes = true;
const likesTrue = () => {
    universal = false;
    likes.style.color = "red";
};
const likesFalse = () => {
    universal = true;
    likes.style.color = "white";
}
likes.addEventListener("click", (e) => {
    universal ? likesTrue() : likesFalse();
});
const followButton = document.getElementById("follow-button");
const followTrue = () => {
    universal = false;
    followButton.textContent = "FOLLOWING";
    followButton.style.borderColor = "grey";
    followButton.style.color = "grey"
};
const followFalse = () => {
    universal = true;
    followButton.textContent = "FOLLOW";
    followButton.style.backgroundColor = "transparent"
    followButton.style.borderColor = "white";
    followButton.style.color = "white"
}
followButton.addEventListener("click", (e) => {
    universal ? followTrue() : followFalse();
});


const followersNum = document.getElementById("followers-num");
