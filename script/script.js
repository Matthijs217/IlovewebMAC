const inputField = document.getElementsByClassName("password-input")[0];

inputField.addEventListener("keydown", showPassword);

function showPassword(event) {
    if (event.key === "Enter") {
        if (inputField.value === "Matthijs") {
            window.location.href = "mainpage.html";
        } else {
            inputField.classList.add("errormessage");

            setTimeout(() => {
                inputField.classList.remove("errormessage");
            }, 300);
        }
    }
}
