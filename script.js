setInterval(showTime,1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let secs = time.getSeconds();
    let millisec=time.getMilliseconds();
    let date = time.getDate();
    let month = time.getMonth() +1;
    let year = time.getFullYear();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[time.getDay()];
    am_pm = "am";
    if (hour > 12) {
        // hour-=12
        am_pm = "pm";
    }
    else if (hour == 12) {
        am_pm = "am";
    }
    hour=(hour<10)?"0"+hour:hour;
    min=(min<10)?"0"+min:min;
    secs=(secs<10)?"0"+secs:secs;
    let curTime =
        hour +
        ":" +
        min +
        ":" +
        secs+
        am_pm;

    let curDate =
        date +
        "/" +
        month +
        "/" +
        year;
    let curDay =
        day;
    document.getElementById("Clock").innerHTML = curTime;
    document.getElementById("Date").innerHTML = curDate;
    document.getElementById("Day").innerHTML=curDay;
}

showTime();