const watch = document.getElementById("time")
const arrowBack = document.getElementById("back")
const stopWatch = document.getElementById("stopwatch")

arrowBack.addEventListener("click",()=>{
    window.location.href="home.html";
})

function startClock(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    //if time is single digit then add 0 to the first digit
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    //displaying the time
    let timeString = hours>12?`${hours}:${minutes}:${seconds} PM`:`${hours}:${minutes}:${seconds} AM`
    watch.textContent = timeString;

}

startClock()

setInterval(startClock,1000)

stopWatch.addEventListener("click",()=>{
    window.location.href = "stopwatch.html"
})