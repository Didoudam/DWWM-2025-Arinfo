const chiffres = document.querySelectorAll(".chiffre");
const operation = document.querySelectorAll(".operation");
const tampon = document.querySelector("#tampon");
const tampon2 = document.querySelector("#tampon2");
const egale = document.querySelector("#egale");
const reset = document.querySelector("#reset");
const btn = document.querySelectorAll(".btn");
const divisionParZero = /\/\s*0(?!\d)/;
const operateurs = ["+", "-", "*", "/"];
let resultat;
let calcul = [];
let nombre = [];
function addOperator(operator){
    calcul.push(operator.value);
    nombre=[];
}
chiffres.forEach((boutton) => {
    boutton.addEventListener("click", () => {
        nombre.push(boutton.value);
        console.log(nombre);
    });
});
operation.forEach((button) => {
    button.addEventListener("click", () => {
        calcul.push(nombre.join(""));
        if (nombre.length == 0)calcul.push(tampon.value)
        if (operateurs.includes(calcul[1]) && calcul.length > 1) {
            tampon2.value = eval(calcul.join(""));
            calcul = [];
            calcul.push(tampon2.value);
            console.log("tampon2",tampon2);
            
        } else if (operateurs.includes(calcul[calcul.length - 1])) {
            calcul.pop();
        }
        addOperator(button)
    });
});
egale.addEventListener("click", function () {
    calcul.push(nombre.join(""));
    if (divisionParZero.test(calcul.join(""))) {
    } else {
        resultat = eval(calcul.join(""));
        tampon.value = resultat;
        nombre = [];
        calcul = [];
    }
});
reset.addEventListener("click", function () {
    tampon.value = 0;
    nombre = [];
    calcul = [];
    resultat = 0;
});
btn.forEach((click) => {
    click.addEventListener("click", () => {
        document.querySelector("#ecranCalcul").innerHTML = `<span>${calcul.join("")}</span>`;
        document.querySelector("#ecranNombre").innerHTML = `<span>${nombre.join("")}</span>`;
        if (typeof resultat === "number" && calcul.length == 0 && nombre.length == 0 && !divisionParZero.test(calcul.join(""))) {
            document.querySelector("#ecranNombre").innerHTML = `<span>${resultat}</span>`;
        } else if (divisionParZero.test(calcul.join(""))) {
            document.querySelector("#ecranCalcul").innerHTML = `<span></span>`;
            document.querySelector("#ecranNombre").innerHTML = `<span>cheh</span>`;
        }
    });
});
if (calcul.length == 0 || nombre.length == 0)document.querySelector("#ecranNombre").innerHTML = "rentrez vos valeurs";