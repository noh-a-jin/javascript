// object타입
// key-value 구성
// key 는 중복 안됨 - 문자, 숫자 사용가능
// value 는 중복 가능 - 올 타입 사용 가능



// const americano = {
    // name : "아메리카노" ,
    // price : 2000 ,
    // isIce : true ,
    // hasShot : true,
// };
//dot. 연산자
// window.console.log (americano.name); //아메리카노
// window.console.log (americano.price); // 2000
// window.console.log (americano.hasShot); // true
//bracket[] 연산자
// window.console.log (americano["name"]); //아메리카노
// window.console.log (americano["price"]); // 2000
// window.console.log (americano["hasShot"]); // true


const boardgame = {
    name : "할리갈리" ,
    people : "4명" ,
    time : "10분",
};

window.console.log ()


const waman = {
    name : "노아진",
    age : "30" ,

    eyes : { left : 0.4 , right : 0.5}
};

window.console.log (waman.eyes.right);

// 없는 key 값을 요청하면 undefined 가 나옴
window.console.log (waman.live);
waman.live = "인천"; /
window.console.log (waman.live); //인천으로 추가되어 나옴
waman.live = "광주"; 
window.console.log (waman.live); //광주로 바뀜

delete waman.live; //삭제




   