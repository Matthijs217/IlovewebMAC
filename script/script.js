const inputField = document.getElementsByClassName("password-input")[0]; // Selecteer het eerste element met de class "password-input"
const errorMessage = document.querySelector(".incorrectpassword"); // Selecteer het foutbericht-element

inputField.addEventListener("keydown", showPassword);

function showPassword(event) { // Event doorgeven als parameter aan de functie
    if (event.key === "Enter") {
        window.location.href = "mainpage.html";
    }
}
