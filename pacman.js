let pacman = {
    top: 50,
    left: 50
};

let point = {
    top: 100,
    left: 100
};

let score = 0;

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

    if (pacman.top === point.top && pacman.left === point.left) {
        score += 1;
        document.getElementById('score').innerText = "Score: " + score;
        point.top = Math.floor(Math.random() * 280);
        point.left = Math.floor(Math.random() * 280);
    }

    document.getElementById('game-board').innerHTML = `<div class='pacman' style='top:${pacman.top}px;left:${pacman.left}px'></div><div class='point' style='top:${point.top}px;left:${point.left}px'></div>`;
}

document.getElementById('game-board').innerHTML = `<div class='pacman' style='top:${pacman.top}px;left:${pacman.left}px'></div><div class='point' style='top:${point.top}px;left:${point.left}px'></div>`;
