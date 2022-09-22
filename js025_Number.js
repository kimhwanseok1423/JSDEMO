let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`); //num
console.log(`fData=${typeof fData}`); //num
console.log(`nObj=${typeof nObj}`); //object

console.log(typeof nObj.toString());
console.log(typeof data.toString());

Number.prototype.toString = function () {};
console.log(data + fData); //20
console.log(data + nObj); //number+object=20

//NUmber->number
//valuof() object=> primitive
console.log(typeof nObj.valueOf());
console.log(typeof new String("javascript").valueOf());

//let val = "10.3";
let val = "A10";
console.log(val + val);
console.log(Number(val) + Number(val));
console.log(parseInt(val) + parseInt(val));
console.log(parseFloat(val) + parseFloat(val));

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NAN);
