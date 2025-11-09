"use strict"; // Slide 51-52 (mode strict)

/* Données Students: [id, firstName, lastName, note, credits] */
const Students = [ // Slide 38 (tableaux)
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3],
];

// Fonction B
function isAdmitted(note) { // Slide 45-47 (fonction avec param/retour)
    // Seuil d'admission supposé: 10.0
    return Number(note) >= 10.0; // Slide 41-42 (opérateurs rationnels >=), 37-38 (conversion/number)
}

// Fonction A
function deliberation() { // Slide 45-47
    for (const [id, firstName, lastName, note, credits] of Students) { // Slide 44-45 (boucles: for...of), 38 (tableaux), 38-40 (déstructuration)
        const admitted = isAdmitted(note); // A appelle B // Slide 47 (appel de fonction; callback notion), 45-47
        const status = admitted ? "ADMIS" : "AJOURNÉ"; // Slide 41-42 (opérateurs: ternaire)
        console.log(`${id} : ${status}`); // Slide 33-34 (console), 41/141 (template literals)
    }
}

// Brancher le bouton
document.getElementById("btn").addEventListener("click", deliberation);
// Slide 61-65 (getElementById), 127-139 (événements et addEventListener), 20-21/58-60 (DOM sélection + réaction à événement)
