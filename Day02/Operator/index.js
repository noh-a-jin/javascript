//산술 연산자
// +, -, /, *, %(나머지), ** (제곱)
const a = 1 + 3 // 4
const a1 = 2 - 3 //-1
const a2 = 2 * 4 //8
const a3 = 3 / 3 // 1
const a4 = 2 % 3 //2
const a5 = 2 ** 4 //16

//대입 연산자
//=
const b = "떡볶이"

//비교 연산자 [boolean 타입으로 바뀜]
// >,<

const c = 5 > 3 // true
const c1 = 5 < 3 // false
const c2 = 5>= 3 // true
const c3 = 5 <=3 // false
const c4 = 10==11 // false
const c5 = 10 !=11 // true

//논리연산
// &&(and), ||(or), !(not)

// &&(and) : 모두 true 여야 true
// ||(or) : 하나라도 true 이면 true

const d = 5>3 && 10>9 //true
const d1 = 1==2 || 2==4 || 3==3 // true
const d2 = !true // false

//드모르간 법칙 적용사례
const d3 = !(5<=3) || !(3>10)
const d4 = 5 > 3 && 3 < 10; // true

//삼항 연산 [조건 ? 값1 : 값2] //조건값이 트루면 앞에꺼 펄스면 뒤에꺼
const e = true ? "떡볶이" : "순대" // 떡볶이
const e2 = false ? "아아" : "라떼" //라떼
const e3 = 5>3 ? "집가고싶음" : "수업함" //집가고싶음
const e4 = 10<9 ? "고기" : "회" // 회