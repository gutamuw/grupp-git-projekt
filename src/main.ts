import './style.css'
const app = document.getElementById("app");
const form = document.getElementById("form");
const input = document.getElementById("input");

form?.addEventListener("submit", (e) => {
  e.preventDefault() 

  if(input) {
    const num:number = +(input as HTMLInputElement).value; 
  }
  
console.log("Tjoho!")
})