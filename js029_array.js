const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let data = fruits.toString();
console.log(`${data}`);
console.log(`${typeof data}`);

console.log(typeof fruits.join());
console.log(fruits.join());
console.log(fruits.join("*"));
console.log(fruits.join("_"));

//배열의 끝에 요소 추가
fruits[4] = "Kiwi";
console.log(fruits);
console.log(fruits.push("Melon")); // 6   넣어주고 숫자값 나옴
console.log(fruits);

//배열의 끝에 요소를 제거
console.log(fruits.pop());
console.log(fruits);

//배열의 앞에 요소를 추가
console.log(fruits.unshift("Melon"));
console.log(fruits);

//배열의 앞에 요소를 제거
console.log(fruits.shift());
console.log(fruits);
//특정위치의 요소제ㅓㄱ
delete fruits[3];
console.log(fruits);

fruits[3] = "Mango";

console.log(fruits);

//특정 범위의 요소를 가져옴
console.log(fruits.slice(1, 3));
console.log(fruits.slice(-4, -2));
console.log(fruits);
console.log(fruits.slice(1));

//오름차순 정렬
console.log(fruits.sort());
console.log(fruits);
//내립차순 정렬
console.log(fruits.sort().reverse());

//자바스크립트는 tim sort 알고리즘을 사용한다.

let point = [40, 100, 1, 5, 10];

console.log(
  point.sort(function (a, b) {
    console.log(`a:${a},b:${b},a-b:${a - b}`);
    return a - b;
  })
);

//내림차순
console.log(
  point.sort(function (a, b) {
    //console.log(`a:${a},b:${b},a-b:${a - b}`);
    return b - a;
  })
);

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length);
console.log(zData);

let arr2 = [1, 3, [[[4, 5]]], [7, 8], [9, 10], 12];
console.log(arr2.flat()); // [ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr2); //[ 1, 3, [ [ [Array] ] ] ]
console.log(arr2.flat(1)); //[ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr2.flat(2)); //[ 1, 3, [ 4, 5 ] ]
console.log(arr2.flat(3)); //[ 1, 3, 4, 5 ]
