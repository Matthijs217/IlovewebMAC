const inputField = document.getElementsByClassName("password-input")[0]; // Selecteer het eerste element met de class "password-input"

inputField.addEventListener("keydown", showPassword);

function showPassword(event) { // Event doorgeven als parameter aan de functie
    if (event.key === "Enter") {
        const inputValue = inputField.value; // Haal de waarde van het invoerveld op
        if (inputValue === "Matthijs") { // Controleer of de invoer "Matthijs" is
            window.location.href = "mainpage.html";
        } else {
            alert("Onjuiste invoer, probeer opnieuw."); // Geef een foutmelding
        }
    }
}
