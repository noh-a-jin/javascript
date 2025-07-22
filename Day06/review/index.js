//문자 1개를 인자로 받아 대문자면 '[알파벳]은 대문자입니다.' 소문자면 '[알파벳]은 소문자입니다' 를 반환하는 함수를 작성하세요

const string = window.prompt ("알파벳 입력");

function quiz (alphabet) {
    if (alphabet == alphabet.toUpperCase()){
        return `${alphabet}은 대문자입니다`;
    }else {
        return `${alphabet}은 소문자입니다`;
    }
}


// "문자열(string)과 문자 1개를 각 각 인자로 받아, 문자열에 해당 문자가 포함되어 있으면 
//'[문자열]에는 [문자]가 포함되어 있습니다.' 포함되어 있지 않으면 
// '[문자열]에는 [문자]가 포함되어 있지 않습니다.' 를 반환하는 함수를 작성하세요

function quiz1 (x, y) {
    if (x.includes(y)){
        return `${x}에는 ${y}가 포함되어 있습니다`;
    }else {
        return `${x}에는 ${y}가 포함되어 있지 않습니다`;
    }
}


//이메일(string)을 인자로 받아 '@' 기호가 포함되어 있으면 '[이메일]은 올바른 이메일 형식입니다'
//포함되어 있지 않으면 '[이메일]은 올바르지 않은 형식입니다'를 반환하는 함수를 작성하세요

const email = window.prompt ("이메일 입력")
 if(email.includes("@")){
    window.console.log (`${email}은 올바른 이메일 형식입니다`)
 }else {
    window.console.log (`${email}은 올바르지 않은 형식입니다`)
 }

 