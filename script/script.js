const inputField = document.getElementsByClassName("password-input")[0]; // Selecteer het eerste element met de class "password-input"

inputField.addEventListener("keydown", showPassword);

function showPassword(event) { // Event doorgeven als parameter aan de functie
    if (event.key === "Enter") {
        window.location.href = "mainpage.html";
    }
}
