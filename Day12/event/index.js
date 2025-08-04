// const btn = document.querySelector (".hi")

// btn.addEventListener ("click",(x)=>{
    // console.log(x.target.innerHTML)
// })


const input = document.querySelector ("input")
// input.addEventListener("input" , (x)=>{
    // console.log (x.target.value)
// })
const span = document.querySelector("span")
const btn = document.querySelector ("button")

input.addEventListener("input" , (x)=>{
 span.innerHTML = x.target.value.length  
 span.style.color = x.target.value.length < 11 ? "black" : "red"
})

btn.addEventListener("click",((x)=>{
x.target.innerHTML = x.target.innerHTML == "😎" ? "😛" : "😎"
input.type = input.type == "text" ? "password" : "text"

}))

