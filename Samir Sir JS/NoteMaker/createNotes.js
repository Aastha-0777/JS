//to display the name of logged in user on the document 
const wellcomeUser = document.getElementById("wellcomeUser")

const loggedInUser = localStorage.getItem("loggedinuser")

if (loggedInUser) {

    var loggedInUserObj = JSON.parse(loggedInUser)
    wellcomeUser.innerHTML = `Wellcome Backe ${loggedInUserObj.name}`

} else {

    //redirect logic

}

// to create a form to get some detail from user for creating notes

const createNoteBtn = document.getElementById("btn")
const root = document.getElementById("root")

createNoteBtn.addEventListener("click", () => {

    const form = document.createElement("form") //<form></form>

    //name lable
    const nameLable = document.createElement("lable")
    nameLable.innerHTML = "TITLE : "

    //name input
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "title"

    form.appendChild(nameLable)
    form.appendChild(nameInput)

    const prioritylable = document.createElement("label")
    prioritylable.innerHTML = "Priority :"
    const priorityinput = document.createElement("input")
    priorityinput.type = "text"
    priorityinput.id = "priority"

    form.appendChild(prioritylable)
    form.appendChild(priorityinput)

    const submitInput = document.createElement("input")
    submitInput.type = "submit"
    form.appendChild(submitInput)

    root.appendChild(form)

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const title = document.getElementById("title").value
        console.log("Title : ", title);

        const priority = document.getElementById("priority").value
        console.log("Priority : ", priority);

        var notesObj = {

            title : title,
            priority : priority,
            id : loggedInUserObj.id

        }
        
        //stringfy object ans store in localstoage

        localStorage.setItem("myNotes", JSON.stringify(notesObj))

        console.log(notesObj);
        
    })

})