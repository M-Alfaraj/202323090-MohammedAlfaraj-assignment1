function toggleTheme(){
    const body = document.body;
    const buttonSymbol = document.getElementById("buttonTheme");

    body.classList.toggle("darkMode");

    if(body.classList.contains("darkMode")){
        buttonSymbol.textContent = "☀️";
    }
    else{
        buttonSymbol.textContent = "🌙";
    }
}

function greetingMessage(){
    //variables to store the current hour and message for the greetings
    const currentHour = (new Date()).getHours();
    let message = "";

    //checks the current hour to determine the greeting
    //
    if(currentHour >= 5 && currentHour < 12){
        message = "Good Morning!";
    }
    else if(currentHour >= 12 && currentHour < 18){
        message = "Good Afternoon!";
    }
    else if(currentHour >= 18 && currentHour < 22){
        message = "Good Evening!";
    }
    else{
        message = "Greetings and good night!";
    }

    alert(message)
}

window.addEventListener("DOMContentLoaded",greetingMessage)