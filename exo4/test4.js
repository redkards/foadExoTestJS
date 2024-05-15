let message = "voulez vous un café ? (o/n)";
let oui = "o";
let non = "n";
let y = "ok super";
let z = "dommage";

function question(x) {
  x = prompt(message);
  alert(x);
  document.write(message + "<br>");
  document.write(x + "<br>");

  while (x != oui && x != non) {
    x = prompt(message);
    alert(x);
    document.write(message + "<br>");
    document.write(x + "<br>");
  }

  if (x == oui) {
    document.write(y + "<br>");
  }
  if (x == non) {
    document.write(z + "<br>");
  }
}

question();
