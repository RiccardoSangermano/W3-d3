const myForm= function() {
   const form=document.getElementsByName("form")[0]
   form.addEventListener("text", (e) =>{
        console.log("Attività svolta")
        e.preventDefault()
        const newAdd=document.getElementById("add")
        console.log(newAdd.value)

       const newText= function() {
        const text=document.createElement("p")
        text.innerText="Nuova mansione"
        const textArea=document.getElementById("area")
        textArea.appendChild(text)


       }

    })
}
myForm()
newText()

const taskList=document.querySelector("li")




taskList.forEach(li=> {
    li.addEventListener("click", function(){
        console.log("Hai cliccato su" + li.innerText)
        li.classlist.toggle("marked")
    })
    
});

const deleteButton= function() {
    const newButton=document.createElement("button")
    newButton.innerText="cancella"
    newButton.addEventListener("click" (e) => {
        console.log("bottone cliccato")
        for(let i=0; i<newButton.length; i++)
            newButton[i]
    })
}