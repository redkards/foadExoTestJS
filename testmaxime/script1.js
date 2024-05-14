//Création d'une fonction via la notation classique
function coucou()
{
	return alert('Coucou !');
}

//Création d'une fonction via l'objet Function()
var FonctionCarree = new Function("x","return x * x;");

function FonctionCarreeBis()
{
	return arguments[0]*arguments[0];
}

function RegExpTest(modele, text)
{
	if(modele.test(text))
	{
		document.write(modele + " a été trouvé dans le texte.<br>");
	}
	else
	{
		document.write(modele + " n'a pas été trouvé dans le texte.<br>");
	}
}

function RegExpTestPosition(modele, text)
{
	var position = text.search(modele);
	document.write("La position de l'expression régulière est : " + position + "<br>");
}

function RegExpTestReplace(modele, text, newtext)
{
	var newtext = text.replace(modele, newtext);
	document.write("Nouveau texte : " + newtext + "<br>");
}

function compteur()
{
	let i = 0;
	return function () {return i++};
}

console.clear();

//alert('Coucou !');
document.write("<h1>Afficher du texte avec JavaScript sur la page HTML</h1><br>");
document.write('Bonjour !<br>');
document.write("<h1>Afficher du texte avec JavaScript sur la console</h1><br>");
console.log("Problème !");
console.error("Erreur !");
//console.clear();
document.write("cf. texte de la console<br>");
//Exemples de conditions
document.write("<h1>Exemples de conditions avec l'opérateur ((...) ? ... : ...) </h1><br>");
let nombre = 2;
document.write("nombre = ", nombre, "<br>");
texte = "Dans le dossier, il existe " + nombre + " " + ((nombre == 1) ? "fichier" : "fichiers") +".<br>";
document.write(texte + "<br>");
nombre = 1;
document.write("nombre = ", nombre, "<br>");
texte = "Dans le dossier, il existe " + nombre + " " + ((nombre == 1) ? "fichier" : "fichiers") +".<br>";
document.write(texte);
//Exemples de boucles
document.write("<h1>Exemples de boucles</h1> <br>");
document.write("i < 5 quelle que soit la boucle <br>");
document.write("while <br>");
let i = 0;
while(i < 5)
{
	document.write(i + "<br>");
	i++;
}

document.write("<br>");
document.write("do... while(i < 5); avec i = 0<br>");
i = 0;
do
{
	document.write(i + "<br>");
	i++;
}
while(i < 5);

document.write("do... while(i < 5); avec i = 100<br>");
i = 100;
do
{
	document.write(i + "<br>");
	i++;
}
while(i < 5);

document.write("<br>");
document.write("for() <br>");
for(i = 0 ; i < 5 ; i++)
{
	document.write(i + "<br>");
}

//Exemples de fonctions mathématiques
//Test version objet
document.write("<h1>Exemples de fonctions mathématiques</h1> <br>");
nombre = 4;
document.write("Le carré de " + nombre + " est " + FonctionCarree(nombre) + ".<br>");
//Test version argument
nombre = 5;
document.write("Le carré de " + nombre + " est " + FonctionCarreeBis(nombre) + ".<br>");
//Tester une closure
//La closure est principalement utilisée pour sécuriser une variable.
document.write("<h1>Tester une closure avec un compteur</h1> <br>");
let plusUn1 = compteur();
let plusUn2 = compteur();
document.write("Compteur n°1 : <b>", plusUn1() + "</b><br>");
document.write("Compteur n°1 : <b>", plusUn1() + "</b><br>");
document.write("Compteur n°1 : <b>", plusUn1() + "</b><br>");
document.write("Compteur n°2 : ", plusUn2() + "<br>");
document.write("Compteur n°1 : <b>", plusUn1() + "</b><br>");
document.write("Compteur n°2 : ", plusUn2() + "<br>");
document.write("Compteur n°1 : <b>", plusUn1() + "</b><br>");
document.write("Compteur n°2 : ", plusUn2() + "<br>");
document.write("Compteur n°2 : ", plusUn2() + "<br>");
document.write("Compteur n°1 : <b>", plusUn1() + "</b><br>");
document.write("Compteur n°1 : <b>", plusUn1() + "</b><br>");
//Exemple de fonction auto-invoquée
//Test version objet
document.write("<h1>Exemple de fonction auto-invoquée</h1> <br>");
document.write("La fonction auto-invoquée se déclenche à l'ouverture de la page.<br>");
(
	function(x)
	{
		//Déclarer un nombre
		x = prompt("Entrez un nombre :");
		//Transformer la valeur d'entrée (string) en nombre flottant
		x = parseFloat(x);
		//Vérifier que l'utilisateur ne marque pas n'importe quoi en bloquant l'exécution du prompt avec un while.
		while(Number.isNaN(x) == true)
		{
			x = prompt("Entrez un vrai nombre :");
			x = parseFloat(x);
		}
		//Afficher le résultat avec un alert.
		alert("Le carré de " + x + " est " + x*x + ".");
	}
)();

//Les expressions régulières
document.write("<h1>Tests sur les expressions régulières</h1> <br>");
var modele = /JavaScript/;
document.write("Le modèle est : " + modele + ".<br>");

document.write("<br>Test 1 : <br>");
var text = "Expressions régulières dans JavaScript";
document.write("Le texte testé est : " + text + ".<br>");
RegExpTest(modele, text);

document.write("<br>Test 2 : <br>");
text = "Expressions régulières dans javascript";
document.write("Le texte testé est : " + text + ".<br>");
RegExpTest(modele, text);

document.write("<br>Test 3 : String.search()<br>");
text = "Expressions régulières dans JavaScript";
document.write("Le texte testé est : " + text + ".<br>");
RegExpTestPosition(modele, text);

document.write("<br>Test 4 : String.replace()<br>");
text = "Expressions régulières dans JavaScript";
document.write("Le texte testé est : " + text + ".<br>");
newtext = "JAVA-SCRIPT";
document.write("Remplaçons l'expression régulière par : " + newtext + ".<br>");
RegExpTestReplace(modele, text, newtext);

document.write("<br>Test 5 : String.split()<br>");
text = "JavaScript, C/C++, Perl";
document.write("Le texte à lister est : " + text + "<br>");
var separateur = /, ?/;
textSplit = text.split(separateur);
document.write("La liste est : " + textSplit + "<br>");
for(i = 0 ; i < textSplit.length ; i++)
{
	document.write("Élément " + i + " :" + textSplit[i] + "<br>");
}

document.write("<br>Test 6 : attributs i et g<br>");
modele = /javascript/i;
text = "Du plaisir avec JavaScript";
document.write(text + "<br>");
var recherche = text.search(modele);
document.write("Position de " + modele + " : " + recherche + "<br>");

modele = /JAVA/g;
text = "JAVAScript et JAVA";
document.write(text + "<br>");
recherche = text.replace(modele, "Java");
document.write(recherche + "<br>");

document.write("<br>");
modele = /[a-z]{1,6}/g;
text = "abcdefgh";
document.write(text + "<br>");
recherche = text.replace(modele, "-");
document.write(recherche + "<br>");

document.write("<br>");
modele = /JavaScript|HTML/g;
text = "JavaScript et HTML sont géniaux.";
document.write(text + "<br>");
recherche = text.replace(modele, "-");
document.write(recherche + "<br>");

document.write("<br>");
modele = /(["'])JavaScript\1/g;
var text1 = "Programme 'JavaScript'...";
var text2 = "Programme \"JavaScript\"...";
var text3 = "Programme 'JavaScript\"...";
var recherche1 = text1.search(modele);
var recherche2 = text2.search(modele);
var recherche3 = text3.search(modele);
document.write(text1 + "<br>");
document.write(recherche1 + "<br>");
document.write(text2 + "<br>");
document.write(recherche2 + "<br>");
document.write(text3 + "<br>");
document.write(recherche3 + "<br>");

