//opt1 버튼을 누르면 25만원이 추가되고
//otp 누르면 추가
//opt3 누르면 추가
let totalCar = document.getElementById("total"); // tbody 자손중에 input 요소안에 type이 checkbox인 있는 값을 가져온다
let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt); //nodelist
//nodeList을 Array로 변환
let myChb = [...chbCnt];

//checkbox에 onclick이벤트가 발생되었을때 수행될 carCount()을 등록
myChb.map((element) => {
  //window
  // console.log(this);
  element.onclick = carCount;
});
let basicCar = 0;
function carCount() {
  //this는 현재 이벤트가 발생된 checkbox 객체를 나타냄
  console.log(this);
  basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });
  totalCar.value = basicCar;
}
