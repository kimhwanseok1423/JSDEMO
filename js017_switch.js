/*switch 문


switch문은 변수에 저장된 값과 switch문에 있는 경우(case)의 값을 감시하여 변수와 경우의 값에서 일치하는값이 있을떄 그에 해당하는
살행문을 실행한다

switch(식){
    case 값1 : 실행문1; break;
    case 값2 : 실행문1; break;
    case 값3 : 실행문1; break;
    case 값 4: 실행문1; break;
    default :  실행문

}
*/

let jumsu = 92;
switch (parseInt(jumsu / 10)) {
  case 10:

  case 9:
    console.log(`A`);
    break;
  case 8:
    console.log(`B`);
    break;
  case 7:
    console.log(`C`);
    break;
  case 6:
    console.log(`D`);
    break;

  default:
    console.log(`F`);
}

/*
code=a100이면 채소류  code=b200 육류  code=c300 이면 생성류라고 출력해라 
*/
let code = "b200";
switch (code) {
  case "a100":
    console.log(`채소류`);
    break;
  case "b200":
    console.log(`육류`);
    break;
  case "c300":
    console.log(`생성류`);
    break;
}

let year = 2012;
switch (year % 12) {
  case 0:
    console.log(`${year}년도의 태생은 원숭이입니다.`);
    break;
  case 1:
    console.log(`${year}년도의 태생은 닭입니다.`);
    break;
  case 2:
    console.log(`${year}년도의 태생은 개입니다.`);
    break;
  case 3:
    console.log(`${year}년도의 태생은 돼지입니다.`);
    break;
  case 4:
    console.log(`${year}년도의 태생은 쥐입니다.`);
    break;
  case 5:
    console.log(`${year}년도의 태생은 소입니다.`);
    break;
  case 6:
    console.log(`${year}년도의 태생은 호랑이입니다.`);
    break;
  case 7:
    console.log(`${year}년도의 태생은 토끼입니다.`);
    break;
  case 8:
    console.log(`${year}년도의 태생은 용입니다.`);
    break;
  case 9:
    console.log(`${year}년도의 태생은 뱀입니다.`);
    break;
  case 10:
    console.log(`${year}년도의 태생은 말입니다.`);
    break;
  case 11:
    console.log(`${year}년도의 태생은 양입니다.`);
    break;
}
// animal ="" 한후에
// 마지막에 console.log(`${year}연도의 태생은 $(animal)입니다.`); 로 바꿔도 됨
