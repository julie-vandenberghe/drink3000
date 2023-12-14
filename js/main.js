let btnSelect = document.querySelectorAll("button.select"); //On récupère tous les boutons sélectionner
let numBtnSlct = btnSelect.length; // Longueur du tableau avec tous les <button>

// On met un écouteur d'event sur tous les boutons sélectionner 
for (var i = 0; i < numBtnSlct; i++) { //Boucle afin d'ajouter un eventListener
    btnSelect[i].addEventListener('click', (e => { //Sur le <btn> où on a cliqué
        let parent = e.target.parentNode.parentNode; //On récupère le noeud parent (div) du <btn> cliqué
        let drinkTitle = parent.querySelector('h3').textContent; //On récupère le titre de la boisson (pourquoi .value ne fonctionne pas ici ?)
        //console.log(drinkTitle); //Pour debugguer : affiche le titre de la boisson sélectionnée dans le log
        document.querySelector("p.drinkSelected").innerHTML = drinkTitle; //On insére le titre de la boisson dans le <p> (à la place de "Aucune")
    }));
} 



