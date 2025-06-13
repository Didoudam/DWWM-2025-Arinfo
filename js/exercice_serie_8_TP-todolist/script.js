const todoInput = document.querySelector("#todo-input"), addBtn=document.querySelector("#add-btn"), todoList=document.querySelector("#todo-list"),filterCurrent=document.querySelector("#filter-current"),filterFinish=document.querySelector("#filter-finish"),showAll=document.querySelector("#filter-show"), checkbox=document.querySelectorAll(".checkbox"),deleteAll=document.querySelector("#delete-all"),domain=document.querySelector("#domain")

const mainList=[]
console.log(domain);

addBtn.addEventListener("click",function(){
    const todo=todoInput.value
    const li = document.createElement("li")
    const inputCheck=document.createElement("input")
    const span=document.createElement("span")
    const deleteTodo= document.createElement("img")
    const divLeft= document.createElement("div")
    let logo="";
    switch (domain.value) {
        case "work":
            logo="https://cdn-icons-png.flaticon.com/512/4717/4717174.png"
            break;
        case "personal":
            logo="https://static.thenounproject.com/png/321991-200.png"
            break
        case "buisness":
            logo="https://cdn-icons-png.flaticon.com/512/126/126122.png"
        default:
            logo=""
            break;
    }
    const iconTask=document.createElement("img")
    iconTask.setAttribute("src",`${logo}`)
    li.className="task current"
    inputCheck.setAttribute("type","checkbox")
    inputCheck.className="checkbox"
    inputCheck.addEventListener("change",function(){
        if (inputCheck.checked){
            li.classList.remove("current")
            li.classList.add("validate")
        }else{
            li.classList.remove("validate")
            li.classList.add("current")
        }
    })
    deleteTodo.setAttribute("src","https://cdn-icons-png.flaticon.com/512/860/860829.png")
    deleteTodo.className="delete-todo"
    deleteTodo.addEventListener("click",function(){
        li.remove()
    })
    span.textContent = `${todo}`
    divLeft.appendChild(inputCheck);
    divLeft.appendChild(span);
    divLeft.appendChild(iconTask);
    li.appendChild(divLeft);
    li.appendChild(deleteTodo);
    todoList.appendChild(li);
    mainList.push(li);
    console.log(mainList);
    
})

filterCurrent.addEventListener("click",function(){
    const allFilter = document.querySelectorAll(".active-filter")
    allFilter.forEach(filterBtn =>{
        filterBtn.classList.remove("active-filter")
    })
    const allTask = document.querySelectorAll(".task")
    allTask.forEach(task =>{
        task.classList.remove("hidden")
    })
    const currentTask=document.querySelectorAll(".validate")
    currentTask.forEach(task =>{
        task.classList.add("hidden")
    })
    filterCurrent.classList.add("active-filter")
})

filterFinish.addEventListener("click",function(){
    const allFilter = document.querySelectorAll(".active-filter")
    allFilter.forEach(filterBtn =>{
        filterBtn.classList.remove("active-filter")
    })
    filterFinish.classList.add("active-filter")
    const allTask = document.querySelectorAll(".task")
    allTask.forEach(task =>{
        task.classList.remove("hidden")
    })
    const finishTask=document.querySelectorAll(".current")
    finishTask.forEach(task =>{
        task.classList.add("fade-out")
        setTimeout(() => {
            task.classList.add("hidden")
            task.classList.remove("fade-out")
        }, 300);
    })
})

showAll.addEventListener("click",function(){
    const allFilter = document.querySelectorAll(".active-filter")
    allFilter.forEach(filterBtn =>{
        filterBtn.classList.remove("active-filter")
    })
    const allTask = document.querySelectorAll(".task")
    allTask.forEach(task =>{
        task.classList.remove("hidden")
    })
})

deleteAll.addEventListener("click",function(){
    const allTask = document.querySelectorAll(".task")
    allTask.forEach(task => {
        setTimeout(()=>{
            task.classList.add("fade-out")
        },300)
        task.remove()
    })
})