console.clear();
//Déclaration d'un Array
document.write("<h1>Déclaration d'un Array</h1>" + "<br>");
document.write("<h2>Déclaration 1 : </h2>" + "<br>");
let table = [0, 1, 2, 3, 4];
document.write("longueur = " + table.length + "<br>");
document.write(table.join() + "<br>");
document.write("<h2>Déclaration 2 : </h2>" + "<br>");
table = new Array(0, 1, 2, 3, 4);
document.write("longueur = " + table.length + "<br>");
document.write(table.join() + "<br>");
document.write("<h2>Déclaration 3 : </h2>" + "<br>");
table = new Array();
document.write("longueur = " + table.length + "<br>");
document.write(table.join() + "<br>");
document.write("<h2>Déclaration 4 : </h2>" + "<br>");
table = new Array(5);
document.write("longueur = " + table.length + "<br>");
document.write(table.join() + "<br>");
document.write("<br>");
//Les méthodes de Array
table = [0, 1, 2, 3, 4];
document.write("<h1>Méthodes d'un Array</h1>" + "<br>");
document.write("<h2>Concaténation de plusieurs Array</h2>" + "<br>");
let table2 = [5, 6];
let table3 = table.concat(table2);
document.write("Table initiale : " + table.join() + "<br>");
document.write("Table à ajouter : " + table2.join() + "<br>");
document.write("Table finale : " + table3.join() + "<br>");
document.write("<h2>Ajouter un élément à la fin d'une table</h2>" + "<br>");
table = [0, 1, 2, 3, 4];
table2 = 5;
table.push(table2);
document.write("Table initiale : " + table.join() + "<br>");
document.write("Table à ajouter : " + table2 + "<br>");
document.write("Table finale : " + table + "<br>");
document.write("" +  + "<br>");
document.write("<h2>Supprimer un élément à la fin d'une table</h2>" + "<br>");
document.write("Table initiale : " + table.join() + "<br>");
document.write("Valeur supprimée : " + table.pop() + "<br>");
document.write("Table finale : " + table.join() + "<br>");
document.write("<h2>Supprimer un élément au début d'une table</h2>" + "<br>");
document.write("Table initiale : " + table.join() + "<br>");
document.write("Valeur supprimée : " + table.shift() + "<br>");
document.write("Table finale : " + table.join() + "<br>");
document.write("<h2>Ajouter un élément au début d'une table</h2>" + "<br>");
document.write("Table initiale : " + table.join() + "<br>");
table.unshift(0);
document.write("Valeur ajoutée : " + table[0] + "<br>");
document.write("Table finale : " + table.join() + "<br>");
document.write("<h2>Inverser l'ordre des éléments d'une table</h2>" + "<br>");
document.write("Table initiale : " + table.join() + "<br>");
document.write("Valeur ajoutée : " + table.reverse() + "<br>");
document.write("Table finale : " + table.join() + "<br>");
document.write("<h2>Trier dans l'ordre les éléments d'une table</h2>" + "<br>");
document.write("Table initiale : " + table.join() + "<br>");
document.write("Valeur ajoutée : " + table.sort() + "<br>");
document.write("Table finale : " + table.join() + "<br>");
//Les méthodes de Array
document.write("<h1>Les Array multidimensionnels</h1>" + "<br>");
table = new Array(8);
for(var i = 0 ; i < table.length ; i++)
{
	table[i] = new Array(4);
}
for(var i = 0 ; i < table.length ; i++)
{
	for(var j = 0 ; j < table[i].length ; j++)
	{
		table[i][j] = i * j;
		document.write("(" + i + "," + j + ") = " + table[i][j] + "<br>");
	}
}
document.write("<br>");
//
document.write(navigator.appName + "<br>");
document.write(navigator.appVersion + "<br>");
document.write(navigator.language + "<br>");
document.write(navigator.platform + "<br>");
document.write(navigator.appCodeName + "<br>");
document.write(navigator.UserAgent + "<br>");
document.write("<br>");
document.write(screen.height + "<br>");
document.write(screen.width + "<br>");
document.write(screen.pixelDepth + "<br>");
document.write(screen.colorHeight + "<br>");
document.write(screen.availHeight + "<br>");
document.write(screen.availWidth + "<br>");
document.write(screen.outerWidth + "<br>");
document.write(screen.outerHeight + "<br>");
document.write(screen.innerWidth + "<br>");
document.write(screen.innerHeight + "<br>");
document.write("<br>");
document.write(navigator.plugins.length + "<br>");
if(navigator.plugins.length != 0)
{
	for(element in navigator.plugins)
	{
		document.write(navigator.plugins[element].name + "<br>");
		document.write(navigator.plugins[element].filename + "<br>");
	}
}



document.write("<br>");