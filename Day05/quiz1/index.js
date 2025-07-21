//베스킨라빈스 변수를 만들고,
//아이스크림 3개 종류를 넣고,
//매출은 0부터 시작하고
//판매가 되면 그 아이스크림 가격에 따른 매출이 오르도록 하는
//오브젝트 타입 만들기


const baskin = {
icecream : [
    {name : "엄마는 외계인" , price : 3000},    
    {name : "민트초코" , price : 2000},
    {name : "피스타치오" , price : 3500},
    ],
sales: 0,
sell : function (x) {
    this.sales = this.sales + this.icecream[x].price;
},

};

baskin.sell(1);
baskin.sell(2);
baskin.sell(1);

window.console.log (baskin.sales);

