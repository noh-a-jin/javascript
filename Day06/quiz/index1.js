//유저에게 프롬프트로 영어 문장을 입력받고
//띄어쓰기 별로 영어의 문장의 길이를 배열로 나타내기
//ex) today is tuesday -> [5,2,7]

const a = window.prompt ("영어 문장 입력")
const aa = a.split(" ")

const aaa = (x) => {
    return x.length
}

const aaaa = aa.map(aaa)

console.log (aaaa)