const bus = +window.prompt ("버스종류")-1;
const age = +window. prompt ("나이");

const bus_type =[
{name : "시내버스" , price : 1200},
 {name : "광역버스" , price : 2000},
{name : "마을버스" , price : 1000},
] ;

const isFree = age <= 7 || 65 <= age;
const isYouth = 8 <= age && age <= 19 ;

if (isFree) {
    window.console.log (`${bus_type[bus].name} 요금 0원`);
}else if (isYouth) {
    window.console.log (`${bus_type[bus].name} 요금 ${bus_type[bus].price*0.7}원`)
}else {
    
}

