const presentation=document.querySelector("#presentation"), startBtn = document.querySelector("#start-quizz"),questionContainer=document.querySelector("#question-container"),reponseContainer=document.querySelector("#reponse-container"), nextBtn = document.querySelector("#next-button"), questionSection = document.querySelector("#question-section")

const metier={
    "question1":{
        "intitule":"Quel est la couleur du cheval blanc d'Henri IV ?",
        "reponses":["rouge","noir","Alezan","blanc"],
        "bonneReponse":"blanc",
        "fact":"cette question n'est pas représentative du reste du quizz"
    },
    "question2":{
        "intitule":'Quel language informatique est jugé le "meilleur" par les developpeurs du monde entier ',
        "reponses":["C++","Python","JavaScript","Go"],
        "bonneReponse":"Python",
        "fact":"Brandon vas venir me pété la gueule"

    },
    "question3":{
        "intitule":'Quel SasS génere le plus de revenue ?',
        "reponses":["Microsoft 365","ChatGPT","Adobe creative cloud","Shopify",],
        "bonneReponse":"Microsoft 365",
        "fact":"Malgres la merde que sont les outils microsoft ca brasse quand meme de la thune"

    },
    "question4":{
        "intitule":'Quel est le plus gros flop du jeux video ?',
        "reponses":["E.T. the Extra-Terrestrial (1982)","Anthem (2019)","Suicide Squad: Kill the Justice League (2024) ","Concord (2024"],
        "bonneReponse":"Concord (2024",
        "fact":"E.T a conduit au crash du JV avec 100 million de perte mais ce n'est rien face a Concord un jeu qui a couté entre 200 et 400 million de $ et qui est resté 2 semaines"
        
    },

}

nombreQuestions = Object.keys(metier).length

let questionEnCours=0
let score=0
let textFinal=""
if(score<(nombreQuestions/2) && score>(nombreQuestions/4)){
    textFinal="Mouais pas ouf"
}else if(score<(nombreQuestions/4)){
    textFinal="Ne laisse pas le chat jouer avec la souris"
}else if (score>(nombreQuestions/2) && score != nombreQuestions){
    textFinal="Correct"
}else{
    textFinal="Tu es le/la meilleur tout l'or du monde ne suffirait pas à te recompensé"
}

function make_reponse_btn(idQuestion){
    const reponses = metier[idQuestion]["reponses"];

    for(i=0;i<reponses.length;i++){
            const reponseBtn=document.createElement("button")
            reponseBtn.textContent=`${reponses[i]}`
            reponseBtn.classList.add("reponse-btn","btn")
            reponseContainer.appendChild(reponseBtn)
    }
}

function make_question(idQuestion){
    const intitule=document.createElement("span");
    intitule.id="intitule"
    intitule.textContent=`${metier[idQuestion]["intitule"]}`
    questionContainer.appendChild(intitule)
    make_reponse_btn(idQuestion)
}

function check_winner(idQuestion){
    const allReponseBtn=document.querySelectorAll(".reponse-btn")
    const fact = document.createElement("span")
    
    fact.id="fact"

    allReponseBtn.forEach(btn =>{
        btn.addEventListener("click", function(){
            
            allReponseBtn.forEach(otherBtn => {
                if (otherBtn !== this) {
                    otherBtn.classList.add("disabled-btn"); 
                    otherBtn.disabled =true;// ou toute autre classe souhaitée
                }
            });
            
            if(this.textContent === metier[idQuestion]["bonneReponse"]){
                score+=1
                this.classList.add("winner-btn");
                fact.textContent=`${metier[idQuestion]["fact"]}`
            }else{
                this.classList.add("looser-btn");
                fact.textContent=`Gros null !!... ${metier[idQuestion]["fact"]}`
            }
            nextBtn.classList.remove("hide")
            nextBtn.classList.add("show")
            questionContainer.appendChild(fact)
            
        })
    })

}

function remove_question(){
    const allReponseBtn=document.querySelectorAll(".reponse-btn")
    allReponseBtn.forEach(btn =>{
        btn.remove()
        })
    const intitule=document.querySelector("#intitule")
    intitule.remove()
    const fact=document.querySelector("#fact")
    fact.remove()

    }


nextBtn.addEventListener("click",function() {
    remove_question()
    questionEnCours+=1
    if(questionEnCours<=nombreQuestions){
        make_question(`question${questionEnCours}`);
        check_winner(`question${questionEnCours}`)
        nextBtn.classList.remove("show")
        nextBtn.classList.add("hide")
    }else{
        const scoring=document.createElement("span")
        const talkingText=document.createElement("span")
        talkingText.classList.add("intitule")
        talkingText.textContent=`${textFinal}`
        scoring.id="score"
        scoring.classList.add("score")
        scoring.textContent=`Votre score est de ${score}`
        questionContainer.appendChild(talkingText)
        questionContainer.appendChild(scoring)
    }
})
startBtn.addEventListener("click",function(){
    questionEnCours+=1
    make_question(`question${questionEnCours}`);
    check_winner(`question${questionEnCours}`)
    presentation.classList.add("hide")
    questionSection.classList.remove("hide")
    })
    nextBtn.classList.add("hide")
