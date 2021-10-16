const play0 = document.getElementById("play0");
const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const hoursPlay = document.getElementById("hoursPlay");
const peachesPlay = document.getElementById("peachesPlay");
const likes = document.getElementById("likes");
const hours=document.getElementById("hours");
const peaches=document.getElementById("peaches");
const musicName=document.getElementById("music-name");
const artistName=document.getElementById("artist-name");
const webName=document.getElementById("music-web");
const webArtist=document.getElementById("web-artist");
const webProgressed1 = document.getElementById("web-progressed1");
const webProgress1 = document.getElementById("web-progress1");
const current_time = document.getElementById("current_time");
const nextSong=document.getElementById("nextSong");
let universal = true;

// NextButton webplayer
nextSong.addEventListener("click",(e)=>{
    universal ? playMusic1() : pauseMusic1();
    universal ? playMusic2() : pauseMusic2();
});


// Main Play Button
// play1.addEventListener("click", () => {
//     universal ? playMusic1() : pauseMusic1();
//               hours.ontimeupdate = function (s) {
//                 webProgressed1.style.width = Math.floor(hours.currentTime * 100 / hours.duration) + "%";
//                 }
//                 webProgress1.onclick = function (s) {
//                     hours.currentTime = ((s.offsetX / webProgress1.offsetWidth) * hours.duration)
//                 };
//                 hours.addEventListener("timeupdate", (Event) => {
//                     const { currentTime, duration } = Event.target;
//                     let min_currentTime = Math.floor(currentTime / 60);
//                     let sec_currentTime = Math.floor(currentTime % 60);
//                     current_time.textContent = `${min_currentTime}:${sec_currentTime}`;
//                 })
//         musicName.textContent="10,000 Hours";
//         artistName.textContent="Justin Beiber";
//         webName.textContent="10,000 Hours";
//         webArtist.textContent="Justin Beiber";
//         const backgroundImage=document.getElementById("background-image");
//     backgroundImage.style.backgroundImage="url('hours.jpg')"
// });

// Web player Play Button
// play0.addEventListener("click", () => {
//     universal ? playMusic1() : pauseMusic1();
//     // universal ? playMusic2() : pauseMusic2();
// });

// Hours Audio
hoursPlay.addEventListener("click", () => {
    universal ? playMusic1() : pauseMusic1();
    // play0.addEventListener("click", () => {
    //     universal ? playMusic1() : pauseMusic1();
    //     // universal ? playMusic2() : pauseMusic2();
    // });
    // play1.addEventListener("click", () => {
    //     universal ? playMusic1() : pauseMusic1(); 
    // });
          hours.ontimeupdate = function (s) {
            webProgressed1.style.width = Math.floor(hours.currentTime * 100 / hours.duration) + "%";
            }
            webProgress1.onclick = function (s) {
                hours.currentTime = ((s.offsetX / webProgress1.offsetWidth) * hours.duration)
            };
            hours.addEventListener("timeupdate", (Event) => {
                const { currentTime, duration } = Event.target;
                let min_currentTime = Math.floor(currentTime / 60);
                let sec_currentTime = Math.floor(currentTime % 60);
                current_time.textContent = `${min_currentTime}:${sec_currentTime}`;
            })
    musicName.textContent="10,000 Hours";
    artistName.textContent="Justin Beiber";
    webName.textContent="10,000 Hours";
    webArtist.textContent="Justin Beiber";
    const backgroundImage=document.getElementById("background-image");
backgroundImage.style.backgroundImage="url('hours.jpg')"
peaches.pause();
peachesPlay.classList.replace("fa-pause-circle", "fa-play-circle");
});
const playMusic1 = () => {
    universal = false;
    hours.play();
    play0.classList.replace("fa-play-circle", "fa-pause-circle");
    play1.classList.replace("fa-play-circle", "fa-pause-circle");
    play2.classList.replace("fa-play-circle", "fa-pause-circle");
    hoursPlay.classList.replace("fa-play-circle", "fa-pause-circle");

};
const pauseMusic1 = () => {
    universal = true;
    hours.pause();
    play0.classList.replace("fa-pause-circle", "fa-play-circle");
    play1.classList.replace("fa-pause-circle", "fa-play-circle");
    play2.classList.replace("fa-pause-circle", "fa-play-circle");
    hoursPlay.classList.replace("fa-pause-circle", "fa-play-circle");
   
};


// Peaches Audio
peachesPlay.addEventListener("click", () => {
    universal ? playMusic2() : pauseMusic2();

    // play0.addEventListener("click", () => {
    //     // universal ? playMusic1() : pauseMusic1();
    //     universal ? playMusic2() : pauseMusic2();
    // });
    // play1.addEventListener("click", () => {
    //     universal ? playMusic2() : pauseMusic2(); 
    // });
           peaches.ontimeupdate = function (s) {
                webProgressed1.style.width = Math.floor(peaches.currentTime * 100 / peaches.duration) + "%";
                }
                webProgress1.onclick = function (s) {
                    peaches.currentTime = ((s.offsetX / webProgress1.offsetWidth) * peaches.duration)
                };
                peaches.addEventListener("timeupdate", (Event) => {
                    const { currentTime, duration } = Event.target;
                    let min_currentTime = Math.floor(currentTime / 60);
                    let sec_currentTime = Math.floor(currentTime % 60);
                    current_time.textContent = `${min_currentTime}:${sec_currentTime}`;
                })
        musicName.textContent="Peaches";
        artistName.textContent="Justin Beiber";
        webName.textContent="Peaches";
        webArtist.textContent="Justin Beiber";
        const backgroundImage=document.getElementById("background-image");
    backgroundImage.style.backgroundImage="url('peaches.jpg')"
    backgroundImage.style.objectFit="cover";
        hours.pause();
        hoursPlay.classList.replace("fa-pause-circle", "fa-play-circle");
});
const playMusic2= () => {
    universal = false;
    peaches.play();
    play0.classList.replace("fa-play-circle", "fa-pause-circle");
    play1.classList.replace("fa-play-circle", "fa-pause-circle");
    play2.classList.replace("fa-play-circle", "fa-pause-circle");
    peachesPlay.classList.replace("fa-play-circle", "fa-pause-circle");
};
const pauseMusic2 = () => {
    universal = true;
    peaches.pause();
    play0.classList.replace("fa-pause-circle", "fa-play-circle");
    play1.classList.replace("fa-pause-circle", "fa-play-circle");
    play2.classList.replace("fa-pause-circle", "fa-play-circle");
    peachesPlay.classList.replace("fa-pause-circle", "fa-play-circle");
};


// Likes Button
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


        //     const progressed1 = document.getElementById("progressed1");
        //     const progress1 = document.getElementById("progress1");
        //   hours.ontimeupdate = function (e) {
        //         progressed1.style.width = Math.floor(hours.currentTime * 100 / hours.duration) + "%";
        //     };
            
        //     progress1.onclick = function (e) {
        //         hours.currentTime = ((e.offsetX / progress1.offsetWidth) * hours.duration)
        //     }


        


            