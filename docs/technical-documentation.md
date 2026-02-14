# Technical-documentation - Portfolio Page


# Project overview
This assignment is about creating a personal portfolio webpage showcasing information about me, my skills, my projects, and a way to contact me. It includes smooth scrolling, a time-based greeting alert system that is session based, and a dark and light toggle.


# Tools used:

1-HTML: structure of the program.
2-CSS: To style the page.
3-Javascript: to add functionalities to the page.
4-Chatgpt: Used to assist in debugging and suggestions.

# The structure of the repositary:

assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore

# Features and Functionalities
1-Smooth Scrolling: navigation links, and smooth scrolling to sections.
2-Dark and Light Toggles: switch between themes, icon will update dynamically. 
3-Time-based Greeting Alert:display a greeting alert based on the hour of the day
4-Responsive Design: skills and project adjust their layout for different screen sizes.
5-Contact Form: name, email, and message input fields.

# Javascirpt Code Explaination

code for light and dark mode toggle:
function toggleTheme(){
    //refers to the body element
    const body = document.body;

    //refers to the button in the nav section
    const buttonSymbol = document.getElementById("buttonTheme");

    //toggles to dark mode or lightmode
    body.classList.toggle("darkMode");

    //checks if the mode is darkmode or not and changes the icon based on that
    if(body.classList.contains("darkMode")){
        buttonSymbol.textContent = "☀️";
    }
    else{
        buttonSymbol.textContent = "🌙";
    }
}

code for greeting system:
function greetingMessage(){
    //alert message shows greeting once every session
    if(sessionStorage.getItem("greetingsDone")) {
        return;
    }
    
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

    //marks as true to make sure that the message is not shown more than once
    sessionStorage.setItem("greetingsDone", "true")
}

//runs the greetingMessage function when the page is loaded.
window.addEventListener("DOMContentLoaded",greetingMessage)
