document.querySelector(".red").onclick = (e) => {
  alert("red");
};
document.querySelector(".green").onclick = (e) => {
  alert("green");
};
document.querySelector(".blue").onclick = (e) => {
  alert("blue");
  console.log(e);
  e.stopPropagation();
};

document.querySelector("a").onclick = (e) => {
  alert("안녕하세요");
  // e.preventDefault();
};

/*
[1]Event Propagation(이벤트 전파)
1)캡처링:부모요서에서Target요소로 이벤트 전파
버블링: Target요소에서  부모요소로 이벤트 전파

[2]. 이벤트 차단
stopPropagation()

[3] stopPropagation()와 preventDefault()비교
stopPropagation();이벤트 진짜 처단 return false(jQuery)
preventDefault():디폴트 이벤트 차ㅏ단 return false(javascript,jQuery)

//https://velog.io/@jakeseo_me/2-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%BA%A1%EC%B2%98%EB%A7%81-%EB%B2%84%EB%B8%94%EB%A7%81 
/한번들어가서 보기










*/
