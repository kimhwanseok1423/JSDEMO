//for it

//for문을 조건식을 만족할떄까지 특정 싱행문을 반복해서 실행한다.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log(`-------------------------------`);
//for문에서 조건식을 생략하면 무한으로 돌아간다.
let i = 1,
  sum = 0;
for (; ; i++) {
  sum += i;
  if (sum > 30) break;
}
console.log(`i=s${i} sum=${sum}`);

//1~10까지 수 짝수와 홀수의 합을 구해서 출력하시오
let a = 0; //짝수의 합
let b = 0; // 홀수의 합

for (i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    a += i;
  } else {
    b += i;
  }
}

console.log(`짝수=${a} 홀수=${b}`);

console.log(`=======================================`);

/* 중첩반복문
continue 반복문
while(조건식){continue;}
continue: 반복문에서 continue을 만나면 조건식으로 이동한다.
 3의 배수만 안나오게 1~10까지 출력*/
//특정한 조건에서 수행되면 안되야 할경우에 continue를 쓴다.

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}

console.log(`=========================================`);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    //console.log(`${i} ${j}`);

    process.stderr.write(`i=${i} j=${j},`);
  }
  process.stderr.write(`\n`);
}
//escape 프로그램에서 주변장치를 컨트롤하기 위해 사용되는 기능
// \n:줄바꿈 , \t:탭 ,  \" , \b: 백스페이스
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
//label 정의
movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 13; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i} j=${j} k=${k}`);
      if (k == 2) break movei;
    }
  }
}
//movei 이동할   곳에 movei 두고 break movei 하면 최초의 위치로 빠져나감
