    // Selecteer de folder1 icoon en app1 sectie
    let folder1 = document.querySelector('#folder1');
    let app1 = document.querySelector('.app1');
    let closeIcon = document.querySelector('.closeicon');
    let minusIcon = document.querySelector('.minusicon');
    let expandIcon = document.querySelector('.expandicon');

    folder1.addEventListener('click', (event) => {
        // Stop de click event van het doorgeven aan de body
        event.stopPropagation();
        app1.classList.add('visible');
    });

    // APP HEADER
    closeIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        app1.classList.remove('visible');
    });

    minusIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        app1.classList.remove('visible');
    });

    expandIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        app1.classList.toggle('expandversion');
    });

    // DRAG FUNCTIE
    // https://www.youtube.com/watch?v=ymDjvycjgUM

    let dragItem = document.querySelector('.app1');
    let header = document.querySelector('header');

    let offsetX = 0;
    let offsetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    isMouseDown = false;

    dragItem.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        offsetX = dragItem.offsetLeft - event.clientX; 
        offsetY = dragItem.offsetTop - event.clientY;
        dragItem.style.cursor = "grabbing";
    });

    document.addEventListener('mousemove', (event) => {
        if(!isMouseDown) return;
        event.preventDefault();
        mouseX = event.clientX + offsetX;
        mouseY = event.clientY + offsetY;

        const headerBottom = header.getBoundingClientRect().bottom;

        if (mouseY < headerBottom) {
            mouseY = headerBottom;
        }

        dragItem.style.left = mouseX + 'px';
        dragItem.style.top = mouseY + 'px';
    });

    document.addEventListener('mouseup', (event) => {
        isMouseDown = false;
        dragItem.style.cursor = "grab";
    });

