var inputBox = document.getElementById("inputbox");
var list = document.getElementById("list");

function s(){
    if(inputBox === ""){
        alert("Please write text");
    }
    else{
        var k = document.createElement("li");
        k.innerHTML = inputBox.value;
        list.appendChild(k);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        k.appendChild(span);
    }
    inputBox.value = "";
    save();
}

list.addEventListener("click",(a)=>{
    if(a.target.tagName == "LI"){
        a.target.classList.toggle("checked");
        save();
    }
    else if(a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
        save();
    }
},false);

function save() {
    localStorage.setItem("data",list.innerHTML);
}
function dis(){
    list.innerHTML = localStorage.getItem("data");
}

dis();