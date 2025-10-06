const clock = document.getElementById("clock");
const toDo = document.getElementById('todo')


clock.addEventListener("click",function(){
    window.location.href = "clock.html"
})


toDo.addEventListener('click',()=>{
    window.location.href = "Todo.html";
})