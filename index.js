function clock(){
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm="AM"
    
    if (hours>12) {
        hours=hours-12;
        amorpm="PM"
    }
    if (hours==0) {
        amorpm="AM"
    }
    if (hours<10) {
        hours="0" + hours;
    }
    if (minutes < 10) {
        minutes="0" + minutes;
    }
    if (seconds < 10) {
        seconds="0" + seconds;
    }
    
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("am").innerHTML=amorpm;
    
    
    
}

setInterval(clock,1000);



function makeDiv(){
    var container=document.createElement("div");
    container.id="dynamic-block";

    document.getElementById("big-box").appendChild(container);

    var fetchvalue=document.getElementById("wakeuptime");
    var value=fetchvalue.options[fetchvalue.selectedIndex].text;

    var fetchvalue1=document.getElementById("lunchtime");
    var value1=fetchvalue1.options[fetchvalue1.selectedIndex].text;

    var fetchvalue2=document.getElementById("naptime");
    var value2=fetchvalue2.options[fetchvalue2.selectedIndex].text;
    
    container.innerText="Wake Up Time : " + value + "\n" +
    "Lunch Time : " + value1 + "\n" + "Nap Time : " + value2;
}



function settime(){
    var a=document.getElementById("wakeuptime").value;
        var hourr = new Date().getHours();
    
        if (a==hourr) {
            document.getElementById("picture").style.background="url(./images/wakeup_image.svg) 100%  95% no-repeat";        
            document.getElementById("caption").innerHTML="Wake Up !!";
        }

        var b=document.getElementById("lunchtime").value;
        var hourr1 = new Date().getHours();
        if (b==hourr1) {
            document.getElementById("picture").style.background="url(./images/lunch_image.svg) 80% 104% no-repeat";        
            document.getElementById("caption").innerHTML="Lets Have Some Lunch !!";
        }

        var c=document.getElementById("naptime").value;
        var hourr2 = new Date().getHours();
        if (c==hourr2) {
            document.getElementById("picture").style.background="url(./images/goodnight_image.svg)  65%  95% no-repeat";        
            document.getElementById("caption").innerHTML="Good Night!!";
        }

         makeDiv();
    }