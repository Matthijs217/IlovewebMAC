    // Selecteer de folder1 icoon en app1 sectie
    let folder1 = document.querySelector('#folder1');
    let app1 = document.querySelector('.app1'); // Selecteer de app1 sectie

    // Voeg een click event listener toe aan folder1
    folder1.addEventListener('click', () => {
        // Toggle de 'visible' class op de app1 sectie
        app1.classList.add('visible');
    });

