var minutes = 0;
var second = 0;
var mili = 0;
var interval;
var minHeading = document.getElementById("minutes");
var secHeading = document.getElementById("second");
var msecHeading = document.getElementById("mili");
function timer(){
    mili++
    msecHeading.innerHTML = mili;
    if(mili >= 100){
        second++
        secHeading.innerHTML = second;
        mili = 0;
    }
    else if(second >= 60){
        minutes++
        minHeading.innerHTML = minutes;
        second = 0;
    }
}
function Start(){
    interval = setInterval(timer,10);
    document.getElementById("Start").disabled = true;
    document.getElementById("Pause").disabled = false;
}    
function Pause(){
    clearInterval(interval);
    document.getElementById("Pause").disabled = true;
    document.getElementById("Start").disabled = false;
}
function Reset(){
     minutes = 0;
     second = 0;
     mili = 0;
    secHeading.innerHTML = second;
    minHeading.innerHTML = minutes;
    msecHeading.innerHTML = mili;
    clearInterval(interval);
}