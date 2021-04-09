/* Lors de cet atelier, vous devez développer une page web permettant 
la gestion des tâches à réaliser. 

A minima, cette page doit permettre:

    D’ajouter une tâche à la liste
    De marquer une tâche comme en cours
    De modifier une tâche
    De supprimer une tâche

N’hésitez pas à ajouter des fonctionnalités bonus, soyez créatifs! 
Par exemple un système de catégories de tâches (ménage, loisir, administratif, etc…) 
ou un système de timer avec un compte à rebours pour chaque tâche. */

//VARIABLE
const INPUT = document.getElementById("input");
const INPUTBTN = document.getElementById("inputBtn");
const CONTAINER = document.getElementById("listContainer");

//FONCTION POUR AJOUT DE TACHE
function ajouter(e) {
  //ajout div et h3
  let texte = INPUT.value;
  let div = document.createElement("div");
  let p = document.createElement("h3");
  if (texte != "") {
    p.innerText = texte;
    CONTAINER.insertAdjacentElement("beforeend", div);
    div.classList.add("tache");
    div.insertAdjacentElement("beforeend", p);

    //Bouton en cours qui modifie la couleur
    let btnEnCours = document.createElement("input");
    btnEnCours.type = "checkbox";
    btnEnCours.classList.add("checkboxInput");
    /*   btnEnCours.innerText = "En cours"; */
    p.insertAdjacentElement("beforebegin", btnEnCours);
    //Click BTN en cours
    btnEnCours.addEventListener("click", function (e) {
      p.classList.toggle("enCours");
    });

    //Bouton pour modifier le contenu de la tache
    let btnModify = document.createElement("button");
    btnModify.innerText = "Modifier";
    //Click BTN modify
    p.addEventListener("click", function (e) {
      let modifInput = document.createElement("input");
      modifInput.classList.add("modifInput");
      p.insertAdjacentElement("beforebegin", modifInput);
      modifInput.value = texte;
      modifInput.select();
      btnModify.classList.add("displayNone");
      btnCancel.classList.add("displayNone");
      btnEnCours.classList.add("displayNone");
      p.classList.add("displayNone");
      //Entrer sur input pour modifié
      modifInput.addEventListener("change", function (e) {
        p.innerText = modifInput.value;
        p.classList.remove("displayNone");
        btnModify.classList.remove("displayNone");
        btnCancel.classList.remove("displayNone");
        btnEnCours.classList.remove("displayNone");
        modifInput.classList.toggle("displayNone");
        texte = modifInput.value;
      });
    });

    //Bouton pour supprimer la tache
    let btnCancel = document.createElement("button");
    btnCancel.innerHTML = "X";
    p.insertAdjacentElement("afterend", btnCancel);
    //Click BTN cancel
    btnCancel.addEventListener("click", function (e) {
      div.remove();
    });
    //vider le input apres ajout
    INPUT.value = "";
  }
}
//Bouton principal pour ajouter une tache
INPUTBTN.addEventListener("click", ajouter);

//Taper Entrer au lieu de cliquer
INPUT.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    ajouter();
  }
});
