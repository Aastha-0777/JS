const submitHandaler = (event) =>{

    //to stop default action i.e. reloading

    event.preventDefault();

    const name = document.getElementById("name")
    console.log(name.value);
    
    const email = document.getElementById("email")
    console.log(email.value);

    const age = document.getElementById("age")
    console.log(age.value);

    const country = document.getElementById("country")
    console.log(country.value);
        
    const gender = document.getElementsByName("gender")
    console.log(gender);
    
    for(let i = 0; i < gender.length; i++){

        if(gender[i].checked){

            console.log("gender --> ", gender[i].value);
            

        }

    }

    const skills = document.getElementsByName("skills")
    console.log(skills);

    for (let i = 0; i < skills.length; i++) {
        
        if (skills[i].checked) {
            
            console.log("Skills : ", skills[i].value);

        }
        
    }
    

}