let = a = prompt("entrer la 1ère note");
let = b = prompt("entrer la 2ème note");
let = c = prompt("entrer la 3ème note");
let = d = prompt("entrer la 4ème note");
let = e = prompt("entrer la 5ème note");

console.log(a, b, c, d, e);

a = Number(a);
b = Number(b);
c = Number(c);
d = Number(d);
e = Number(e);
let moyenne = (a + b + c + d + e) / 5;

console.log(moyenne);

if (moyenne < 8) {
  alert("moyenne inférieur à 8");
} else if (moyenne > 8 && moyenne < 10) {
  alert("moyenne inférieur à 10");
} else if (moyenne < 10 && moyenne < 12) {
  alert("moyenne inférieur à 12");
}
// else if (moyenne<14) {
//   alert("moyenne inférieur à 14");
// }
// else  (moyenne<16) {
//   alert("moyenne inférieur à 16");
// }
