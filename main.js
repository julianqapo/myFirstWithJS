function addLi(){
var joke = document.getElementById("joke").value;
var list = document.getElementById("list");
var li = document.createElement("li");
var txt = document.createTextNode(joke);
li.appendChild(txt);
list.appendChild(li);


let del = document.createElement("input")
    del.setAttribute("type", "submit")
    del.setAttribute("value", "Remove")
    del.setAttribute("class", "del")

li.appendChild(del)
}

// write the number of jokes
/*
let x = document.getElementById("num").value;
let list = document.getElementById("list");
let liNum = list.childElementCount;
x.appendChild(liNum);
*/
const delList = document.getElementById("list");
delList.addEventListener("click", function(e){

if (e.target.className == "del"){
const li = e.target.parentElement;
delList.removeChild(li);
}
})
