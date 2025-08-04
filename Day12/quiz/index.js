const buyAme = document.querySelector (".buyAme")
const buyLatte = document.querySelector (".buyLatte")
const buyVanila = document.querySelector (".buyVanila")
const totalPrice = document.querySelector (".totalPrice")
const reset = document.querySelector (".reset")

buyAme.addEventListener ("click",()=>{
    totalPrice.innerHTML = "총" + (parseInt(totalPrice.innerHTML.split(" ")[1]) + 5000) + "원"
})

buyLatte.addEventListener ("click",()=>{
    totalPrice.innerHTML = "총" + (parseInt(totalPrice.innerHTML.split(" ")[1]) + 6000) + "원"
})

buyVanila.addEventListener ("click",()=>{
    totalPrice.innerHTML = "총" + (parseInt(totalPrice.innerHTML.split(" ")[1]) + 6500) + "원"
})

reset.addEventListener("click",()=>{
    totalPrice.innerHTML = "총 0원"
})