class Classe{

    constructor(intitule, dateDebut, dateFin){
        this.intitule=intitule;
        this.listeStagiaire = [];
        this.dateDebut=dateDebut;
        this.dateFin=dateFin
    }
    ajouterStagiaire(stagiaire){
        this.listeStagiaire.push(stagiaire)
    }
}

export {Classe}