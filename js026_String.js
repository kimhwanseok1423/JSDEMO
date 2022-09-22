let data = "it`s alrihgt";
console.log(data);

//lngth 문자열 길이
console.log(data.length);

/* 
특정범위 데이터를 리전해주는 3가지 메소디
substring(start,end)
substr(start ,length)
slice(start,end)

*/
data = "Apple, Banana, kiwi";
console.log(`substring:${data.substring(7, 13)}`); //7인덱스 부터 13인덱스 미만
//substring()은 음수값 지원 x
console.log(data);

console.log(`substring:${data.substring(-12, -6)}`);

//banana
console.log(`substr: ${data.substr(7, 6)}`);
console.log(`substr: ${data.substr(-12, 6)}`);
console.log(`slice: ${data.slice(-12, -6)}`);

//replace('찾을 문자열','바꿀 문자열'0
console.log(`replace: ${data.replace("Banana", "Grape")}`); //Apple, Grape, kiwi
console.log(data);

//정규 표현식

data = "Mr Blue has a blue house and a blue car"; //
console.log(data.replace(/blue/, "red")); //Mr Blue has a red house and a blue car  첫번째 블루만 바꿀경우
console.log(data.replace(/blue/g, "red")); //Mr Blue has a red house and a red car  블루 전체 바꾸기
console.log(data.replace(/blue/i, "red")); //Mr red has a blue house and a blue ca   대소문자 구분없이 첫번째 블루 바꾸기

console.log(data.replace(/blue/gi, "red")); //Mr red has a red house and a red car 전부 다 래드로 바꾸기

data = "Hello World";
console.log(`toUpperCase():${data.toUpperCase()}`); //대문자로 바꾸기
console.log(`toLowerCase():${data.toLowerCase()}`); //소문자로 바꾸기

let data2 = "javascript";
console.log(`concat(): ${data.concat(data2)}`); //Hello Worldjavascript 두개가 연결해서 나옴
console.log(`concat(): ${data.concat(" ", data2)}`); // Hello World javascript
console.log(`concat(): ${data.concat("-", data2)}`); //Hello World-javascript

console.log(`charAt(): ${data.charAt(0)}`); //H
console.log(`charAt(): ${data.charCodeAt(0)}`); //유니코드값

data = "a,b,c,d,e";
let arr = data.split(","); //split() :문자열 나누워 준다.
for (let i of arr) console.log(i);

//match: 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고
//       일치하는 문자열이 없으면 null로 리턴한다.

data = "Mr Blue has a blue house and a blue car"; //
let res = data.match(/blue/g);

console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);

console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);
// search(): 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//          일치하는 문자열이없으면 -1을 리턴한다.
res = data.search(/blue/g);
console.log(`search(): ${res}`);
//원하는 문자열의 인덱스를 가지고 오고싶을떄 씀
console.log(data.indexOf("M")); //0
console.log(data.indexOf("B")); //3

let position = data.indexOf(`blue`);
console.log(data.indexOf("blue", position + 1));

data = "Mr Blue has a blue house and a blue car";
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf("blue", pos);
  if (pos != -1) console.log(pos);
} while (pos != -1);

data = "Mr Blue has a blue house and a blue car";
for (let pos = 0; pos < data.length; pos++) {
  pos = data.indexOf("blue", pos);
  if (pos == -1) break;
  console.log(pos);
}
//repeat()
let text = "korea";
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

let text2 = "    korea    ";
console.log(text2.length);
console.log(text2.trim().length);
