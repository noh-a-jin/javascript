const a1 = window.prompt ("사각형 한 변의 길이는 얼마입니까")
const a2 = Number (a1) * 2

window.console.log (`한 변의 길이 ${a1}인 정사각형의 넓이는 ${a2}`)

const b1 = window.prompt ("삼각형 밑변은 얼마입니까")
const b2 = window.prompt ("삼각형 높이는 얼마입니까")
const b3 = Number(b1)* Number(b2)*0.5

window.console.log (`밑변 ${b1}과 높이 ${b2}인 삼각형의 넓이 : ${b3}`)

const c1 = window.prompt ("일본여행 갈 때 얼마를 환전 하시겠습니까")
const c2 = Number(c1)*9.33

window.console.log (`${c1}은 엔화로 ${c2}엔 입니다`)

const d1 = window.prompt ("신장이 어떻게 되나요?")
const d2 = window.prompt ("몸무게는 어떻게 되나요?")
const d3 = Number(d2)/Number(d1)**2

window.console.log (`키 :${d1} 몸무게 : ${d2} BMI : ${d3}`)

const e1 = window.prompt ("몇분인가요?")
const e2 = Number(e1)*60

window.console.log (`${e1}분은 ${e2}초 입니다`)