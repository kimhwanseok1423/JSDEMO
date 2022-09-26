let hNode = document.getElementById("selector"); //getElementById 뜻은 selector라는 id를 찾도록 하기위해 쓰임
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selector");
console.log(hId, typeof hId);
// querySelector 뜻 특정 name 이나 id 를 제한하지않고 css선택자를 사용하여 요소를 찾습니다.
//(#sections) -> sections 아이디를 가진 요소를 찾습니다
//(.section) -> section 클래스명을 가진 요소를 찾습니다

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTMLcollection(4)
let pNode = document.getElementsByTagName("p"); //p가 포함된 애들을 pNode에 전부호출
console.log(pNode, typeof pNode);
console.log(pNode.length);
console.log(pNode[0], pNode.item(0));
console.log(pNode[0].innerText);
pNode[0].style.backgroundColor = "blue";

function process() {
  alert("dd");
  let fname = document.frm.fname;
  console.log("fname", fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  return false;
}
