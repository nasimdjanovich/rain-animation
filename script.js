function rain () {
    let fast = 100,
        body = document.querySelector('body'),
        i = 0;

    while ( i < fast ) {
        let drop = document.createElement('i');

        let size = Math.random() * 5,
            posX = Math.floor(Math.random() * window.innerWidth),
            delay = Math.random() * -20,
            duration = Math.random() * 5;

        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';

        body.appendChild(drop);
        i++;
    }
}
rain();