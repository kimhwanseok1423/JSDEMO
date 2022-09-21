/*
제어문: 프로그램의 흐름을 제어할수 있는 실행문이다.
1. 조건문 if~else
2.선택문 switch~case
3.반복문 for ,while  do-while , for~in, for ~of
4.lable(임의 정의), continue, break

조건문: 조건식 값 참일때 거짓일때 
if(조건식){
    실행문;
}

*/

let data = 0;
if (data == 0) {
  console.log(`program end`);
}
// null ,undefined,"",0,false =>false
if (10) {
  console.log(`10`);
}

if (null) {
  console.log(`data`);
}

/*

if(조건식){
    실행문;
}else{
    실행문;
};
*/

let num = 5;

if (num % 2 == 0) {
  console.log(`${num}은 짝수 입니다`);
} else {
  console.log(`${num}은 홀수입니다.`);
}

/*
if(조건식1){
    실행문1
    elseif(조건문2){
        실행문2
        elseif(조건문3){
            실행문3
        }
         else{

        }

        

*/

let jumsu = 50;
if (jumsu >= 90) {
  console.log(`A`);
} else if (jumsu >= 80) {
  console.log(`B`);
} else if (jumsu >= 70) {
  console.log(`C`);
} else if (jumsu >= 60) {
  console.log(`D`);
} else {
  console.log(`E`);
}
let x = "A";
console.log(x >= `A` && x <= `Z`);
let y = "a";
console.log(y >= `a` && y <= `z`);

// 'A' =65 , 'a'=97 '0' :48
let check = "D";
if (check >= "A" && check <= "Z") {
  console.log(`${check}는 대문자 입니다.`);
} else if (check >= "a" && check <= "z") {
  console.log(`${check}는 소문자 입니다.`);
} else {
  console.log(`그 외 ${check}는 기타 입니다.`);
}
