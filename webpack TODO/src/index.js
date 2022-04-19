import {sum } from "./calc"
import "./index.css"
import "./icon.png"

console.log(sum(1,2));

const root=document.getElementById("root");


const h1=document.createElement("h1");
h1.innerText="hello World";

h1.setAttribute("class","redtext")

root.append(h1);

//image append
const myIcon = new Image();
myIcon.src = root;

root.appendChild(myIcon);