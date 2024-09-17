const f = document.getElementById("theForm")
    const ff = document.getElementById("fruitForm");
    const vf = document.getElementById("vegForm");

    f.addEventListener("change", function(e){
        if( e.target.name == "fOrV"){
            if (e.target.value == "fruits") {
                ff.style.display = "block";
                vf.style.display = "none";
            }else{
                vf.style.display = "block";
                ff.style.display = "none";
            }
        }
    });