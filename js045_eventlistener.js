let btn = document.querySelector("button");
btn.onclick = () => {
  alert("click1");
};

btn.onclick = () => {
  alert("click2");
};

//둘다 출력하고 싶을떄

//btn.addEventListener("이벤트",함수,아파트 전파)
//이벤트전파: true 캡처링 , flase ;
btn.addEventListener("click", click1, false);
btn.addEventListener("click", click2, false);
