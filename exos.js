const exo1 = () => {
  alert("Voulez vous un café ?");
};

const exo2 = () => {
  let reponse = prompt("Voulez vous un café ? (O/N)");
  alert("Réponse saisie : " + reponse);
};

const exo4 = () => {
  //Initialisation de certaines variables
  let continuer = true;
  let reponse = "";

  // Boucle Infinies
  while (continuer) {
    reponse = prompt("Voulez vous un café ? (O/N)");
    // On met en majuscule pour eviter les problème de casse
    reponse = reponse.toUpperCase();
    // On gère la réponse avec un if else
    if (reponse == "O" || reponse == "N") {
      alert("Réponse saisie : " + reponse);
      continuer = false;
    } else {
      alert("Saisie erronée !");
    }
  }
};

exo5 = () => {
  // Initialisation
  let inputNumber = 0;

  // Tant que la saisine n'est pas bonne on répete
  while (inputNumber < 10 || inputNumber > 20) {
    const inputString = prompt("Entrez un nombre entre 10 et 20");
    inputNumber = Number(inputString);
    // On affiche le message correspondant selon si le nombre est trop petit ou trop grand
    if (inputNumber < 10) {
      alert("Plus grand");
    } else if (inputNumber > 20) {
      alert("Plus petit");
    }
  }
};

exo6 = () => {
  // Fonction qui demande un nombre entre 0 et 20
  const demanderNombre = () => {
    // Boucle Infinie
    while (true) {
      // On demande une saisie
      const saisieUser = prompt("Entrez un nombre entre 0 et 20");

      // Bloc try catch pour gérer les saisie invalides
      try {
        // Si la saisie n'est pas un nombre valide on lance une erreur
        const nombre = Number(saisieUser);
        if (nombre < 0 || nombre > 20 || isNaN(nombre)) {
          throw new Error();
        } else {
          // Si la saisie est correct on rettourne le nombre, ce quitte la fonction
          return nombre;
        }
      } catch {
        // Si une erreur est interceptée on affiche ce message
        alert("Saisie invalide, essayez a nouveau");
      }
    }
  };

  // Liste des nombres
  const listeNombre = [];

  // On demande les 5 notes et on les ajoutes a la liste
  for (i = 0; i < 5; i++) {
    saisieUser = demanderNombre();
    listeNombre.push(saisieUser);
  }

  // On calcule la somme des notes saisies à l'aide de la methode reduce
  const somme = listeNombre.reduce(
    (acccumulator, currentValue) => acccumulator + currentValue,
    0
  );

  // On calcule la moyenne a partir de la somme
  const moyenne = somme / listeNombre.length;

  // On affiche la mention
  if (moyenne < 8) {
    alert("Recalé !");
  } else if (moyenne < 10) {
    alert("Admis oral du deuxième groupe");
  } else if (moyenne < 12) {
    alert("Mention Passable");
  } else if (moyenne < 14) {
    alert("Mention Assez Bien");
  } else if (moyenne < 16) {
    alert("Mention Bien");
  } else {
    alert("Mention Très Bien");
  }
};

const exo7 = () => {
  // Fonction qui demande un nombre à l'utilisateur
  const demanderNombre = (message) => {
    while (true) {
      // On demande une saisie
      const saisieUser = prompt(message);

      // Bloc try catch pour gérer les saisie invalides
      try {
        // Si la saisie n'est pas un nombre valide on lance une erreur
        const nombre = Number(saisieUser);
        if (isNaN(nombre)) {
          throw new Error();
        } else {
          // Si la saisie est correct on rettourne le nombre, ce qui quitte la fonction
          return nombre;
        }
      } catch {
        // Si une erreur est interceptée on affiche ce message
        alert("Saisie invalide, essayez a nouveau");
      }
    }
  };

  // On demande les deux nombres
  const a = demanderNombre("Saisir un premier nombre");
  const b = demanderNombre(`saisir un second nombre ( premier nombre : ${a} )`);
  // On affiche le produit
  alert(`Produit de ${a} * ${b} = ${a * b}`);
};

const exo8 = () => {
  const demanderNombre = (message) => {
    while (true) {
      // On demande une saisie
      const saisieUser = prompt(message);

      // Bloc try catch pour gérer les saisie invalides
      try {
        // Si la saisie n'est pas un nombre valide on lance une erreur
        const nombre = Number(saisieUser);
        if (isNaN(nombre)) {
          throw new Error();
        } else {
          // Si la saisie est correct on rettourne le nombre, ce qui quitte la fonction
          return nombre;
        }
      } catch {
        // Si une erreur est interceptée on affiche ce message
        alert("Saisie invalide, essayez a nouveau");
      }
    }
  };

  // Initialisation variables
  const LENGTH = 5;
  const listeSaisies = [];

  // On ajoute des elements a la liste pour un total de la longueur voulue de la liste
  for (i = 0; i < LENGTH; i++) {
    let saisie;
    saisie = demanderNombre(`Entrez le terme de rang ${i} de la liste l`);
    listeSaisies.push(saisie);
  }

  // On fait la somme avec reduce
  const somme = listeSaisies.reduce(
    (acccumulator, currentValue) => acccumulator + currentValue,
    0
  );

  // On calcule la moyenne
  const moyenne = somme / listeSaisies.length;
  alert(`La moyenne des nombres saisis est : ${moyenne}`);
};

const exo9 = () => {
  //Initialisation variables
  let inputNumber = NaN;
  let continuer = true;

  //Boucle infinie avec un do while
  do {
    const inputString = prompt("Entrez un nombre entre 1 et 3");
    inputNumber = Number(inputString);
    // Saisie incorrecte
    if (inputNumber < 1 || inputNumber > 3 || isNaN(inputNumber)) {
      let inputNumber = alert("Tu ne comprends rien");
    } else {
      // saisie correcte on passe le flag continuer a false
      alert("C'est bien gamin !!!");
      continuer = false;
    }
  } while (continuer);
};

const exo10 = () => {
  const demanderNombre = (message) => {
    while (true) {
      // On demande une saisie
      const saisieUser = prompt(message);

      // Bloc try catch pour gérer les saisie invalides
      try {
        // Si la saisie n'est pas un nombre valide on lance une erreur
        const nombre = Number(saisieUser);
        if (isNaN(nombre)) {
          throw new Error();
        } else {
          // Si la saisie est correct on rettourne le nombre, ce qui quitte la fonction
          return nombre;
        }
      } catch {
        // Si une erreur est interceptée on affiche ce message
        alert("Saisie invalide, essayez a nouveau");
      }
    }
  };

  let message = "";
  const depart = demanderNombre("Entrez un nombre de départ");
  for (i = depart; i < depart + 10; i++) {
    message += `${i}\n`;
  }
  alert(message);
};

const exo11 = () => {
  // Trouver la factorielle par récursion
  const facto = (n) => {
    // condition de base
    if (n == 0) {
      return 1;
    } else {
      // Recursion
      return n * facto(n - 1);
    }
  };

  // FOnction qui gère la saisie utilisateur
  const demanderNombre = (message) => {
    while (true) {
      // On demande une saisie
      const saisieUser = prompt(message);

      // Bloc try catch pour gérer les saisie invalides
      try {
        // Si la saisie n'est pas un nombre valide on lance une erreur
        const nombre = Number(saisieUser);
        if (isNaN(nombre)) {
          throw new Error();
        } else {
          // Si la saisie est correct on rettourne le nombre, ce qui quitte la fonction
          return nombre;
        }
      } catch {
        // Si une erreur est interceptée on affiche ce message
        alert("Saisie invalide, essayez a nouveau");
      }
    }
  };

  const nombre = demanderNombre("Entrer n");
  const resultat = facto(nombre);
  alert(`${nombre}! = ${resultat}`);
};
