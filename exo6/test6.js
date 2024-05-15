let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let message1 = "entrer la 1ère note";
let message2 = "entrer la 2ème note";
let message3 = "entrer la 3ème note";
let message4 = "entrer la 4ème note";
let message5 = "entrer la 5ème note";
let nombres = [a, b, c, d, e];

let filtre = function (nombre) {
  return Math.round(nombre);
};

function question() {
  a = prompt(message1);
  b = prompt(message2);
  c = prompt(message3);
  d = prompt(message4);
  e = prompt(message5);

  console.log(a, b, c, d, e);
}
// function moyenne() {
//   a + b + c + d + e;
// }
Number(a);

console.log(a);

// let x = Number(a) + Number(b) + Number(c) + Number(d) + Number(e);

question();
//moyenne();
//console.log(moyenne);
// console.log(x);
