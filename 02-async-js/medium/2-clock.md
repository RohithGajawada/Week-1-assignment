Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

fiunction printTime(){
    var date = new Date();

    var hr = date.getHours();

    if(hr > 12){
        hr = hr - 12;
        var ans =  hr + ":" + date.getMinutes() + ":" + date.getSeconds() + " PM";
        console.log(ans);
    }

    var ans =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()+ " AM";

    console.log(ans);
}


function getTime(){
    console.clear();
    printTime();
}

setInterval(getTime(), 1000);