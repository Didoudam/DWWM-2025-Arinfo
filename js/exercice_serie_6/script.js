//exercice 1

let n=4
const nombre=[1,2,3,4,5];
const mots = ["lorem","iprrsum","blatttttt","yhyhyhli","bkkiiiluuuuuuuuuuuuuuu"];
const phrase= "dans la vie il y a des catus de feu";
const objet={
    "nom":"guilbaud",
    "prenom":"Damien",
    "age":31,
    "ville": "le boupere",
};
let produits = [
{ nom: "Stylo", prix: 2 },
{ nom: "Cahier", prix: 5 },
{ nom: "Gomme", prix: 1 }
];


console.log("");
console.log("###### exercice1 #####");
console.log("");

for (let i=0; i<nombre.length;i++){
    console.log(nombre[i])
}

//exercice 2
console.log("");
console.log("###### exercice2 #####");
console.log("");

function sommeTableau(tableau){
    let somme = 0
    for (let i=0; i<nombre.length;i++){
        somme += tableau[i]; 
    }
    return somme
}

console.log(sommeTableau(nombre));

//exercice 3
console.log("");
console.log("###### exercice3 #####");
console.log("");

function motPlusLong(tableauMot){
    let motLong=""
    for(let i=0;i<tableauMot.length;i++){
        if(tableauMot[i].length>motLong.length){
            motLong=tableauMot[i]
        }
    }
    return motLong;
};

console.log(`${motPlusLong(mots)}`);


//exercice 4
console.log("");
console.log("###### exercice4 #####");
console.log("");

function inverserChaine(chaine){
    let chaineInversee = []
    for(let i=0;i<chaine.length;i++){
        chaineInversee.unshift(chaine[i])
        
    }
    return chaineInversee.join("")
};

console.log(inverserChaine(phrase))

//exercice 5
console.log("");
console.log("###### exercice5 #####");
console.log("");

function nombresVoyelles(chaine){
    let nombresVoyelles=0
    for(let i=0;i<chaine.length;i++)
        if (chaine[i]== "a" || chaine[i]== "e" || chaine[i]== "i" || chaine[i]== "o" || chaine[i]== "u" || chaine[i]== "y"){
            nombresVoyelles++
        }
        return nombresVoyelles   
    };
    
console.log(nombresVoyelles(phrase));


//exercice 6
console.log("");
console.log("###### exercice6 #####");
console.log("");

function nombresPaires(tableauNombres){
    let nombresPaires=[]
    for (let i=0; i<tableauNombres.length; i++){
        if(tableauNombres[i]%2==0){
            nombresPaires.push(tableauNombres[i])
        }
    }
    return nombresPaires
};

console.log(nombresPaires(nombre));


//exercice 7
console.log("");
console.log("###### exercice7 #####");
console.log("");

function compterProprietes(objet){
    let nombreProprietes = 0
    for(const key in objet){
        nombreProprietes++
    }
    return nombreProprietes
};

console.log(compterProprietes(objet));

//exercice 8
console.log("");
console.log("###### exercice8 #####");
console.log("");

function extraireNom(produits){
    let nomProduit=[]
    for(let i=0;i<produits.length;i++){
        nomProduit.push(produits[i].nom)
    }
    return nomProduit
}

console.log(extraireNom(produits));


//exercice 9
console.log("");
console.log("###### exercice9 #####");
console.log("");

function factorielle(n){
    let factorielle=1
    for(let i=1; i<n ;i++,factorielle= factorielle*i){
    }
    return factorielle
}

console.log(factorielle(n));


//exercice 10

function estTrie(nombre){
    listeTrie=nombre[0]
    for(i=1;i<=nombre.length;i++){
        if(nombre[i]>listeTrie){
            listeTrie=nombre[i]
        }else{
            return false
        }
        return true
    }
}

console.log(estTrie(nombre));
