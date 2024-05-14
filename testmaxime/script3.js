document.write("<h2>Test de l'héritage avec prototype</h2>");
function ClasseMere(nom = "Inconnu")
{
	this.nom = nom;
	this.attaque = function() {return "pan !"};
}

function ClasseFille(nom = "Inconnu", arme = "pistolet")
{
	ClasseMere.call(this, nom);
	this.arme = arme;
}

ClasseFille.prototype = Object.create(ClasseMere.prototype);

document.write(ClasseMere.nom + "<br>");
document.write(ClasseFille.arme + "<br>");
document.write("<br>");

let test = new ClasseMere();
document.write(test.nom + "<br>");
document.write(test.attaque() + "<br>");
document.write("<br>");

test = new ClasseFille("Max", "carabine");
document.write(test.nom + "<br>");
document.write(test.arme + "<br>");
document.write(test.attaque() + "<br>");
document.write("<br>");

test = new ClasseFille("Max");
document.write(test.nom + "<br>");
document.write(test.arme + "<br>");
document.write(test.attaque() + "<br>");
document.write("<br>");

console.log(ClasseMere.prototype);
console.log(ClasseFille.prototype);

//----------------------------------------------------------
console.clear();

document.write("<h2>Test de l'héritage avec class</h2>");
class ClasseMere2
{
	constructor(nom = "Max")
	{
		this.nom = nom;
		this.attaque = function() {return "pan !"};
	}
}

class ClasseFille2 extends ClasseMere2
{
	constructor(nom = "Juju", arme = "pistolet")
	{
		super(nom);
		this.arme = arme;
	}
}

document.write(ClasseMere.nom + "<br>");
document.write(ClasseFille.arme + "<br>");
document.write("<br>");

test = new ClasseMere2();
document.write(test.nom + "<br>");
document.write(test.attaque() + "<br>");
document.write("<br>");

test = new ClasseFille2();
document.write(test.nom + "<br>");
document.write(test.arme + "<br>");
document.write(test.attaque() + "<br>");
document.write("<br>");

test = new ClasseFille2("Pascal", "carabine");
document.write(test.nom + "<br>");
document.write(test.arme + "<br>");
document.write(test.attaque() + "<br>");

console.log(ClasseMere2.prototype);
console.log(ClasseFille2.prototype);