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

  if(input) {
    const num:number = +(input as HTMLInputElement).value; 
  }
  
console.log("Tjoho!")
>>>>>>> 6fc46bac917ea0050f31acf3dd6f6347a7b2c10e
})