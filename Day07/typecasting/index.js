//1. 문자에서 배열로 바꾸기
// 1-1 sprit 함수 사용하기 "apple watch".split ("")
// 1-2 스프레드(...) 연산자 [..."apple watch"]

//2. 배열에서 문자로 바꾸기
// 2-1 join(" ")


//quiz
//유저에게 영단어를 입력 받고 a,e,i 는 대문자로 바꾸고 아니면 그대로 해서 콘솔로 나타내기
//ex) apple -> AppLE

const word = window.prompt ("영단어입력") ;
[...word].map ((x)=> x=="a" || x=="e" || x=="i" ? x.toUpperCase () : x).join("")


console.log (word)