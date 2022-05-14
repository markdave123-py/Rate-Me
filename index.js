const btnList = document.getElementsByClassName("btn11");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

function remove() {
    for (let btn of btnList){
        btn.classList.remove("btn0")
    }
}
btn1.addEventListener("click",function() {
        remove();
        btnList[0].classList.add("btn0")
    })
btn2.addEventListener("click",function() {
    remove();
    btnList[1].classList.add("btn0")
})
btn3.addEventListener("click",function() {
    remove();
    btnList[2].classList.add("btn0")
})
btn4.addEventListener("click",function() {
    remove();
    btnList[3].classList.add("btn0")
})
btn5.addEventListener("click",function() {
    remove();
    btnList[4].classList.add("btn0")
})


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
para.textContent = `Your reply have been sucessfully recorded.`;
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
button.addEventListener("click", () => {document.querySelector("body").appendChild(container1)});
button.addEventListener("click", () => {container1.style.display = "block"});