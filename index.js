var btn1 = document.querySelector(".btn1");
btn1.addEventListener('click',() =>{btn1.style.backgroundColor = "hsl(25, 97%, 53%)"})
var btn2 = document.querySelector(".btn2");
btn2.addEventListener('click',() =>{btn2.style.backgroundColor = "hsl(25, 97%, 53%)"})
var btn3 = document.querySelector(".btn3");
btn3.addEventListener('click',() =>{btn3.style.backgroundColor = "hsl(25, 97%, 53%)"})
var btn4 = document.querySelector(".btn4");
btn4.addEventListener('click',() =>{btn4.style.backgroundColor = "hsl(25, 97%, 53%)"})
var btn5 = document.querySelector(".btn5");
btn5.addEventListener('click',() =>{btn5.style.backgroundColor = "hsl(25, 97%, 53%)"})

var container1 = document.createElement("div");
container1.className = "container1";
var image = document.createElement("div");
image.className = "image";
var p = document.createElement("div");
p.className = "p";
var thank = document.createElement("div");
thank.className = "thank";
var img = document.createElement("img");
img.src = "./images/illustration-thank-you.svg";
image.appendChild(img);
var para = document.createElement("p");
para.textContent = `Your reply haave been sucessfully recorded.`;
para.className = "select";
p.appendChild(para);
var h2 = document.createElement("h2");
h2.textContent = "Thank You!";
var para2 = document.createElement("p");
para2.className = "app";
para2.textContent = "We appreciate you taking the time to give a rating.if you ever need more support,don't hesitate to get in touch!"


thank.appendChild(h2);
thank.appendChild(para2);
container1.appendChild(image);
container1.appendChild(p);
container1.appendChild(thank);
container1.style.textAlign = "center";
container1.style.marginTop = "200px"
container1.style.backgroundColor = "hsl(213, 19%, 18%)"
container1.style.display = "none";
container1.style.width = "320px";
container1.style.padding = "20px 10px 20px 20px";
container1.style.borderRadius = "10px"
para2.style.color = "hsl(216, 12%, 54%)"
para.style.color = "hsl(25, 97%, 53%)"
para.style.backgroundColor = "hsl(213, 19%, 21%)"
para.style.borderRadius = "20px"
para.style.width = "200px"
para.style.height = "40px"
para.style.paddingTop = "3px"
p.style.paddingLeft = "50px"



var button = document.querySelector(".last");
button.addEventListener("click", () => {document.querySelector(".container").style.display = "none"})
button.addEventListener("click",document.querySelector("body").appendChild(container1));
button.addEventListener("click", () => {container1.style.display = "block"});