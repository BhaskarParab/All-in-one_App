const clock = document.getElementById("clock");
const toDo = document.getElementById('todo');
const weather = document.getElementById('weather')


clock.addEventListener("click",function(){
    window.location.href = "clock.html"
})


toDo.addEventListener('click',()=>{
    window.location.href = "Todo.html";
})

weather.addEventListener('click', () => {
    window.location.href = 'weather.html'
})