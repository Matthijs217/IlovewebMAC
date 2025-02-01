    // Selecteer de folder1 icoon en app1 sectie
    let body = document.querySelector('body');
    let folder1 = document.querySelector('#folder1');
    let app1 = document.querySelector('.app1'); // Selecteer de app1 sectie

    folder1.addEventListener('click', (event) => {
        // Stop de click event van het doorgeven aan de body
        event.stopPropagation();
        app1.classList.add('visible');
    });



    let dragItem = document.querySelector('.app1');

    let offsetX = 0;
    let offsetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    isMouseDown = false;

    dragItem.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        offsetX = dragItem.offsetLeft - event.clientX; 
        offsetY = dragItem.offsetTop - event.clientY;
    });

    document.addEventListener('mousemove', (event) => {
        if(!isMouseDown) return;
        event.preventDefault();
        mouseX = event.clientX + offsetX;
        mouseY = event.clientY + offsetY;
        dragItem.style.left = mouseX + 'px';
        dragItem.style.top = mouseY + 'px';
    });

    document.addEventListener('mouseup', (event) => {
        isMouseDown = false;
    });



