//약관 동의
document.forms.onsubmit = () => {
  //폼안에있는 서브밋 이벤트가 발생이되면
  let admin = document.admin.frm.admin; // 약관 동의 체크가 되어있는지 확인하기위해 제일먼저
  if (!admin.checked) {
    //선택이 안되어있을떄 문을 실행하기 위해!넣고

    alert("약관에 동의해야 합니다.");
    return false; //안되어있을떄 알람이 뜨고 실행문이 다음을 넘어가지않기위해 false쓰기.
  }
};
//전체선택
document.frm.allCheck.onclick = function () {
  // console.log(this.checked);
  /* document.frm.subject1.checked = this.checked;
  document.frm.subject2.checked = this.checked;
  document.frm.subject3.checked = this.checked;  */
  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup.length);

  /* Arrow function : 상위객체인 document.frm.allcheck을 의미함    (아무거나 써도됨 1번)

  checkgroup.forEach((element) => {
    //<input type="checkbox" name="allCheck" id="allCheck" />
    //console.log(this)
    element.checked = this.checked;
  });  
  */
  ///////////////////////////////////////////////
  let myThis = this; //document.frm.allcheck
  //Annoymous function  :this= window 객체를 의미함
  checkgroup.forEach(function (element) {
    //  console.log(this);
    element.checked = myThis.checked;
  });
  ////////////////////////////////////////////////////////////////
  //Array.from():Nodelist을 Array로 변경          (아무거나 써도됨 2번)

  /*
  console.log(`${checkgroup}`);
  let myArray = Array.from(checkgroup);
  console.log(`${myArray}`);
  myArray.map(function (element) {
    //console.log(this);
    element.checked = myThis.checked;
  }); */

  ///////////////////////////////////////////
  //ESG Spread Operator: NodeList을 Array로 변경   (아무거나 써도됨 3번)
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    //console.log(this);
    element.checked = myThis.checked;
  });
};
