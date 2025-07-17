const num = +window.prompt ("몇점입니까")

if (num >  89) {
    window.console.log ("A")
}else if (90 > num > 79) {
     window.console.log ("B")
}else if (80 > num > 69){
     window.console.log ("C")
}else if (70 > num > 59){
     window.console.log ("D")
}else {
     window.console.log ("F")
}


const number = +window.prompt ("정수입력")

if (number>0 && 1>number%2){
    window.console.log ("양의 짝수")
}else if (number>0 && number==1){
    window.console.log ("양의 홀수")
}else if (number<0 && 0==number%2){
    window.console.log ("음의 짝수")
}else (number>0 && number==-1)
{
    window.console.log ("음의 홀수")}