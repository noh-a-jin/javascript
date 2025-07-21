//  1번 어떠한 x를 넣으면 제곱으로 돌려주는 함수 만들기
function give (x) {
    return x **2 ;
}
const give1 = give(2);
window.console.log (give1) ;

// 2번 어떠한 메뉴를 넣으면 000은 맛있다 만들기
function menu (food) {
    return food + "는 맛있다" ;
}
const menu1 = menu("마라탕");
window.console.log (menu1) ;

// 3번 어떠한 x를 넣으면 홀수 또는 짝수를 돌려주는 함수 만들기
function isOddorEven(x){
    return x % 2 ? "홀수" : "짝수" ;} // 불리언 나머지값 0이면 false, 1이면 true
const c = isOddorEven(13);
window.console.log (c)

// 4번 어떠한 x 를 넣으면 배열로 [x*1 , x*2 , x*3]을 돌려주는 함수 만들기

function threeList (x) {
    return [x*1 ,x*2,x*3];
}
const d = threeList (20) ;
window.console.log (d)
