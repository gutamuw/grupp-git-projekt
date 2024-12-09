import './style.css'
const app = document.getElementById("app");
const form = document.getElementById("form");
const input = document.getElementById("input");

const randomNumber:number = Math.floor(Math.random() * 100)+1;
console.log(randomNumber)

form?.addEventListener("submit", (e) => {
  e.preventDefault() 

  let inputNumber:number = 0;

  if(input) {
    inputNumber = +(input as HTMLInputElement).value;
  }

while(randomNumber !== inputNumber){
  if(randomNumber > inputNumber){
    alert("För litet.")
    break;
   
  } else if(randomNumber < inputNumber){
    alert("För stort.")
    break;
  }
}

if(randomNumber === inputNumber){
  alert("Du vann.")
}
})