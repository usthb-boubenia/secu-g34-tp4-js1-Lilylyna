"use strict"; // Slide 51-52 (mode strict)

function f1() { // Slide 45-47 (fonctions)
    console.log("=== F1: Tableau Etudiants ==="); // Slide 33-34
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; // Slide 38 (tableaux)
    etudiants.forEach(e => console.log(e)); // Slide 44-45 (forEach); 33-34 (console)
}

function f2() { // Slide 45-47
    console.log("=== F2: Objet Etudiant ==="); // Slide 33-34
    const etudiant = { nom: "John", prenom: "DOE", age: 30 }; // Slide 39 (objets)
    console.log(etudiant); // Slide 33-34
}

function f3() { // Slide 45-47
    console.log("=== F3: Tableau d'objets Etudiants ==="); // Slide 33-34
    const etudiants = [ // Slide 40 (tableau d’objets + JSON mention)
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    etudiants.forEach(e => console.log(`${e.nom}-${e.prenom}-${e.age}`)); // Slide 44-45 (forEach), 33-34 (console), 41/141 (bonnes pratiques: template literals)
}
