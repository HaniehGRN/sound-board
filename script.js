const audios = document.querySelectorAll(".adu");
const container = document.querySelector("#btncontainer");

audios.forEach(audio => {

    console.log(audio);
    const btn = document.createElement("button");
    btn.classList.add("btn");
    container.appendChild(btn);
    btn.innerText = audio.getAttribute("id");
    btn.addEventListener("click", () => {
        StopOtherSongs();
        audio.play();
    })

})

function StopOtherSongs(audio) {

    audios.forEach(Adu => {
        Adu.pause();
        Adu.currentTime = 0;
    })

}