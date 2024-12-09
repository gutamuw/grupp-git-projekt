import './style.css'
const app = document.getElementById("app");
const form = document.getElementById("form");
const input = document.getElementById("input");

<<<<<<< HEAD
form?.addEventListener("submit", () => {
    console.log("Tjoho!")
=======
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
>>>>>>> 6fc46bac917ea0050f31acf3dd6f6347a7b2c10e
})