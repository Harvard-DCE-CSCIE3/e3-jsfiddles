window.addEventListener('keydown', keydown);

function keydown(e) {
    document.getElementById('keyname').innerHTML = `code:${e.code} <br> key:${e.key}`;
}
