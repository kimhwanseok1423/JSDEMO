let myNode = document.getElementById("p2");

//parentNode
let ptNode = myNode.parentNode;
console.log(ptNode);
console.log(`parentNode:${ptNode}`);
ptNode.style.color = "blue";
////////////////////////////////////////
let prevNode = myNode.previousSibling;
console.log(`prevNode:${prevNode}`);

let nextNode = myNode.nextSibling;
console.log(`nextNode:${nextNode}`);
////////////////////////////////
//previousElementSibling
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode:${prevEleNode},${prevEleNode.innerText}`);
///////////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode:${nextEleNode},${nextEleNode.innerText}`);

/////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.children;
console.log(`divChildesNode:${divChildesNode}`);
console.log(divChildesNode);

//children
let divChildren = divNode.children;
console.log(`divChildren:${divChildren}`);
console.log(`---------`);
console.log(divChildren);
console.log(divChildren[0]);
console.log(divChildren.item(0));
console.log(divChildren.namedItem("p1"));

let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
console.log(aNode);

aNode = pNode.firstElementChild;
console.log(aNode);
////////////////////////////////////

//객체.속성명 , 객체.속성ㅇ명=값;
let aAttrNode = aNode.getAttribute("src");
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute("title", "스타배우");
console.log(aNode.getAttribute("title"));

aNode.id = "imgGosu";
console.log(aNode.id);
