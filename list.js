let playbutton = document.getElementById("play");
let newMusic1 = new Audio("music-1.mp3")
let newMusic2 = new Audio("music-2.mp3")
let carddev1 = document.getElementById("card-dev1")
let carddev2 = document.getElementById("card-dev2")
let playbar = document.getElementById("play-song");
let pausebutton = document.getElementById("pause")
let sliderpointer = document.getElementById("sliderpointer")

// checked whether the currenttime is 0 or not
if (newMusic1.currentTime == 0 && newMusic2.currentTime == 0) {
    playbar.style.display = "none";
}

carddev1.addEventListener("click", () => {
    playbar.style.display = "block"
    newMusic1.play()
    playbutton.style.display = "none"
    pausebutton.style.display = "block"
    newMusic2.pause()
    newMusic2.currentTime = 0
})

carddev2.addEventListener("click", () => {
    playbar.style.display = "block"
    newMusic2.play()
    playbutton.style.display = "none"
    pausebutton.style.display = "block"
    newMusic1.pause()
    newMusic1.currentTime = 0
})

function playpauseMusic() {
    console.log(newMusic1.currentTime)
    console.log(newMusic2.currentTime)
    if (newMusic1.paused && newMusic1.currentTime > 0 && newMusic2.currentTime == 0) {
        newMusic1.play()
        playbutton.style.display = "none"
        pausebutton.style.display = "block"
        newMusic2.currentTime = 0
    } else if (!newMusic1.paused && newMusic1.currentTime > 0 && newMusic2.currentTime == 0) {
        newMusic1.pause()
        playbutton.style.display = "block"
        pausebutton.style.display = "none"
        newMusic2.currentTime = 0
    } else if (newMusic2.paused && newMusic1.currentTime == 0 && newMusic2.currentTime > 0) {
        newMusic2.play()
        playbutton.style.display = "none"
        pausebutton.style.display = "block"
        newMusic1.currentTime = 0
    } else {
        newMusic2.pause()
        playbutton.style.display = "block"
        pausebutton.style.display = "none"
        newMusic1.currentTime = 0
    }
}

newMusic1.addEventListener("timeupdate", () => {
    let timepercentage = (newMusic1.currentTime / newMusic1.duration) * 100;
    sliderpointer.style.left= timepercentage + "%"
})

newMusic2.addEventListener("timeupdate", () => {
    let timepercentage = (newMusic2.currentTime / newMusic2.duration) * 100;
    sliderpointer.style.left = timepercentage + "%"
})

playbutton.addEventListener("click", playpauseMusic)
pausebutton.addEventListener("click", playpauseMusic)