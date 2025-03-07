function checkAge(){
    const ageInput = document.getElementById("age-input").value;
    const age = Number(ageInput);
    
    let errorMessage = ""
    if (isNaN(age)){
        errorMessage = "Not a number";
    }else if (age % 1 !== 0){
        errorMessage = "Age is a decimal number";
    }else if (age <= 0){
        errorMessage = "Not a positive Age";
    }else if (age < 18){
        errorMessage = "Less than 18, too young";
    }else if (age > 150){
        errorMessage = "Older than 150, too old";
    }

    if (errorMessage === ""){
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    }else{
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible"
    }
}