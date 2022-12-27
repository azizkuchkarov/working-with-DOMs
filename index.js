const box = document.querySelector("#box");
box.style.backgroundColor = "red";
box.style.height = "100px";
box.style.width = "100px";
console.log(box);

const buttons = document.querySelectorAll("button");
const circles = document.querySelectorAll(".circle");
const circle = document.querySelector(".circle");
const wrapperCircle = document.querySelector(".circle__wrapper");

buttons[0].style.width = "100px";
console.log(buttons);

circles[1].style.backgroundColor = "yellow";
circle.style.backgroundColor = "red";

const hearts = document.querySelectorAll(".heart");
//for (let i = 0; i < hearts.length; i++) {
//hearts[i].style.backgroundColor = "green";
//}
hearts.forEach((item) => {
  item.style.backgroundColor = "black";
});

const btn = document.createElement("button");
// const text = document.createTextNode("I am a text");
document.body.append(btn);
const myCircle = document.createElement("div");
myCircle.classList.add("circle");
// wrapperCircle.append(myCircle);
//wrapperCircle.before(myCircle);
wrapperCircle.after(myCircle);
circles[1].replaceWith(myCircle);
