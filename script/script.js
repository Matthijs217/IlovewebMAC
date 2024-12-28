const inputField = document.getElementsByClassName("password-input")[0]; // Selecteer het eerste element met de class "password-input"
const errorMessage = document.querySelector(".incorrectpassword"); // Selecteer het foutbericht-element

inputField.addEventListener("keydown", showPassword);

function showPassword(event) { // Event doorgeven als parameter aan de functie
    if (event.key === "Enter") {
        const inputValue = inputField.value; // Haal de waarde van het invoerveld op
        if (inputValue === "Matthijs") { // Controleer of de invoer "Matthijs" is
            window.location.href = "mainpage.html";
        } else {
            // Voegt de class shake aan de input toe
            inputField.classList.add("shake");

            // Verwijder de shake class na de animatie
            setTimeout(() => {
                inputField.classList.remove("shake");
            }, 500); // De duur van de animatie (MS)
        }
    }
}
