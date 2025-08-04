const minus = document.querySelector(".minus")
const num = document.querySelector (".num")
const plus = document.querySelector(".plus")

plus.addEventListener ("click", ()=>{
     const number = +num.innerHTML

num.innerHTML = number + 1 
})