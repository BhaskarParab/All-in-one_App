const search = document.getElementById("search");

async function getUser(query) {
  fetch(
    `https://itunes.apple.com/search?term=${query}&media=music&entity=musicVideo`
  )
    .then((res) => res.json())
    .then((data) => {
      const results = data.results;
      const error = data.resultCount;
      const songList = document.querySelector(".song-list");
      songList.innerHTML = "";
      
      let errorDisplay = document.createElement('div')
      errorDisplay.classList.add('error-display')
      songList.appendChild(errorDisplay);
      if(error === 0){
        errorDisplay.innerHTML = 'Song not available'
        document.body.appendChild(songList)
      }
      else{
        errorDisplay.innerHTML = ''
        songList.removeChild(errorDisplay)
      }

      results.forEach((ele) => {
        const card = document.createElement("div");
        const img = document.createElement("div");
        const h1 = document.createElement("h1");

        h1.classList.add("heading");
        img.classList.add("img");
        card.classList.add("card");
        songList.appendChild(card);
        card.appendChild(img);
        card.appendChild(h1);

        const ms = ele.trackTimeMillis;
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const formattedTime = `${minutes}:${seconds
          .toString()
          .padStart(2, "0")}`;

        card.dataset.preview = ele.previewUrl;
        card.dataset.artist = ele.artistName;
        card.dataset.track = ele.trackName;

        h1.innerHTML = `
          <span>${ele.artistName
            .split(/,|&/)
            .map((a) => a.trim())
            .slice(0, 4)
            .join(", ")}</span>
          <h1>${ele.trackName}</h1>
          <h1>${ele.primaryGenreName}</h1>
          <p>${ele.releaseDate.slice(0, -10)}</p>
          `;
      });

      attachListener();
    })
    .catch((err) => console.log(err));
}

function attachListener() {
  const songList = document.querySelector(".song-list");

  let audio = document.querySelector("audio");
  if (!audio) {
    audio = document.createElement("audio");
    audio.style.display = "none";
    document.body.appendChild(audio);
  }

  songList.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    let musicContainer = document.querySelector(".music-container");
    if (!musicContainer) {
      musicContainer = document.createElement("div");
      musicContainer.classList.add("music-container");
      musicContainer.appendChild(search);
      document.body.prepend(musicContainer);
    }

    let info = musicContainer.querySelector(".info");
    if (!info) {
      info = document.createElement("div");
      info.classList.add("info");
      musicContainer.appendChild(info);
    }

    info.innerHTML = "";
    
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');
    
    const progressBar = document.createElement('div')
    progressBar.classList.add('progress-bar')

    const backBtn = document.createElement("div");
    backBtn.classList.add("play-backward");

    const playBtn = document.createElement("div");
    playBtn.classList.add("music-player");

    const forwardBtn = document.createElement("div");
    forwardBtn.classList.add("play-forward");

    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player-controls");

    const buttonControls = document.createElement("div");
    buttonControls.classList.add("button-controls");

    progressContainer.appendChild(progressBar);

    buttonControls.appendChild(backBtn);
    buttonControls.appendChild(playBtn);
    buttonControls.appendChild(forwardBtn);

    playerDiv.appendChild(progressContainer);
    playerDiv.appendChild(buttonControls);

    info.appendChild(playerDiv);

    const span = document.createElement("span");
    const span_song = document.createElement("span");
    span.textContent = card.dataset.artist
      .split(/,|&/)
      .map((a) => a.trim())
      .slice(0, 4)
      .join(", ");
    
    span_song.textContent = card.dataset.track
    info.appendChild(span);
    info.appendChild(span_song)

    audio.src = card.dataset.preview;
    audio.pause();

    // Toggle Play / Pause
    playBtn.onclick = () => {
      if (audio.paused) {
        audio.play();
        playBtn.classList.remove("music-player");
        playBtn.classList.add("pause");
      } else {
        audio.pause();
        playBtn.classList.remove("pause");
        playBtn.classList.add("music-player");
      }
    };

    audio.addEventListener('timeupdate', () =>{
      const progressPercent = (audio.currentTime / audio.duration) * 100;

      progressBar.style.width = `${progressPercent}%`
    })

    // Seek backward 5s
    backBtn.onclick = () => {
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    };

    // Seek forward 5s
    forwardBtn.onclick = () => {
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    };

    audio.onended = () => {
      playBtn.classList.remove("pause");
      playBtn.classList.add("music-player");
    };
  });
}

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getUser(search.value);
    search.value = "";
  }
});