const pizza = +window.prompt ("피자종류")
const pizza_1 = +window.prompt ("피자갯수")
const pizza_2 = +window.prompt ("투입금액")

const menu = [
    {name : "페퍼로니 피자" , price : 15000 },
    {name : "치즈 피자" , price : 13000 },
    {name : "불고기 피자" , price : 16000 },

]


if (pizza_2 > menu[pizza].price* pizza_1) {
    window.console.log (`${menu[pizza].name}${pizza_1}개, 잔돈 ${pizza_2 - menu[pizza].price*pizza_1}원`)
} else{
    window.console.log ("잔액이 부족합니다")
};

