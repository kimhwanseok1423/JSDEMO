let pNode = document.getElementById("wrap");
//1p null
console.log(`${pNode.nodeType} ${pNode.nodeName}${pNode.nodeValue}`);
//속성명
let pAttr = pNode.attributes;
//amedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr);

console.log(pAttr[0]);
console.log(pAttr.id);
console.log(pAttr.length);
console.log(`${pAttr[0].nodeType}, ${pAttr[0].nodeName},${pAttr[0].nodeValue}`);
let pIdAttr = pNode.getAttribute("id");
console.log(pIdAttr);

let textNode = pNode.firstChild;
//'content'
console.log(textNode);
console.log(`${textNode.nodeType},${textNode.nodName},${textNode.nodeValue}`);

///////////////////////////////////////////////////////////////////////////////////

//

let bodyNode = document.getElementsByTagName("body")[0];
console.log(bodyNode.innerText); //text만
console.log(bodyNode.innerHTML); //모두 가져옴

////////////////////////////////////////////////
//value
let fname = document.querySelector("#fname");
console.log(fname.value);
