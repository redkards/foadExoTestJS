//Création d'un objet
class LecteurMusique
{
	constructor(morceau, format)
	{
		this.setMorceau(morceau);
		this.setFormat(format);
	}
	lecteur()
	{
		console.log("Lecture en cours : " + this.getMorceau() + "." + this.getFormat());
	}
	getFormat()
	{
		return this.format;
	}
	setFormat(format)
	{
		this.format = format;
	}
	getMorceau()
	{
		return this.morceau;
	}
	setMorceau(morceau)
	{
		this.morceau = morceau;
	}
}

console.clear();
//Instance de la classe LecteurMusique
let musique = new LecteurMusique("La carioca", "mp3");
//Appel d'une méthode
musique.lecteur();
//JavaScript peut utiliser les getters et setters, mais ce n'est pas obligatoire.
document.write(musique.getMorceau() + "<br>");
document.write(musique.getFormat() + "<br>");
//JavaScript donne accès aux variables de classes. Il n'y a pas d'accès privé !
document.write("- " + musique.morceau + "<br>");
document.write("- " + musique.format + "<br>");
//JavaScript permet de se saisir d'un objet instancié.
document.write("<br>");
with(musique)
{
	document.write(morceau + "." + format + "<br>");
	document.write(getMorceau() + "." + getFormat() + "<br>");
}
//JavaScript permet de parcourir les propriétés d'un objet instancié.
document.write("<br>");
for(element in musique)
{
	document.write(musique[element] + "<br>");
}
//JavaScript peut définir une classe avec des propriétés.
document.write("<br>");
var photo = {
	source: "photo.jpg",
	titre: "Moi",
	largeur: 80,
	hauteur: 120
	};
document.write(photo.source + "<br>");
document.write(photo.titre + "<br>");
document.write(photo.largeur + "<br>");
document.write(photo.hauteur + "<br>");
//JavaScript peut initier une classe avec une simple fonction constructeur.
document.write("<br>");
function Image(source, titre, largeur, hauteur)
{
	this.source = source;
	this.titre = titre;
	this.largeur = largeur;
	this.hauteur = hauteur;
}
var photo = new Image("photo.jpg", "Moi", 80, 120);
document.write(photo.source + "<br>");
document.write(photo.titre + "<br>");
document.write(photo.largeur + "<br>");
document.write(photo.hauteur + "<br>");

//
