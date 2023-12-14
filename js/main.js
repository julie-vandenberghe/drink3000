//On récupère tous les boutons sélectionner
let btnSelect = document.querySelectorAll("button.select");
let numBtnSlct = btnSelect.length; // Longueur du tableau avec tous les <button>

// On met un écouteur d'event sur tous les boutons sélectionner 
for (var i = 0; i < numBtnSlct; i++) { //Boucle afin d'ajouter un eventListener
    btnSelect[i].addEventListener('click', (e => { //Sur le <btn> où on a cliqué
        let parent = e.target.parentNode.parentNode; //On récupère le noeud parent (div) du <btn> cliqué
        let drinkTitle = parent.querySelector('h3').textContent; //On récupère le titre de la boisson (pourquoi .value ne fonctionne pas ici ?)
        console.log(drinkTitle);
        let div = `<p>${drinkTitle}</p>`;
        document.querySelector("p.noDrink").innerHTML = div;
        //let noDrink = document.querySelector("p.noDrink");
        //console.log(noDrink);
    }));
} 
// On insère la boisson sélectionnée dans le html 
//On supprime  <p class="noDrink">Aucune</p>



let drinkSlct = document.querySelectorAll("div.drinkSelected");
let numDrinkSlct = drinkSlct.length; // Longueur du tableau avec tous les <div>

/* for (var i = 0; i < numDrinkSlct; i++) {
    drinkSlct[i].addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(drinkSlct[i]);
        let drinkTitle = e.target.querySelector('h3').value; //On récupère le titre de la boisson
        console.log(drinkTitle);
    });
} */
//


//type="submit"
//let form = document.getElementById("formNewClient");
//form.addEventListener("submit", (e) => {
//e.preventDefault();
//div.drinkSelected
//p.noDrink;
