/*
[문제1]
  num변수의 값이 10의 배수이면 1을 아니면 0을 
   리턴하는 프로그램을 구현하시오.
  [실행결과]
   0 또는 1 
 */
/*

   let num =10;
   let bit =num%10 == 0 ? 1 : 0;
   console.log(bit);




*/

let num = 11;

if (num % 10 === 0) {
  console.log(`num=1`);
} else {
  console.log(`num=0`);
}

/*
     [문제2]
   1  사과를 담는데 필요한 바구니의 수를 구하는 코드이다. 
   2  만일 사과의 수가 123개이고 하나의 바구니에는 10개의 사과를 담을 수 있다면,
      13개의 바구니가 필요하다
      
   3  [실행결과]
       필요한 바구니의 수 : 13
    */
parseInt;
let apple = 123;
if (apple % 10 > 0) {
  console.log(parseInt(apple / 10) + 1);
} else {
  console.log(parseInt(apple / 10));
}

/*
     [문제3]
     switch~case문을 이용해서 차량5부제 프로그램을 구현하시오.
     
     1. 차량의 끝번호가 아래에 해당하면 해당 요일은 차량운행을 제한한다.
     
        1,6 = 월요일
        2,7 = 화요일
        3,8 = 수요일
        4,9 = 목요일
        5,0 = 금요일
        





     2. 출력결과
            차량번호의 끝자리가 5인 차량은 금요일 운행을 제한합니다.
     
    */
let num1 = 5; //끝자리 번호
switch (num1 % 5) {
  case 0:
    console.log(`끝자리가 ${num1}인 차량은 금요일 운행을 제한합니다.`);
    break;

  case 1:
    console.log(`끝자리가 ${num1}인 차량은 월요일 운행을 제한합니다.`);
    break;
  case 2:
    console.log(`끝자리가 ${num1}인 차량은 화요일 운행을 제한합니다.`);
    break;
  case 3:
    console.log(`끝자리가 ${num1}인 차량은 수요일 운행을 제한합니다.`);
    break;
  case 4:
    con4sole.log(`끝자리가 ${num1}인 차량은 목요일 운행을 제한합니다.`);
    break;
}

/*
    [문제4] 
     2001부터 2012년사이에서 윤년을 구하시오.
     윤년의 조건
     1) 년도를 4로 나눈 나머지가 0이고 100로 나눈 나머지가 0이 아니다.
     2) 년도를 400로 나눈 나머지가 0이다.
    * 
     [출력결과]
      2004
     2008
     2012
    */

//let year = 2012;
for (let year = 2001; year <= 2012; year++) {
  let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  //let yearData = leapYearCheck ? '윤년' : '평년';
  if (leapYearCheck) {
    console.log(`${year}년도는 윤년입니다.`);
  }
}
/*
/*  
    [문제5]
    * 1 10=2x+3y의 해를 구하시오.
    *   x와y의 범위 : 0<=x<=10,  0<=y<=10
    *   
    * 2 출력결과
    *  x=2, y=2
    *  x=5, y=0
    */

for (let x = 0; x <= 10; x++) {
  for (let y = 0; y <= 10; y++) {
    if (2 * x + 3 * y == 10) {
      console.log(`x=${x} y=${y}`);
      break;
    }
  }
}