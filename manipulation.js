const idWO = document.getElementById("container");

const idWith = document.querySelector("#container");

const selectAllLI = document.querySelectorAll("li.second");

const thirdOl = document.querySelector("ol > li.third");

const container = document.getElementById("container");
const text = document.createTextNode("Hello!");
container.appendChild(text);

const footer = document.querySelector(".footer");
footer.classList.add("main");

footer.classList.remove("main");

const createLi = document.createElement("li");

//new browsers vs outdated software
const textli = document.createTextNode("four");
createLi.appendChild(textli);

//should  i set li attribute?

li.setAttribute("class", "fourth");
const ul = document.getElementById("list");
ul.appendChild(li);

//let or const (changing data)
let allLi = document.querySelectorAll("ol > li");
for (i = 0; i < allLi.length; i++) {
  allLi[i].style.backgroundColor = "green";
}

footer.remove();
