"use strict";
// id
const id = document.getElementById("id");
id.style.backgroundColor = "red";
id.style.color = "white";
id.style.padding = "20px";
id.style.margin = "20px";

// class
const cls = document.getElementsByClassName("clsSelector");
for (let i = 0; i < cls.length; i++) {
  cls[i].style.border = "1px solid orange";
  cls[i].style.color = "black";
  cls[i].style.padding = "20px";
  cls[i].style.margin = "20px";
}

// query
const qry = document.querySelector("[query]");
qry.style.backgroundColor = "green";
qry.style.color = "white";
qry.style.padding = "20px";
qry.style.margin = "20px";

// dom events

const btn = document.querySelector("[btn]");
btn.addEventListener("mouseover", () => {
  btn.classList.add("btn-style");
  btn.addEventListener("mouseout", () => {
    btn.classList.remove("btn-style");
  });
});
