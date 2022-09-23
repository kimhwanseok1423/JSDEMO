/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/

let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
arr = arr.filter(function (item) {
  return item !== undefined;
});
console.log(arr);
function arrPlus(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function count(arr) {
  return arr.length;
}
function nam(arr) {
  //평균
  return arrPlus(arr) / count(arr);
}
console.log(nam(arr));
console.log(`합계:${arrPlus(arr)}`);
console.log(`평균:${nam(arr)}`);
