//exercice 1

function longueurChaine(chaine){
    return chaine.length
}

const chaine= "lorem ipsum"
let chaineLenght= longueurChaine(chaine)
console.log(chaineLenght);


//exercice 2

function elementPresent(tableau,element){
    if (tableau.includes(element)){
        return true
    }else{ return false}
}

const randomTableau = ["kiwi","banane", "cerise", "pomme"]
presence= elementPresent(randomTableau,"kiwi")
console.log(presence);


//exercice 3

const randomTableau2 = ["kiwi","banane", "cerise", "pomme"]
function compterElements(tableau){
    return tableau.length
}
let tailleTableau = compterElements(randomTableau2)
console.log(tailleTableau);

//exercice4

function chaineEnMots(chaine){
    const nombreMots=chaine.split(" ")
    return nombreMots
}

const LonguePhrase= "lorem ipsum dolo sit ama"
let tableauPhrase= chaineEnMots(LonguePhrase)
console.log(tableauPhrase);


//exercice 5

function filtrerNombre(tableau,valeur){
    return tableau.filter((element) => element > valeur)
}

const tableauNombre=[3,4,32,67,9,7,45];
let tableauTrier= filtrerNombre(tableauNombre,20);
console.log(tableauTrier);


// exercice 6

function ajouterPropriete(objet,cle,valeur){
    return objet[cle]=valeur
}

const objet={};

ajouterPropriete(objet,"nom","damien");
ajouterPropriete(objet,"XXX","feur");
console.log(objet);


//exercice 7

function fusionnerTableau(tableau1,tableau2){
    return tableau1.concat(tableau2);

}

let fusionTab = fusionnerTableau(tableauNombre,tableauPhrase);
console.log(fusionTab);

//exercice 8

function inverserTableau(tableau){
    return tableau.reverse()
}
console.log(inverserTableau(fusionTab));


//exercice 9

function extraireSousTableau(tableau,debut,fin){
    return tableau.slice(debut,fin)
};
console.log(extraireSousTableau(fusionTab,5,8));


//exercice 10

function remplacerMot(phrase, ancienMot, nouveauMot){
    return phrase.replace(ancienMot,nouveauMot)
};

console.log(remplacerMot(LonguePhrase,"lorem","damien"));
