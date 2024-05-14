function replaceAll(texte, caractereARemplacer, nouveauCaractere)
{
	//Transformation des entrées en chaînes de caractères
	texte = texte.toString();
	caractereARemplacer = caractereARemplacer.toString();
	nouveauCaractere = nouveauCaractere.toString();
	//Transformation de la chaîne de caractères
	let texte2 = "";
	for(element in texte)
	{
		if(texte[element] == caractereARemplacer)
		{
			texte2 = texte2.concat(nouveauCaractere);
		}
		else
		{
			texte2 = texte2.concat(texte[element]);
		}
	}
	return texte2;
}

console.clear();

//
let text = "texte";
for(element in text)
{
	document.write(text.charAt(element) + "<br>");
}

document.write("<br>");
for(var i = 0 ; i < text.length ; i++)
{
	document.write(text.charAt(i) + "<br>");
}

document.write("<br>");
//
let text1 = "Ceci est une chaîne ";
let text2 = "de caractères.";
document.write(text1 + text2 + "<br>");
document.write(text1.concat(text2) + "<br>");
document.write(`${text1}${text2}` + "<br>");
document.write("<br>");
//
document.write(text.indexOf('t') + "<br>");
document.write(text.lastIndexOf('e') + "<br>");
document.write("<br>");
//
document.write(text.toUpperCase() + "<br>");
document.write(text.toLowerCase() + "<br>");
document.write("<br>");
//
document.write(text.substring(1,3) + "<br>");
document.write(text.substr(1,4) + "<br>");
document.write("<br>");
//
document.write(text.padStart(10, "-") + "<br>");
document.write(text.padEnd(10, "-") + "<br>");
document.write("<br>");
//
let test = " ".concat(text1);
document.write(">" + test + "<br>");
document.write(">" + "trim() : <br>");
document.write(">" + test.trim() + "<br>");
document.write(">" + "trimStart() : <br>");
document.write(">" + test.trimStart() + "<br>");
document.write(">" + "trimEnd() : <br>");
document.write(">" + test.trimEnd() + "<br>");
document.write("<br>");
//">" permet de visualiser la disparition de l'espace de début en fonction des cas
//
document.write(text1.includes('t') + "<br>");
document.write(text1.includes("Ceci") + "<br>");
document.write(text1.includes("z") + "<br>");
document.write("<br>");
//
document.write((text1 + "<br>").repeat(10));
document.write("<br>");
//
document.write(text1.replace("e", "?") + "<br>");
//document.write(text1.replaceAll("e", "?") + "<br>");
document.write(replaceAll(text1, "e", "?") + "<br>");
document.write("<br>");
//
document.write(text.slice(2) + "<br>");
document.write(text.slice(1,3) + "<br>");
document.write(text.slice(-2) + "<br>");
document.write(text.slice(-3,-2) + "<br>");
document.write("<br>");
//
test = text1.concat(text2).split(' ');
for(element in test)
{
	document.write(test[element] + "<br>");
}
document.write("<br>");
//
document.write("chercher.com".italics().link("file:///C:/+Maxime Forriez+/JavaScript/test1.html"));
document.write("<br>");
//lien en interne, il faut mettre file:///
