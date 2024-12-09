import './style.css'
const app = document.getElementById("app");
const form = document.getElementById("form");
const input = document.getElementById("input");

form?.addEventListener("submit", (e) => {
  e.preventDefault() 

  let num:number = 0;

  if(input) {
    num = +(input as HTMLInputElement).value;
  }

  if (num < 100) {
    alert("Det var ett litet tal!")
  } else {
    alert("Det var ett stort tal!")
  }
  
console.log("Tjoho!")
})