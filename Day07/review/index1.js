const starbucks = [
{name : "아메리카노" , price : 4500 , shots : 2, ingredients : ["water", "caffeine"]},
{name : "라떼" , price : 5500 , shots : 2, ingredients : ["water","milk", "caffeine"]},
{name : "돌체라떼" , price : 6500 , shots : 3, ingredients : ["water","milk", "caffeine", "condensed milk"]},
{name : "바닐라크림" , price : 5500 , shots : 2, ingredients : ["milk", "caffeine", "vanilla","water"]},
{name : "카페모카" , price : 6000 , shots : 2, ingredients : ["water", "caffeine", "milk", "chocolate"]},
]

// 저녁 타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기

const sail = (x)=> {
   x.price = x.price * 0.8
   return x
}

const sailmenu = starbucks.map(sail)

console.log (sailmenu)

//이름에 라떼가 있으면 , 재고없음 이름 바꾸고 아니면 그대로 나타내기

const latte = (x) => {
   x.name = x.name.includes("라떼") ? "재고없음" : x.name ;
   return x
}
const soldout = starbucks.map(latte)
console.log (soldout)

// caffeine -> decaffeine


const deca = (x) => {
   x.ingredients = x.ingredients.includes("caffeine") ? "decaffeine" : "decaffeine"
   return x
}
const deca1 = starbucks.map(deca)
console.log (deca1)