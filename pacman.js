let pacman = {
    top: 50,
    left: 50
};

document.onkeydown = function(e) {
    if (e.keyCode === 37) { // left arrow
        pacman.left -= 10;
    } else if (e.keyCode === 38) { // up arrow
        pacman.top -= 10;
    } else if (e.keyCode === 39) { // right arrow
        pacman.left += 10;
    } else if (e.keyCode === 40) { // down arrow
        pacman.top += 10;
    }

    document.getElementById('game-board').innerHTML = `<div class='pacman' style='top:${pacman.top}px;left:${pacman.left}px'></div>`;
}

document.getElementById('game-board').innerHTML = `<div class='pacman' style='top:${pacman.top}px;left:${pacman.left}px'></div>`;
