//-----------------------
// AFFICHAGE DE LA BOISSON SÉLECTIONNÉE
let btnSelect = document.querySelectorAll("button.select"); //On récupère tous les boutons sélectionner
let numBtnSlct = btnSelect.length; // Longueur du tableau avec tous les <button>

// On met un écouteur d'event sur tous les boutons sélectionner 
for (let i = 0; i < numBtnSlct; i++) { //Boucle afin d'ajouter un eventListener
    btnSelect[i].addEventListener('click', (e => { //Sur le <btn> où on a cliqué
        let parent = e.target.parentNode.parentNode; //On récupère le noeud parent (div) du <btn> cliqué
        let drinkTitle = parent.querySelector('h3').textContent; //On récupère le titre de la boisson (pourquoi .value ne fonctionne pas ici ?)
        //console.log(drinkTitle); //Pour debugguer : affiche le titre de la boisson sélectionnée dans le log
        document.querySelector("p.drinkSelected").innerHTML = drinkTitle; //On insére le titre de la boisson dans le <p> (à la place de "Aucune")
    }));
} 


//-----------------------
//FILTRE SUR LES BOISSONS
// On vient déclarer des différentes variables :

// Création de nos variables permettant de retrouver mes boutons au clic par leur id

    let btnDesalterante = document.getElementById("btnDesalterante");
    let btnEnergisante = document.getElementById("btnEnergisante");

    // Variables permettant de trier les boissons en fonction de leur classe (désaltérante ou énergisante)

    let boissonsDesalterantes = document.querySelectorAll('.drink.desalterante');
    let boissonsEnergisantes = document.querySelectorAll('.drink.energisante');

    // Première utilisation du addEventListernet au click pour l'ID btnDesalterante

    btnDesalterante.addEventListener("click", function () {
  
        boissonsEnergisantes.forEach(e => { // On vient parcourir toutes les boissons énergisantes (grâce à leur classe)
            e.classList.toggle("hidden"); // On vient appliquer la classe hidden à toutes les classes similaires qui ont été trouvées. Le toggle permet de savoir si la classe Hidden est déjà présente, si oui on la supprime
        });

      
        boissonsDesalterantes.forEach(e => { // On vient cette fois ci chercher toutes les boissons avec la classe désaltérante
            e.classList.remove("hidden"); // On supprime la classe hidden si présente, dans le cas où l'on cliquerait sur le bouton Désaltérante et ensuite sur le bouton Energisante
        });

    });


    // Rebelotte mais dans le sens inverse pour le bouton Energisante

    btnEnergisante.addEventListener("click", function () {
       
        boissonsDesalterantes.forEach(e => {
            e.classList.toggle("hidden");
        });

      
        boissonsEnergisantes.forEach(e => {
            e.classList.remove("hidden");
        });
    });


//-----------------------
// NAVBAR
// Affichage de la navbar au scroll
let navbar = document.getElementById("navbar"); // On récupère la navbar dans le html
let initScrollpos = 0; // On déclare la position sans scroll (Y = 0)
window.onscroll = function() { // Instructions lors du scroll 
    let currentScrollPos = window.scrollY; // On récupère la position Y
    if (initScrollpos < currentScrollPos) { // Si le Y est plus grand que 0 (c'est-à-dire position sans scroll)
        navbar.classList.remove("hidden"); // On supprime la class "hidden" pour afficher la navbar
    } else { // Sinon (Si y = 0, donc s'il n'y a pas de scroll)
        navbar.classList.add("hidden");  //On rajoute la class "hidden" pour cacher la navbar
}
}

// Affichage du menu déroulant sur le burger menu
let btnBurger = document.querySelector("button.burger"); // On récupère le bouton burger
let menu = document.querySelector("ul.menu") ; // On récupère le menu
const links = document.querySelectorAll("nav ul.menu li"); // On récupère les li

btnBurger.addEventListener('click', (e => { // On ajoute un écouteur d'event au clic
    menu.classList.toggle("active"); // Si la classe active n'est pas là, on la rajoute. Si elle est là, on la supprime.
}));

//Permet de "supprimer"/ranger le menu au clic d'un des liens
links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

  
