function show() {
    var x = document.getElementById("file");
    var z = document.getElementById("slider_container");
    var o = document.getElementById("number_container");
    var y = document.getElementById("reason_for_contact");
    if (y.value === "value_four" || y.value === "value_five") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
    if (y.value === "value_one" || y.value === "value_five") {
        z.style.display = "block";
    }
    else {
        z.style.display = "none";
    }
    if (y.value === "value_one" || y.value === "value_two" || y.value === "value_five") {
        o.style.display = "block";
    }
    else {
        o.style.display = "none";
    }
}

var slider = document.getElementById("range");
var output = document.getElementById("grade");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


function checkNumber() {
    let a = document.getElementById("number").value;
    let text;
    if (isNaN(a) || a < 1 || a > 3) {
        text = "Epizode neeksistē";
    } else {
        text = "";
    }
    document.getElementById("warning").innerHTML = text;
    document.getElementById("warning").style.color = "red";
    document.getElementById("warning").style.fontSize = "20px";
    document.getElementById("warning").style.paddingTop = "5%";
    document.getElementById("warning").style.paddingBottom = "5%";
}

function audio() {
    document.getElementById("audio").style.display = "block";
}

document.getElementById("cover").onclick = function () { 
    document.getElementById("audio").style.display = "block";
}
 

