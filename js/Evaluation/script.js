// ===================================
// SÉLECTION DES ÉLÉMENTS DOM
// ===================================
const list = document.querySelector("#list");
const addBookBtn = document.querySelector("#addBook");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const searchBar = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#search");
const showAll = document.querySelector("#showAll");
const dontRead = document.querySelector("#dontRead");
const errorMsg = document.querySelector("#errorMsg");
const searchSection = document.querySelector("#searchSection");
const presentation = document.querySelector("#presentation");
const fleche = document.querySelector("#fleche");


//variables de la progress Bar
const progressSection = document.querySelector("#progressSection");
const progressBarContainer = document.createElement("div")
progressBarContainer.classList.add("progress-bar-container")
const progressBar = document.createElement("div")
progressBar.classList.add("progress-bar")
const progressStatue = document.createElement("span")
progressStatue.classList.add("progress-statue")

progressSection.classList.add("hidden")

progressSection.appendChild(progressBarContainer)
progressSection.appendChild(progressStatue)
progressBarContainer.appendChild(progressBar)
progressBar.style.width=`0%`

// ===================================
// VARIABLES GLOBALES
// ===================================
let bookList = [];

// ===================================
// FONCTIONS UTILITAIRES
// ===================================
function createUniqueId() {
    return Math.random().toString(36).substring(2, 9);
}

function progress(){
    let booksRead=0
    bookList.forEach((element) => {
    if (element.read) {
        booksRead++
            }})
    progressBar.style.width=`${booksRead / bookList.length * 100}%`
    if(booksRead === bookList.length){
        progressBar.style.background=`#0aae72`
        progressStatue.textContent= `Bravo vous avez tout lu !`
    }else{
        progressBar.style.background=`#eda148`
        progressStatue.textContent= `Vous avez lu ${booksRead} des ${bookList.length} de votre bibliothèque`
    }
}
// ===================================
// CLASSE BOOK
// ===================================
class Book {
    constructor(title, author, read, bookId) {
        this.title = title.toLowerCase();
        this.author = author.toLowerCase();
        this.read = read;
        this.bookId = bookId;
        this.book = null;
        this.bgBook = null;
        this.readLabel = null;
    }
    
    addBook() {
        // Création des éléments DOM
        this.book = document.createElement("li");
        this.bgBook = document.createElement("div");
        this.bgBook.classList.add("bgBook");

        const authorItem = document.createElement("h4");
        authorItem.classList.add("author");
        const titleItem = document.createElement("h3");
        titleItem.classList.add("book-title");

        const read = document.createElement("input");
        this.readLabel = document.createElement("label");
        this.readLabel.classList.add("readLabel")
        const deleteBtn = document.createElement("img");
        const groupLeft = document.createElement("div");
        groupLeft.classList.add("info");
        const groupRight = document.createElement("div");
        groupRight.classList.add("actions");
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("bookInfo");
        const bookRead=document.createElement("div")
        bookRead.classList.add("book-read")

        // Configuration des attributs
        deleteBtn.setAttribute("src", "./img/corbeille.png");
        deleteBtn.id = "deleteBtn";
        read.type = "checkbox";
        read.id = `read${this.bookId}`;
        read.classList.add("read")
        read.setAttribute("name", `read${this.bookId}`);
        this.readLabel.setAttribute("for", `read${this.bookId}`);
        this.readLabel.textContent="Non lu"
        titleItem.textContent = `${this.title}`;
        authorItem.textContent = ` ${this.author}`;
        
        // Assemblage de la structure DOM
        bookInfo.appendChild(titleItem);
        bookInfo.appendChild(authorItem);
        bookRead.appendChild(read);
        bookRead.appendChild(this.readLabel);
        groupLeft.appendChild(bookRead);
        groupLeft.appendChild(bookInfo);
        this.book.appendChild(groupLeft);
        groupRight.appendChild(deleteBtn);
        this.book.appendChild(groupRight);
        this.book.appendChild(this.bgBook);
        this.book.id = `${this.bookId}`;
        this.book.classList.add("bookenter", "unread", "add");
        list.appendChild(this.book);

        // Event listener pour le changement de statut
        read.addEventListener("change", (e) => {
            this.read = e.target.checked;
            progress()
            if (this.read) {
                this.readLabel.textContent = "Lu";
                this.book.classList.add("read");
                this.book.classList.remove("unread");
            } else {
                this.readLabel.textContent = "Non lu";
                this.book.classList.add("unread");
                this.book.classList.remove("read");
            }
        });

        // Event listener pour la suppression
        deleteBtn.addEventListener("click", () => {
            console.log("clik");
            this.deleteBook();
            progress()
            // Afficher présentation si liste vide
            if (bookList.length === 0) {
                searchSection.classList.add("hidden");
                searchSection.classList.remove("add");
                presentation.classList.remove("hidden");
                presentation.classList.add("add");
                fleche.classList.remove("hidden");
                fleche.classList.add("add");
                progressSection.classList.remove("add");
                progressSection.classList.add("hidden");
            }
        });
    }
    
    deleteBook() {
        // Trouver et supprimer le livre de la liste
        const thisBookIndex = bookList.findIndex(
            (book) => book.bookId === `${this.book.id}`
        );
        if (thisBookIndex !== -1) {
            this.book.remove();
            console.log(thisBookIndex);
            bookList.splice(thisBookIndex, 1);
            console.log(bookList);
        }
    }
    
    hideBook() {
        this.book.classList.add("d-none");
        showAll.classList.remove("d-none");
        showAll.addEventListener("click", () => {
            this.book.classList.remove("d-none");
            showAll.classList.add("d-none");
        });
    }
}

// ===================================
// GESTION DE L'AJOUT DE LIVRES
// ===================================
addBookBtn.addEventListener("click", function (e) {
    let bookId = `book-${createUniqueId()}`;
    e.preventDefault();
    
    // Validation des champs
    if (!inputAuthor.value) {
        errorMsg.classList.remove("d-none");
        inputAuthor.classList.add("error-input");
    }
    if (!inputTitle.value) {
        errorMsg.classList.remove("d-none");
        inputTitle.classList.add("error-input");
    }
    
    // Création du livre si les champs sont valides
    if (inputTitle.value && inputAuthor.value) {
        const newBook = new Book(
            inputTitle.value,
            inputAuthor.value,
            false,
            bookId
        );
        newBook.addBook();
        bookList.push(newBook);
        console.log(bookList);
        
        // Réinitialisation des champs
        (inputTitle.value = ""),
            (inputAuthor.value = ""),
            errorMsg.classList.add("d-none");
    }

    // Afficher section de recherche si livres présents
    if (bookList.length > 0) {
        progress()
        searchSection.classList.remove("hidden");
        searchSection.classList.add("add");
        presentation.classList.add("hidden");
        presentation.classList.remove("add");
        fleche.classList.add("hidden");
        fleche.classList.remove("add");
        progressSection.classList.add("add");
        progressSection.classList.remove("hidden");
    }
});

// ===================================
// FONCTIONNALITÉS DE RECHERCHE
// ===================================
searchBtn.addEventListener("click", function () {
    let searchValue = searchBar.value.toLowerCase();
    bookList.forEach((element) => {
        if (
            element.title.toLowerCase() !== searchValue &&
            element.author.toLowerCase() !== searchValue
        ) {
            element.hideBook();
        }
    });
});

// ===================================
// FILTRAGE DES LIVRES
// ===================================
dontRead.addEventListener("click", function () {
    bookList.forEach((element) => {
        if (element.read) {
            console.log("ok");
            element.hideBook();
        }
    });
});