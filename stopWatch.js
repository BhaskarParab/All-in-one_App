const watch = document.getElementById("time");
const arrowBack = document.getElementById("back");
const reset = document.getElementById("reset");
const stoped = document.getElementById("stop");
const resume = document.getElementById('resume');

arrowBack.addEventListener("click",()=>{
    window.location.href="clock.html";
})

let intervalId = null;
let seconds = 0;

function updateWatch(){
    let hours = String(Math.floor(seconds/3600)).padStart(2,"0");
    let mins = String(Math.floor((seconds%3600)/60)).padStart(2,"0");
    let sec = String(Math.floor(seconds%60)).padStart(2,"0");

    let timeString = `${hours}:${mins}:${sec}`
    watch.textContent = timeString;
}

function startWatch(){
    if(intervalId) return;
    intervalId = setInterval(()=>{
        seconds++;
        updateWatch();
    },1000)
}

function stopWatch(){
    clearInterval(intervalId);
    intervalId = null;
}

reset.addEventListener("click",() =>{
    stopWatch();
    seconds = 0;
    updateWatch();
})

resume.addEventListener('click',() =>{
    startWatch()
})

stoped.addEventListener('click',() =>{
    stopWatch()
})

updateWatch();
startWatch();