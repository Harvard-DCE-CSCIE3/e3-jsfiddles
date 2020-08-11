 var f = document.getElementById("theForm")
    var ff = document.getElementById("fruitForm");
    var vf = document.getElementById("vegForm");

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