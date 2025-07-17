const nosun = +window.prompt ("노선종류")-1;
const age = +window.prompt ("나이");
const googan = +window.prompt ("탑승구간");

const corail =[
    {name : "일반노선" , price : 1250} ,
    {name : "급행노선" , price : 2000} ,
    {name : "관광노선" , price : 3000} ,
    ];

const free = 7 > age || age > 64;
const sail = 8 <= age <=18 ;
const udult = 18 < age < 65;

const over = googan <= 10 ? 0 : (googan - 10) * 100;

if(free) {
    window.console.log ("요금 0원");
} else if (sail){
    window.console.log (`${corail[nosun].name}, 요금 ${(corail[nosun].price + over)*0.6}원`);
}else if (udult) {
    window.console.log (`${corail[nosun].name}, 요금 ${corail[nosun].price}원`);
}else{}