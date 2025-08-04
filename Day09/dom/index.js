
//  1. querySelector, querySelectorAll : 찾아주세요
const a = document.body.querySelector (".Hi")
window.console.log (a)

const b = document.body.querySelector (".monday")
window.console.log (b)
const c = document.body.querySelector (".feeling")
c.innerHTML = "그래도 괜찮아"

const d = document.body.querySelector (".time");
d.innerHTML = new Date().toLocaleTimeString();

const e = document.body.querySelector (".month")
e.innerHTML = new Date().getMonth() + 1 + "월";

const f = document.body.querySelector (".date")
f.innerHTML = new Date().getDate() + "일";

const g = document.body.querySelector (".day")
const daylist = ["일","월","화","수","목","금","토"]
g.innerHTML = daylist[new Date().getDay()] + "요일";

const h =document.body.querySelector(".hour")
h.innerHTML = new Date().getHours() + "시";

const i = document.body.querySelector(".minute")
i.innerHTML = new Date().getMinutes() + "분";

const j = document.body.querySelector (".second")
j.innerHTML = new Date().getSeconds() + "초";