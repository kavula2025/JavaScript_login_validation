const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");
const errorMesssage = document.getElementById("errorMessage");


form.addEventListener("submit",(e)=>{
    const errors = [];

    if(username.value.trim() ===""){
        errors.push("username required")
    }

     if(password.value.length <4){
        errors.push("password must be at least 4 characters")
    }

    if(errors.length > 0)
        e.preventDefault();
    errorMesssage.toggleAttribute('hidden');
    errorMesssage.innerHTML = errors.join(',');
})
