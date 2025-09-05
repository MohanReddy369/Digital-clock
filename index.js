const hour_element=document.getElementById("hours")
const minute_element=document.getElementById("minutes")
const second_element=document.getElementById("seconds")
const ampm_element=document.getElementById("ampm")

function updateclock(){
    let h =new Date().getHours()
    let m =new Date().getMinutes()
    let s =new Date().getSeconds()
    let ampm ="AM"
    if(h>12){
        h=h-12
        ampm="PM"
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hour_element.innerText = h;
    minute_element.innerText = m;
    second_element.innerText = s;
    ampm_element.innerText = ampm;
}
setInterval(updateclock, 1000);
