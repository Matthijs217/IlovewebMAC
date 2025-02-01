    // Selecteer de folder1 icoon en app1 sectie
    let body = document.querySelector('body');
    let folder1 = document.querySelector('#folder1');
    let app1 = document.querySelector('.app1'); // Selecteer de app1 sectie

    folder1.addEventListener('click', (event) => {
        // Stop de click event van het doorgeven aan de body
        event.stopPropagation();
        app1.classList.toggle('visible');
    });

    body.addEventListener('click', () => {
        // Verwijder de 'visible' class van de app1 sectie als deze aanwezig is
        if (app1.classList.contains('visible')) {
            app1.classList.remove('visible');
        }
    });
