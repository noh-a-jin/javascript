// 1번
const num = +window.prompt ("각도입력")

if (90>num>0) {
    window.console.log ("예각")
}else if (90 == num) {
       window.console.log ("직각")
}else if (180>num>90) {
       window.console.log ("둔각")
}else {
       window.console.log ("=평각")
}

// 2번
const number = +window.prompt("국어 점수 입력")
const number1 = +window.prompt("영어 점수 입력")
const number2 = +window.prompt("수학 점수 입력")
const number4 = (number+number1+number2)/3

if (89<number4) {
    window.console.log ("A등급")
}else if (90<number4<79) {
       window.console.log ("B등급")
}
else if (100==number ||100== number1 || 100==number2) {
       window.console.log ("Good !")
}else if (61<number ||61< number1 || 61<number2) {
       window.console.log ("Bad!")
}   else {
       window.console.log ("C등급")
}

//3번

const drink = +window.prompt ("구매할 음료 1~3")
const drink_num = +window.prompt ("구매할 갯수")
const drink_one = +window.prompt ("투입금액")

if (drink==1) {
   const ameprice = 3000 * drink_num
 
}else if (drink==2) {
    
}else if (drink==3) {
    
}else{}