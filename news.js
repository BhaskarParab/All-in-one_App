const arrowBack = document.getElementById("back");
const input = document.getElementById("input");
const card = document.getElementById("card");
const business = document.getElementById('business')
const entertainment = document.getElementById('entertainment')
const technology = document.getElementById('technology')
const science = document.getElementById('science')
const sports = document.getElementById('sports')

// Create a container once and append it to body
const page = document.createElement("div");
page.classList.add("page");
document.body.appendChild(page);

function renderArticles(articles){
   
   // Clear previous content
  page.innerHTML = "";

  articles.forEach((article) => {
        const card = document.createElement("div");
        const image = document.createElement("div");
        card.classList.add("card");
        image.classList.add("image");
        const h1 = document.createElement("h1");
        h1.classList.add("h1");
        h1.innerHTML = article.title;
        image.style.backgroundImage = `url(${article.urlToImage})`;
        image.style.width = "370px";
        image.style.height = "200px";
        image.style.backgroundSize = "contain";
        image.style.backgroundPosition = "center";
        // card.style.border = '2px solid white'
        card.appendChild(image);
        card.appendChild(h1);
        page.appendChild(card);
        document.body.appendChild(page);
        console.log(article);
        card.addEventListener("click", () => {
          window.open(`${article.url}`, "_blank");
        });
      });
    }

function fetchData(query) {
  fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${NewsAPI}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      renderArticles(data.articles)
      })
    .catch((err) => {
      console.log(err);
    });
}

// function fetchCategory(query){
//   fetch(`https://newsapi.org/v2/sources?category=${query}&apiKey=${NewsAPI}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data)
//       renderArticles(data.articles)
//       })
//     .catch((err) => {
//       console.log(err);
//     });
// }

function homeData() {
  fetchData("general");
}

homeData();

//event listeners

arrowBack.addEventListener("click", () => {
  window.location.href = "home.html";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchData(input.value);
    input.value = "";
  }
});

business.addEventListener('click', () =>{
  fetchData('business')
})

entertainment.addEventListener('click', () =>{
  fetchData('entertainment')
})

technology.addEventListener('click', () =>{
  fetchData('technology')
})

science.addEventListener('click', () =>{
  fetchData('science')
})

sports.addEventListener('click', () =>{
  fetchData('sports')
})