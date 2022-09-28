// 6개의 난수를 구하고 중복 체크
let lotto = [];

for (let i = 0; i <= 5; i++) {
  let ran = Math.random() * 45;
  ran = Math.floor(ran) + 1;
  console.log(ran);
  lotto.push(ran);

  for (let j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break;
    }
  }
}
//2. 정렬.

lotto.sort((a, b) => {
  return a - b;
});

let divList = document.querySelectorAll("div.wrap div");
divList.forEach((element, idx) => {
  element.innerText = lotto[idx];
});
/*
var list = [];
for (var i = 1; i <= 45; i++) {
  list.push(i);
}
var result = [];
for (var i = 0; i < 6; i++) {
  var index = Math.floor(Math.random() * list.length);
  var num = list[index];
  list.splice(index, 1);
  result.push(num);
}
for (var i = 0; i < 6; i++) {
  document.write(result[i]);
}
*/
