console.log("page loaded..."); 

function over(element) {
    document.getElementById("v").addEventListener("mouseover", function(){this.play();})
}

function out(element) {
    document.getElementById("v").addEventListener("mouseout", function(){this.pause();})
} 


onmouseover="over(this)"
onmouseout="out(this)"