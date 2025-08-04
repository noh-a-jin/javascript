//유저에게 만들고싶은 태그, 태그배경색, 태그 내용 입력받고 출력하기

// const what =  window.prompt ("만들고싶은 태그는?")
// const backgroundColor = window.prompt ("태그의 배경색은?")
// const contents = window.prompt ("태그의 내용은?")


// const what2 = document.createElement(what)
// what2.innerHTML = contents
// what2.style.backgroundColor = backgroundColor
// document.body.appendChild (what2)



//유저에게 좋아하는 음식들 입력 받고
//음식들을 각 각 버튼 태그로 만들고
//버튼 태그 색상은 순서대로 ㅏㄹ주노초파남ㅂㅂ보

const foodlist = prompt ("좋아하는 음식").split(" ")
const colorlist = ["Red","orange","yellow","green","blue","navy","purple"];

foodlist.forEach((x,i) => {
const btn =document.createElement ('button')
btn.innerHTML = x
btn.style.color = colorlist [i % 7]
document.body.appendChild(btn)
})
