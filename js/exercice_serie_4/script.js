let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);

if (a==b==c){
    console.log("les trois variables sont egales")
}else if(a==b || a == c || b == c){
    console.log("seulement deux des variables sont egales")
}else{
    console.log("les trois variables sont differentes")
}

let entree = "2T";
let valeur = parseInt(entree);
let unites = entree.match(/[a-zA-Z]+/);

console.log(unites)

switch (unites[0]) {
  case "K":
    valeur *= 1000;
    console.log(valeur)
    break;
    case "T":
    valeur *= 1000000;
    console.log(valeur)
    break;
    case "G":
    valeur *= 1000000000;
    console.log(valeur)
    break;
    case "M":
    valeur *= 1000000000000;
    console.log(valeur)
    break;
  default:
    console.log("Unite inconnue");
}

let entreeData = "2t";
let valeurData = parseInt(entreeData);
let unitesStockage = entreeData.match(/[a-zA-Z]+/);

if (unitesStockage == null){
  console.log(valeurData)
}else if(isNaN(valeurData)){
  console.log("rentrez une quantitée")
}else{
  switch (unitesStockage[0].toUpperCase()) {
    case "K":
      valeurData *= 1024;
      console.log(valeurData)
      break;
      case "T":
      valeurData *= 1024**4;
      console.log(valeurData)
      break;
      case "G":
      valeurData *= 1024**3;
      console.log(valeurData)
      break;
      case "M":
      valeurData *= 1024**2;
      console.log(valeurData)
      break;
    default:
      console.log("Unite inconnue");
  }

}



value = "1"

if (typeof value === "string"){
  console.log("La valeur est une chaîne de caractères")
}else{
  console.log("La valeur est un nombre")
}

switch (parseInt(value)){
  case 0:
    console.log("la valeur est egale a 0");
    break;
  case 1:
  case 2:
    console.log(`la valeur est superieur a ${parseInt(value) - 1 }`)  ;
    break;
  default: console.log("entrez la bonne valeur");
  
}