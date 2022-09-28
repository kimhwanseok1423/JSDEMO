//호출한 객체가 없을 경우엔 기본적으로  window가 객체이다.
console.log(this);

let member = {
  name: "홍길동",
  show: function () {
    console.log(this);
  },
};
member.show();

let member2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};

member2.show();
////////////////////////////////////////

function showThisName() {
  console.log(this);
}
//window
showThisName();

let showThisName2 = () => {
  console.log(this);
};

//window
showThisName2();
///////////////////////////////////
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log(this, this == btn);
});
let btn2 = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log(this, this == btn2);
}); //window false
///////////////////////////////////////
const hong = { name: "홍길동" };
const jung = { name: "정해인" };
//call(): call매서드는 모든 함수에서 사용할수있으며
//this값을 특정값으로 지정할수있다.
console.log("call()=================");
//Arrow Function 일때 :window
showThisName.call(hong);
//Arrow Function 일때 :window
showThisName.call(jung);

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  console.log(this);
}

//window

update(2019, "IT");
//this로 사용할 hong객체와 update함수의 매개변수에서 벌을 안심할
//{name: '홍길동', birthYear: 2000, job: '프로그래머'
update.call(hong, 2000, "프로그래머");
//////////////////////////////////////////////////
//1.apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
//2. call 일반적인 함수와 마찬ㄴ가지로 매개변수로 직접 받지만 apply은
//매개변수를 배열로 받는다

console.log("apply()=================");
update.apply(hong, [2000, "프로그래머"]);
update.apply(jung, [2016, "디자이너"]);

//////////////////////////////////////////
//bind
//1. call과 사용방법은 같으나 실행을 해야한다.
let hongUpdate = update.bind(hong, 2000, "프로게이머");
hongUpdate();

let jungUpdate = update.bind(jung, 2016, "디자이너");
jungUpdate();
