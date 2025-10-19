const search = document.getElementById('search')

async function getUser(query){
    // const host = await setHost()
    fetch(`https://itunes.apple.com/search?term=${query}&media=music&entity=musicVideo`)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        console.log(data)
        const results = data.results;
        const songList = document.querySelector('.song-list')
        results.forEach((ele) =>{
            const card = document.createElement('div')
            const img = document.createElement('div')
            const h1 = document.createElement('h1')
            h1.classList.add('heading')
            img.classList.add('img')
            card.classList.add('card')
            songList.appendChild(card)
            card.appendChild(img)
            card.appendChild(h1)
            h1.innerHTML = `<span>${ele.artistName.split(/,|&/).map(a => a.trim()).slice(0, 4).join(', ')}</span>
            <h1>${ele.trackName}</h1>
            <h1>${ele.primaryGenreName}</h1>
            <p>${ele.releaseDate.slice(0,-10)}</p>`

        })

    })
    .catch((err) =>{
        console.log(err)
    })
}

search.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        getUser(search.value);
        search.value = '';
    }
})