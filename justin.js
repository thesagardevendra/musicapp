const play0 = document.getElementById("play0");
const play1 = document.getElementById("play1");
const hoursPlay = document.getElementById("hoursPlay");
const peachesPlay = document.getElementById("peachesPlay");
const holdOnPlay = document.getElementById("holdOnPlay");
const likes = document.getElementById("likes");
const hours=document.getElementById("hours");
const holdOn=document.getElementById("hold-on");
const peaches=document.getElementById("peaches");
const musicName=document.getElementById("music-name");
const artistName=document.getElementById("artist-name");
const webProgressed1 = document.getElementById("web-progressed1");
const webProgress1 = document.getElementById("web-progress1");
const current_time = document.getElementById("current_time");
const nextSong=document.getElementById("nextSong");
let universal = true;

play1.addEventListener("click",(e)=>{
   playMusic1();
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
const backgroundImage=document.getElementById("background-image");
backgroundImage.style.backgroundImage="url('hours.jpg')"
peaches.pause();
peachesPlay.classList.replace("fa-pause-circle", "fa-play-circle");
holdOn.pause();
holdOnPlay.classList.replace("fa-pause-circle", "fa-play-circle");
})
// NextButton webplayer



// Hours Audio
hoursPlay.addEventListener("click", () => {
    universal ? playMusic1() : pauseMusic1();
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
    const backgroundImage=document.getElementById("background-image");
backgroundImage.style.backgroundImage="url('hours.jpg')"
peaches.pause();
peachesPlay.classList.replace("fa-pause-circle", "fa-play-circle");
holdOn.pause();
holdOnPlay.classList.replace("fa-pause-circle", "fa-play-circle");
});
const playMusic1 = () => {
    universal = false;
    hours.play();
    play0.classList.replace("fa-play-circle", "fa-pause-circle");
    play1.classList.replace("fa-play-circle", "fa-pause-circle");
    hoursPlay.classList.replace("fa-play-circle", "fa-pause-circle");

};
const pauseMusic1 = () => {
    universal = true;
    hours.pause();
    play0.classList.replace("fa-pause-circle", "fa-play-circle");
    play1.classList.replace("fa-pause-circle", "fa-play-circle");
    hoursPlay.classList.replace("fa-pause-circle", "fa-play-circle");
   
};
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
    const nextsong1 = () => {
        playMusic2();
    }
    const endmusic1 = () => {
        hoursPlay.classList.replace("fa-pause-circle", "fa-play-circle");
    }
    hours.addEventListener("ended", nextsong1);
    hours.addEventListener("ended", endmusic1);

// Peaches Audio
peachesPlay.addEventListener("click", () => {
    universal ? playMusic2() : pauseMusic2();
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
        const backgroundImage=document.getElementById("background-image");
    const img=document.createElement('img');
    img.src='https://i.scdn.co/image/ab67616d0000b273a01fed49fe3a84a9919cef29';
    backgroundImage.appendChild(img);
  
        hours.pause();
        hoursPlay.classList.replace("fa-pause-circle", "fa-play-circle");
        holdOn.pause();
        holdOnPlay.classList.replace("fa-pause-circle", "fa-play-circle");
});
const playMusic2= () => {
    universal = false;
    peaches.play();
    play0.classList.replace("fa-play-circle", "fa-pause-circle");
    play1.classList.replace("fa-play-circle", "fa-pause-circle");
    peachesPlay.classList.replace("fa-play-circle", "fa-pause-circle");
};
const pauseMusic2 = () => {
    universal = true;
    peaches.pause();
    play0.classList.replace("fa-pause-circle", "fa-play-circle");
    play1.classList.replace("fa-pause-circle", "fa-play-circle");
    peachesPlay.classList.replace("fa-pause-circle", "fa-play-circle");
};
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
 const nextsong2 = () => {
        playMusic3();
    }
    const endmusic2 = () => {
        peachesPlay.classList.replace("fa-pause-circle", "fa-play-circle");
    }
   peaches.addEventListener("ended", nextsong2);
    peaches.addEventListener("ended", endmusic2);

// Hold on Audio
holdOnPlay.addEventListener("click", () => {
    universal ? playMusic3() : pauseMusic3();
           holdOn.ontimeupdate = function (s) {
                webProgressed1.style.width = Math.floor(holdOn.currentTime * 100 /holdOn.duration) + "%";
                }
                webProgress1.onclick = function (s) {
                    holdOn.currentTime = ((s.offsetX / webProgress1.offsetWidth) * holdOn.duration)
                };
                holdOn.addEventListener("timeupdate", (Event) => {
                    const { currentTime, duration } = Event.target;
                    let min_currentTime = Math.floor(currentTime / 60);
                    let sec_currentTime = Math.floor(currentTime % 60);
                    current_time.textContent = `${min_currentTime}:${sec_currentTime}`;
                })
        musicName.textContent="Hold On";
        artistName.textContent="Justin Beiber";
  
        hours.pause();
        hoursPlay.classList.replace("fa-pause-circle", "fa-play-circle");
        peaches.pause();
       peachesPlay.classList.replace("fa-pause-circle", "fa-play-circle");
});
const playMusic3= () => {
    universal = false;
   holdOn.play();
    play0.classList.replace("fa-play-circle", "fa-pause-circle");
    play1.classList.replace("fa-play-circle", "fa-pause-circle");
    holdOnPlay.classList.replace("fa-play-circle", "fa-pause-circle");
};
const pauseMusic3 = () => {
    universal = true;
    holdOn.pause();
    play0.classList.replace("fa-pause-circle", "fa-play-circle");
    play1.classList.replace("fa-pause-circle", "fa-play-circle");
    holdOnPlay.classList.replace("fa-pause-circle", "fa-play-circle");
};
holdOn.ontimeupdate = function (s) {
    webProgressed1.style.width = Math.floor(holdOn.currentTime * 100 /holdOn.duration) + "%";
    }
    webProgress1.onclick = function (s) {
        holdOn.currentTime = ((s.offsetX / webProgress1.offsetWidth) * holdOn.duration)
    };
    holdOn.addEventListener("timeupdate", (Event) => {
        const { currentTime, duration } = Event.target;
        let min_currentTime = Math.floor(currentTime / 60);
        let sec_currentTime = Math.floor(currentTime % 60);
        current_time.textContent = `${min_currentTime}:${sec_currentTime}`;
    })
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

// Auto player



            