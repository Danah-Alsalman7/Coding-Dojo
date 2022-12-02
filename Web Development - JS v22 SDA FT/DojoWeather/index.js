function myFunction1() {
    const element = document.getElementById("footer");
    element.remove();
}
function Loading() {
    alert("Loading weather report...");
}
function C(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function F(temp){
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = F(tempVal);
        } else  {
            tempSpan.innerText = C(tempVal);
        }
    }
}
