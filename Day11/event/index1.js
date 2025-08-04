const minus = document.querySelector(".minus")
const num = document.querySelector (".num")
const plus = document.querySelector(".plus")


plus.addEventListener ("click", ()=>{
     const number = +num.innerHTML

if (number > 9){
     num.style.color = "blue" 
}else{
 num.style.color = "black" 
}
num.innerHTML = number + 1 
})

minus.addEventListener ("click", ()=>{
    const number = +num.innerHTML
if (number == 0) {
    num.innerHTML = 0
}else{
    num.innerHTML = number - 1
}

if (number < 9){
     num.style.color = "blue" 
}else{
 num.style.color = "black" 
}

})