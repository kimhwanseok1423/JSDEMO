//inner_list으ㅣ 자식 li를 가져올것임
// 작은 이미지를 보이면 큰 이미지 보이게

let bigPhoto = document.querySelector("#photo >img");
console.log(bigPhoto);

let list_zone = document.querySelector("#inner_list");
let ul_li = list_zone.children;
console.log(ul_li); //htmlcollection(8) 을 배열 Array로 바꾸기
ul_li = [...ul_li];

ul_li.map((liTag, idx) => {
  let aTag = liTag.querySelector("a");
  aTag.onclick = () => {
    bigPhoto.src = aTag.href;
    return false; //e.preventDefault()
  };
});

//(2) 다음 >버튼 클릭했을때 <li>이 100만큼 이동하게 한다.
let m_num = 0;
console.log("sssss");

let b_btn = document.querySelector("#next_btn");
b_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false;
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + "px";
  return false;
};
//(3) 이전 (<) 클릭할때 마다 <li>이 100만큼 이동하게 한다.
let before_btn = document.querySelector("#before_btn");
before_btn.onclick = (e) => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + "px";
  return false; //e.prevetDefault()
};
