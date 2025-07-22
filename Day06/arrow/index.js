//일반함수 (구문법)
//function plus100 (x){
//return x + 100;
// };


//화살표 함수 [신문법]

//const plus100 = (x) => {
//    return x + 100;
//};

//1. x를 주면 두배 돌려주는 화살표 함수
const aa = (x) => {
    return x *2;
};

//2. x 를 주면 -500해서 돌려주는 화살표함수
const bb = (x) => {
    return x - 500;
};

//3. x,y를 주면 더 큰 숫자를 돌려주는 화살표 함수
const cc = (x,y) => {
    return x > y ? x:y ;
}
//4. str 을 주면 길이를 돌려주는 화살표 함수
const dd = (str) => {
    return str.length
}
//5. str 을 주면 문자의 길이가 10글자보다 크면 길이가 길어요 아니면 길이가 적당해요를 돌려주는 화살표 함수
const ee = (str) => {
    return str.length > 10 ? "길이가 길어요" : "길이가 적당해요" ;
}

//6. 어떤 str을 주면 , str을 하다니 럭키비키잖아 돌려주는 함수
const ff = (str) => {
    return `${str}을 하다니 럭키비키잖아`
}

//7. x,y를 주면, x의 y 제곱을 돌려주는 화살표 함수

const gg = (x,y) => {
    return x ** y ;
}

//8. x,y 를 주었을 때, 두 수의 차를 돌려주는 화살표 함수
const hh = (x,y) =>{
return x - y ;
}

//9. str 을 주었을 때 , a or b 가 포함하면 a,b 포함 ! 아니면 a,b 미포함!
const ii = (str) => {
    if (str.inCludes("a"))
}


//10. x를 주었을 때 , x의 배수를 리스트 (array)로 돌려주는 함수
// ex) 5 -> [5,10,15...45]
const jj = (x) => {
    return 
}

//11. str,x 를 주었을 때, str의 0번째 부터 x번째 까지의 문자열을 돌려주는 ㅎ마수
//ex) apple , 3 -> appl
const kk  = (str,x) =>{
    return str.slice(0,x)+1
}