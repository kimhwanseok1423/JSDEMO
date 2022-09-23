let scores = [100, 90, 100];
console.log(scores); //[100,90,100] Array(3)

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined
console.log(scores.length); //3

let person = ["John", "Doe", 26, true];
for (let idx in person) {
  //person에 있는 인덱스 값 가져오고
  console.log(person[idx], typeof person[idx]);
}

let student = ["홍길동", [100, 90, 20]];

for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}

let cars = new Array("Sasb", "Volvo", "BMW");
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

let color = [];
console.log(color.length);
color[0] = "red";
console.log(color.length);
color.push(`green`);
console.log(color.length);
color.push(759);
console.log(color.length);
color[8] = "blue"; //나머지 34567 은 undefined값이 되고 length값이 9가됨
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

//3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length: ${point.length}`); //3

//2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(shape.length);
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}

shape[2] = 50;
console.log(shape[1]);

/*
for()
for idx  in 배열: index가져옴
for ~of : element 가져옴
*/

//forEach(배열 전용 메소드)
//배열.forEach(function(element[,index]){수행할 문장});
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});

shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});

/*let choice = "javascript";
choice.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});*/
// 문자열은 forEach(()를 제공하지 않으므로 사용할수가없다.
//TypeError: choice.forEach is not a function

//배열명.map(calback)
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});
console.log(`res: ${res}`);

const sqt = numbers.map(Math.sqrt); //sqt:2,3,4,5
console.log(`sqt:${sqt}`);

function getSum(total, num) {
  //total: 누적 num:요소값
  return total + num;
}
const sum = numbers.reduce(getSum);
console.log(`sum:${sum}`);

const ages = [32, 33, 15, 40];
const per = ages.filter(function (element, index) {
  return element >= 18;
});

console.log(`per :${per}`);
