function addZero(num) {
  return num < 10 ? "0" + num : "" + num;
}
function setText(selector, text) {
  let targetElement = document.querySelector(selector);
  targetElement.innerText = text;
}
let watchTime = () => {
  const present = new Date();
  const daylist = ["일", "월", "화", "수", "목", "금", "토"];
  const hour = addZero(present.getHours());
  const minute = addZero(present.getMinutes());
  const seconds = addZero(present.getSeconds());
  console.log(`${hour}-${minute}-${seconds}`);

  setText("#hours", hour);
  setText("#minute", minute);
  setText("#seconds", seconds);

  const year = present.getFullYear();
  const month = addZero(present.getMonth() + 1);

  const date = addZero(present.getDate());
  const day = present.getDay();
  setText("#year", year);
  setText("#month", month);
  setText("#date", date);
  setText("#day", `${daylist[day]}요일`);
};
watchTime();
let clockInterval = setInterval(watchTime, 1000);
/*
setTimeout(실행함수,시간) :일정한 시간이 지난후 한번만 실행됨
setInterval(실행함수,시간):일정 시간 간격을 두고 반복 실행함

*/
