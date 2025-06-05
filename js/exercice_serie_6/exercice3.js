const nom = "jean";
let age = 25;
age=30;
console.log(age);

const a = 10;
const b = 20;

const somme = a+b;
console.log(somme);
console.log(a*b);

for(i=1;i<=50;i++){
    // if(i%2 === 0)console.log(i);
    };



//exercice regex 1

let regexEx1=/chat/;
console.log("exercice 1",regexEx1.test("j'ai un chat"));

//exercice regex 2 

let regexEx2 =/^[A-Z]/;

console.log("exercice 2",regexEx2.test("bonjOur j'aime les pommes"));

//exercice regex 3 

let regexEx3 = /^\d+$/
console.log("exercice 3",regexEx3.test("12334r455"));

//exercice regex 4

let regexEx4 = /^(\d{5})+$/
console.log("exercice 4",regexEx4.test("1233"));

//exercice regex 5
let regexEx5 = /^[\w.-]+@[\w.-]+\.[a-z]+$/;
// let regexEx5 = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
console.log("exercice 5", regexEx5.test("didooudam@mix.com"));

//exercice6

let regexEx6 = /^(\d{2})+(\s\d{2}){4}$/;
console.log("exercice 6", regexEx6.test("06 42 94 31 47"));

//ecercice7

let regexEx7 = /\w[A-Z]\d/;
console.log("exercice 7", regexEx7.test("fsduTT95"));

//ecercice8
let regexEx8 = /^\p{Lu}\p{L}+(?:['-]\p{L}+)? \p{Lu}\p{L}+(?:['-]\p{L}+)?$/u
console.log("exercice 8", regexEx8.test("Damién Guilbaud"));

//ecercice9
let regexEx9 = /^\d{2}\/\d{2}\/\d{4}$/
console.log("exercice 9", regexEx9.test("25/13/1855"));


//ecercice10
let regexEx10 = /\.$/
console.log("exercice 10", regexEx10.test("j'ai mangé un chat."));