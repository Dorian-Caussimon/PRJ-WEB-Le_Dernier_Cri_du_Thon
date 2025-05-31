function startQuiz() {
    alert("Attention, vous êtes sur le point de commencer le quiz");
    // vérification des champs vide
    let toutremplis = true
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let dateNaissance = document.getElementById("date_naissance").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let statut = document.getElementById("statut").value.trim();


    if (nom === "" || prenom === "" || dateNaissance === "" || mail === "" || statut === "" ) {
        alert("Veuillez remplir tous les champs");
        toutremplis = false;
    }
    console.log(toutremplis);
    if (toutremplis) {
        let debut = confirm("Êtes-vous sûr de vouloir continuer ?");
        start();
    }
}
function start() {
    alert("Le quiz vas commencer !")

    // désactive le bouton apres avoir cliqué
    document.getElementById("Bform").disabled = true;
    let timer = 5;

    // texte sur le poisson
    var span = document.querySelectorAll(".boutonPoisson span")[0];
    span.textContent = timer + " secondes";


    let decompte = setInterval(function () {
        timer--;
        span.textContent = timer + " secondes";
        if (timer === 0){
            clearInterval(decompte);
            document.getElementById("Quiz").style.display = "block";
            document.getElementById("Formulaire").style.display = "none";
        }},1000)
}

let tentative = 0;

function submitQuiz(e){
    e.preventDefault();

    // partie pour calculer le score
    let score = 0;
    let radios = document.getElementsByName("q2");
    for (let radio of radios) {
        if (radio.checked && radio.value === "b") {
            score += 6;
        }
        if (radio.checked && (radio.value ==="a" || radio.value === "c")){
            score -= 4;
        }
    }
    let checkboxes = document.getElementsByName("q1");
    for (let checkbox of checkboxes){
        if (checkbox.checked) {
            if (checkbox.value === "a" || checkbox.value === "c" || checkbox.value === "d"){
                score += 2
            }
            else{
                score -= 3
            }
        }
    }

    let texte = document.getElementById("q3").value.toLowerCase();
    let motsclef = ["océan Atlantique", "océan Pacifique", "océan Indien"];
    for (let mot of motsclef){
        if (texte.includes(mot.toLowerCase())){
            score += 2;
        }
    }

    let checkboxes2 = document.getElementsByName("q5");

    for (let checkbox of checkboxes2) {
        if (checkbox.checked) {

            if (checkbox.value === "a" || checkbox.value === "b" || checkbox.value === "c" || checkbox.value === "e" || checkbox.value === "f") {
                score += 2;
            }

            else {
                score -= 3;
            }
        }
    }
    let tableau = document.querySelector("#resultat tbody");
    let ligne = tableau.insertRow();
    console.log(tentative, score);
    ligne.insertCell().textContent = tentative;
    ligne.insertCell().textContent = score;
    tentative++;
    document.getElementById("Quiz").style.display = "none";
    document.getElementById("Formulaire").style.display = "block";
    document.getElementById("formQuiz").reset();
    document.getElementById("Bform").disabled = false;
    document.querySelectorAll(".boutonPoisson span")[0].textContent = "Commencer le quiz";

}