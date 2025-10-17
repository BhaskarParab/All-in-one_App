const clock = document.getElementById("clock");
const toDo = document.getElementById('todo');
const weather = document.getElementById('weather')
const news = document.getElementById('news')
const tracker = document.getElementById('tracker')

clock.addEventListener("click",function(){
    window.location.href = "clock.html"
})


toDo.addEventListener('click',()=>{
    window.location.href = "Todo.html";
})

weather.addEventListener('click', () => {
    window.location.href = 'weather.html'
})

news.addEventListener('click', () => {
    window.location.href = 'news.html'
})

tracker.addEventListener('click', () => {
    window.location.href = 'tracker.html'
})