document.querySelector("input").onclick = function(){
    document.querySelector("#clouds").style.visibility = "visible";
    document.querySelector("input").setAttribute("style", "box-shadow: 0px 0px 6px 0px; border: 1px solid grey; transition: 400ms;")
};

// document.querySelector()