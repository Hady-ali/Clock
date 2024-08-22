// create a clock function
function updateClock() {

    const date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";
    // hour = hour %  12;
    // hour = hour ? hour : 12 ;

    var crretime = hour + ":" + minute + ":" + second + " " + ampm;

    document.querySelector("#hady").innerHTML = crretime;
    
}
setInterval( updateClock , 1000);
updateClock();



