console.log("page loaded...");
function myFunction1() {
    const element = document.getElementById("demo1");
    element.remove();
}
function myFunction2() {
    const element = document.getElementById("demo2");
    element.remove();
}
function myFunction() { 
    var link = document.querySelector("h2");
    link.getAttribute("h2");
    link.setAttribute("h2",
        "Danah");
    link.textContent = "Danah B";
}