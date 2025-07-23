//숫자 배열 제곱 값 구하기
//before : [1,2,3,4]
//after" [1,4,9,16]
const a = (x) =>{
    return x **2;
} 
const aa = [1,2,3,4].map(a)

console.log (aa)


//이름 배열 대문자로 변환하기
//before : ["hong","kim","lee"]
//after" ["HONG","KIM","LEE"]

const b = (x) => {
    return x.toUpperCase();
};

const bb = ["hong","kim","lee"]
const bbb = bb.map(b)

console.log (bbb);

//점수 배열에 60점 미만 기준으로 합격/불합격 여부 표시하기
//before : [85,42,77] 60점 미만
//after" [합격,불합격 ,합격]

const c = (x) => {
    return x > 60 ? 합격 : 불합격;
}
const cc = [85,42,77]
const ccc = cc.map(c)
console.log (ccc);

//상품 할인 가격 20% 배열 만들기
//before : [10000,20000,150000]
//after" [8000,16000,12000]

const d =(x)=> {
    return x * 0.8
}

const dd = [10000,20000,150000]
const ddd = dd.map(d)
console.log (ddd)

//학생 객체 배열에서 이름만 추출하기
//before : [{name : '홍길동'}, age : 16}, {name : "김철수", age :17}]
//after" ["홍길동" "김철수"]