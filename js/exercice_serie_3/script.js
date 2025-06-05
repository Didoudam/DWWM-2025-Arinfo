let nom = "martin";
let anneeNaissance = 2000;
let anneeActuelle = new Date().getFullYear();
let heure = new Date().getHours();
let choix = 2;
let x = 765;


console.log(`Bonjour ${nom}, tu as ${anneeActuelle - anneeNaissance} ans`);

let note_math = 15;
let note_francais = 12;
let note_HG = 9;

let notes = [];
notes.push(note_math,note_HG,note_francais);

console.log(`la moyenne est de ${notes.reduce((acc, note) => acc + note )/ (notes.length)}/20`);

let sexe = "femme";
if(sexe == "homme") {
    console.log("tu es un homme");
} else if(sexe == "femme"){
    console.log("tu es une femme")};


if(heure <=12){
    console.log("c'est le matinr")
}else{
    console.log("c'est le soir")

}

switch (choix) {
    case 1:
        console.log("insérer");
        break;
    case 2:
        console.log("suprimer");
        break;
    case 3:
        console.log("afficher");
        break;
    default:
        console.log("ce choix n'existe pas")
}

if (x%15==0){
    console.log(`${x} est un multiple de 3 et 5`)
}else{
    console.log(`${x} n'est pas un multiple de 3 et 5`);
}

for(let i = 0; i < 1000; i+=10){
    if(i==0){
        console.log(`44 00${i}`);
    }else if(i<100){
        console.log(`44 0${i}`);
    }else{
        console.log("44",i);
    }
}


for (let i = 0; i < 21; i+=2){
    if(i==10){
        console.log(`######${i}########`)
    }else{
        console.log(i)
    }
}


    
let resultat=[];
    
for (let randomNumber = Math.floor(Math.random()*1000); resultat.length<3;randomNumber = Math.floor(Math.random()*1000)){
    if(randomNumber%2==0 && resultat.length<=1){
        resultat.push(randomNumber);
    }else if(resultat.length>1 && randomNumber%2!=0){
        resultat.push(randomNumber);
    }
}


console.log(resultat);


let choixTirage = Math.floor(Math.random()*1000)
let nombreTirage

for (let i=1, tirage = Math.floor(Math.random()*1000); choixTirage != tirage; i++,tirage = Math.floor(Math.random()*1000)){
    nombreTirage = i
}

console.log(nombreTirage);


let date = new Date()
console.log(`Aujourd'hui nous somme le ${date.getDate()+ "/"+ (date.getMonth()+1) + "/" +date.getFullYear()} et il est ${date.getHours()}h${date.getMinutes()}min` );
