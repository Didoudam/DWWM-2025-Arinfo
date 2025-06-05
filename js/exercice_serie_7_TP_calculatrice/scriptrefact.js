const screen = document.querySelector('#screen'),ajout =(valeur)=>screen.value += valeur,calcul = (input) => eval(input);
document.querySelectorAll('.ope').forEach(click => {
    click.addEventListener('click',() =>{
        ajout(click.value)
    })
})
document.querySelector('#egale').addEventListener('click',()=>{
    screen.value = calcul(screen.value)
})
document.querySelector('#reset').addEventListener('click',()=>{
    screen.value = ""
})
