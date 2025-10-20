const search = document.getElementById("search");

async function getUser(query) {
  // const host = await setHost()
  fetch(
    `https://itunes.apple.com/search?term=${query}&media=music&entity=musicVideo`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const results = data.results;
      const songList = document.querySelector(".song-list");
      songList.innerHTML = "";
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
        h1.innerHTML = `<span>${ele.artistName
          .split(/,|&/)
          .map((a) => a.trim())
          .slice(0, 4)
          .join(", ")}</span>
            <h1>${ele.trackName}</h1>
            <h1>${ele.primaryGenreName}</h1>
            <p>${ele.releaseDate.slice(0, -10)}</p>
            <h2>${formattedTime}</h2>`;
      });

      attachListener();
    })
    .catch((err) => {
      console.log(err);
    });
}

function attachListener() {
  const songList = document.querySelector(".song-list");
  const playBackward = document.createElement('div')
  playBackward.classList.add('play-backward')
  const playForward = document.createElement('div')
  playForward.classList.add('play-forward')
  const pause = document.createElement('div')
  pause.classList.add('pause')

  let audio = document.querySelector("audio");
  if (!audio) {
    audio = document.createElement("audio");
    audio.style.display = "none"; // hide the default player
    document.body.appendChild(audio);
  }

  songList.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    let musicContainer = document.querySelector(".music-container");
    if (!musicContainer) {
      musicContainer = document.createElement("div");
      musicContainer.classList.add("music-container");
      musicContainer.appendChild(search); // keep search inside container
      document.body.prepend(musicContainer);
    }

    let info = musicContainer.querySelector(".info");
    if (!info) {
      info = document.createElement("div");
      info.classList.add("info");
      musicContainer.appendChild(info);
    }

    info.innerHTML = "";


    let playerDiv = document.createElement("div");
    playerDiv.classList.add("music-player"); // style with CSS SVG
    info.appendChild(playerDiv);

    let span = document.createElement("span");
    span.textContent = card.dataset.artist
      .split(/,|&/)
      .map((a) => a.trim())
      .slice(0, 4)
      .join(", ");
    info.appendChild(span);

    audio.src = card.dataset.preview;
    audio.pause();
    
    const playForward = document.querySelector('.play-forward')
    const playBackward = document.querySelector('.play-backward')
    
    
    playerDiv.onclick = () => {
      if (audio.paused) {
        audio.play();
      } else {
        const pause = document.querySelector('.pause')
        document.audio.replaceWith(pause)
        audio.pause();
      }
    };
  });
}

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getUser(search.value);
    search.value = "";
  }
});
