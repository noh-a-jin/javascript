//1. [3,6,9,12,15] 배열을 각각 요소를 두배하고 더하기 10해서 콘솔로 나타내기
const a = (x) => {
    return x * 2 + 10 ;
};
const aa = [3,6,9,12,15].map(a);
console.log (aa)


//2. [1,2,3,4,5,6,7,8,9,10] 배열을 각 각 요소에서 홀수면 두배 짝수면 세배 해서 결과를 콘솔로 나타내기
const b = (x) => {
    if(x%2==0){
      return  x*3;
    }else {
       return x*2;
    }
}

const bb = [1,2,3,4,5,6,7,8,9,10].map(b)
console.log (bb)
//(삼항연산자 사용이 편함)


//3. [1,2,3,4,5,6,7,8,9,10] 배열을 각 각 요소에서 5보다 작으면 1로 크면 2로 해서 결과를 콘솔로
const c = (x) => {
    if (x > 5){
        return 1;
    }else {
        return 2;
    }
}

const cc = [1,2,3,4,5,6,7,8,9,10].map(c)
console.log (cc)
//(삼항연산자 사용이 편함)



//4, [1,2,3,4,5,6,7,8,9,10] 배열을 각 각 요소에서 3의 배수면 "💛" 로 아니면 "😋"로 해서 결과 콘솔로
//이모지 윈도우 + .

const d = (x) => {
    if (x%3==0) {
        return "💛"
    }else {return "😋"}
}
const dd = [1,2,3,4,5,6,7,8,9,10].map(d)
console.log (dd)
//(삼항연산자 사용이 편함)



//5. ["apple","mango", "juice", "kiwi", "strawberry"]
//요소를 문자의 길이로 바꿔서 콘솔로 나타내기

const e = (x) =>{
    return x.length;
}

const ee = ["apple","mango", "juice", "kiwi", "strawberry"].map(e)
console.log (ee)

