import {Stagiaire} from "./stagiaires.js"
import { Classe } from "./classe.js"

const createButton = document.querySelector("#create")
const showButton = document.querySelector("#show")
let stage = {}

function creerStage(){
    const intitule = document.querySelector("#intitule")
    const dateDebut = document.querySelector("#dateDebut")
    const dateFin = document.querySelector("#dateFin")
    let stage = new Classe(intitule.value, dateDebut.value, dateFin.value)
    return stage
}

let stagiaireA = new Stagiaire()
stagiaireA.nom="dupont"
stagiaireA.prenom="martin"

let anotherStagiaire= new Stagiaire("lucette","lenoir")
console.log(anotherStagiaire);

createButton.addEventListener('click', function(){
    stage = creerStage()
})

showButton.addEventListener('click', function(){
    console.log(stage);
})