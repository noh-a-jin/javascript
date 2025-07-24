const cafeMenu = [
    {name : "아메리카노", price : 4000, isIce : false, calories : 10, imgredients : ["에스프레소","물"] },
    {name : "아이스라떼", price : 4800, isIce : true, calories : 120, imgredients : ["에스프레소","우유","얼음"]},
    {name : "자몽에이드", price : 5200, isIce : true, calories : 110, imgredients : ["자몽","탄산수","얼음","시럽"]},
    {name : "핫초코", price : 4500, isIce : false, calories : 230, imgredients : ["코코아","우유","설탕"]},
    {name : "딸기라떼", price : 5300, isIce : true, calories : 210, imgredients : ["딸기","우유","얼음","설탕"]},
]

// 1.우유가 들어간 메뉴의 이름만 배열로 추출하기
const quiz1 = cafeMenu.filter((x)=>x.imgredients.some((v)=> v == "우유"));
console.log (quiz1)

//2. 에스프레소가 들어가지 않은 차가운 메뉴의 이름 배열 만들기
const quiz2 = cafeMenu.filter ((x)=> x.imgredients.every((v)=> v != "에스프레소") && x.isIce) 
console.log (quiz2)
//3. 칼로리가 100 미만이면서 우유가 들어가지 않은 메뉴의 이름만 배열로 만들기x
const quiz3 = cafeMenu.filter ((x)=> !x.imgredients.every((v)=>v !="우유") && x.calories < 100)
console.log (quiz3)
//4. '설탕' 성분이 들어간 메뉴만 이름과 가격 객체 배열로 만들기
const quiz4 = cafeMenu.filter ((x)=> x.imgredients.some((v) => v=="설탕"))
.map( (x) => {
    return {name : x.name , price : x.price}
})

console.log (quiz4)

