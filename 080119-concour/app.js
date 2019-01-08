let quotes = ["If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit.",
 "The American Dream is a term that is often used but also often misunderstood. It isn't really about becoming rich or famous. It is about things much simpler and more fundamental than that",
 "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before",
 "Everybody gets so much information all day long that they lose their common sense",
 "TEST"];

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var entier = entierAleatoire(0, 3);

document.getElementById("quote").innerHTML = quotes[entier];


















let second = 0;
let minutes = 0;
let hour = 0;
let interval= null;
let status = "stopped";

let displaySecond = 0;
let displayMinutes = 0;
let displayHour = 0;

function stopwatch(){
    second++;

    if(second / 60 ==1){
        second=0;
        minutes++;
        if(minutes / 60 ==1){
            minutes=0;
            hour++;
        }

    }

if(second < 10){
    displaySecond = "0"+second.toString();
}else{
    displaySecond = second;
}
if(minutes < 10){
    displayMinutes = "0"+minutes.toString();
}else{
    displayMinutes = minutes;
}
if(hour < 10){
    displayHour = "0"+hour.toString();
}else{
    displayHour = hour;
}
    document.getElementById("watch").innerHTML = displayHour + ":" + displayMinutes +":"+ displaySecond;

}

// window.setInterval(stopwatch, 1000);

function start(){
    if(status ==="stopped"){
        interval = window.setInterval(stopwatch, 1000);
        status = "started";
    } 


    }
    
    function restart(){
        if(status ==="stopped"){
            interval = window.setInterval(stopwatch, 1000);
            status = "started";
        } 
    
    
        }
        

function reset(){
    
        window.clearInterval(interval);
        document.getElementById("watch").innerHTML = "00:00:00";
        second = 0;
        minutes = 0;
        hour = 0;
        status = "stopped";
    
     

}

function stop(){
    if(status === "started"){
        window.clearInterval(interval);
      //  document.getElementById("start").innerHTML = "Restart";
        status = "stopped";
        document.getElementById("result").innerHTML= displayHour + ":" + displayMinutes +":"+ displaySecond;
    }
     

}



function compare() {
    
    let inValue = document.getElementById("in").value;

    if(quotes[entier] == inValue) {
        alert("GOOD JOB")
    }
    else{
        alert("TEXT DOES NOT MATCH")
    }
}

console.log( inValue);


