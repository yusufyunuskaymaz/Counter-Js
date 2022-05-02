const counterInput = document.querySelector(".counter")
const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")

let counter = 0;

counterInput.innerHTML = counter;


increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent(){
  this.className == "increase" ? counter = counter + 1 : counter = counter - 1;
  counterInput.innerHTML = counter;

}







