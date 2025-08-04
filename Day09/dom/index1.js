//1. Document [html]


//div
const div = document.createElement ("div");
div.innerHTML = "지금 두번째 시간임" ;
div.style.color = "pink";
div.style.backgroundColor = "green";
div.style.fontSize = "30px";
document.body.appendChild(div);

//button
const button = document.createElement ("button");
button.innerHTML = "해피!";
button.style.color = "blue";
button.style.backgroundColor = "yellow";
button.style.fontSize = "20px"
button.style.padding = "10px"
document.body.appendChild(button);
