document.getElementById("doit").addEventListener("click", doIt, false);
document.getElementById("doit_too").addEventListener("click", doItToo, false);
document.getElementById("biggest").addEventListener("click", biggest, false);
document.getElementById("smaller").addEventListener("click", smaller, false);

function doIt(evt) {
    alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
}

function doItToo(evt) {
    alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
}

function biggest(evt) {
    alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
}

function smaller(evt) {
    alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
}