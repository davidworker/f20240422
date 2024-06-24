let firstName = 'Lin';
let lastName = 'David';
let fullName = firstName + ' ' + lastName;
// let fullName = 'firstName' + ' ' + lastName;
console.log(fullName);


let t1 = "I'm \"David\"";
console.log(t1); // I'm "David"


let n1 = 1;
let n2 = 1.25;
let n3 = n1 + n2;

console.log(n1, n2, n3);

let sn = '12';
let mix = sn + n1;
console.log(mix);

let sn2 = 'a12';
let snToNum = parseInt(sn2, 10);
console.log(snToNum, typeof snToNum)

let snToNumFast = +sn;
console.log(snToNumFast, typeof snToNumFast)


n1 = 100;

console.log(n1, typeof n1);

let sn1 = n1.toString();
console.log(sn1, typeof sn1);