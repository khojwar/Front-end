setInterval(digitalClock, 1000);

function digitalClock() {
    let time = new Date()
    let hr = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    am_pm = "AM"


    if (hr > 12) {
        hr -= 12
        am_pm = "PM"
    }


    if (hr == 0) {
        hr = 12
        am_pm = "AM"
    }

    hr = hr<10 ? "0"+ hr : hr
    min = min<10 ? "0" + min : min
    sec = sec<10 ? "0" + sec : sec

 
    hours.innerHTML = hr 
    minutes.innerHTML = min  
    seconds.innerHTML = sec
    symbol1.innerHTML = ":"
    symbol2.innerHTML = ":"
    ampm.innerHTML = am_pm
}


