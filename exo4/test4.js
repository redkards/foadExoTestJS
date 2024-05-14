let inf = 10;
let sup = 20;
let message = "choisir un chiffre";
y = "plus petit";
z = "plus grand";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const chiffre = randomIntFromInterval(10, 20);
console.log(chiffre);

function question(x) {
  while (x != chiffre) {
    x = prompt(message);

    if (x < chiffre) {
      alert(z);
    }
    if (x > chiffre) {
      alert(y);
    }
    if (x == chiffre) {
      alert("gagné");
    }
  }
  document.write("vous avez gagné");
}
question();
