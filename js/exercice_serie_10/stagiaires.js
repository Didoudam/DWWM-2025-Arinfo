class Stagiaire{
    constructor(prenom="",nom=""){
        this.prenom=prenom;
        this.nom=nom;
    }
    salutation(){
        return `je m'appelle ${this.prenom} ${this.nom}`
    }
}

export{Stagiaire}