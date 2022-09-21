let color = [`red`, `green`, `blue`];
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]); //undefined

console.log(color.length);
for (let index = 0; index <= 2; index++) {
  console.log(color[index]);
}
color[3] = "black";

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}
let city = [`서울`, `부산`, `대전`];
for (let idx in city) {
  console.log(idx);
  console.log(city[idx]);
}
//java: elemenmt를 가져옴
//자바스크립트: index를 가져옴

//객4체 리터널: {property,4 value}
let obj = { a: 1, b: 2, c: 3 };
console.log(obj);

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

for (let prop in obj) {
  console.log(`${prop}:${obj[prop]}`);
}
