//유저에게 프롬프트로 비밀번호 설정을 입력받고,
// 1. 비밀번호 길이가 4에서 12글자까지만 허용, 틀리면 -> 비밀번호 길이가 맞지 않습니다
// 2. 비밀번호에 @,!,# 중 하나가 포함되어야 허용, 틀리면 -> 비밀번호에 @,!,# 이 없습니다.
// 3. 비밀번호 시작이 it로 해야 허용, 틀리면 -> 비밀번호 시작이 it 가 아닙니다.
// 다 통과되면 올바르게 비밀번호 만들었습니다

const passward = window.prompt ("비밀번호 설정");

if(passward.length <4 || passward.length > 12){
    window.console.log ("비밀번호 길이가 맞지 않습니다")
    
}else if (!(passward.includes("@") || passward.includes ("!") || passward.includes ("#"))){
    window.console.log ("비밀번호에 @,!,#가 없습니다")
}else if (!passward.startsWith("it")){
    window.console.log ("비밀번호 시작이 it가 아닙니다")
}
else{
    window.console.log ("비밀번호 설정이 완료되었습니다")
}