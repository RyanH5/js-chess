function play(game, move) {

}

class Game {
  constructor(size) {
    this.size = size;
  }

  makeBoard() {
    document.getElementById('game').style.height = `${this.size}px`;
    document.getElementById('game').style.width = `${this.size}px`;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const position = document.createElement('div');
        position.setAttribute('id', '[i,j]');
        position.setAttribute('class', 'square');
        position.style.height = `${this.size / 8}px`;
        position.style.width = `${this.size / 8}px`;
        console.log(i + j % 2)
        if ((i + j) % 2) {
          position.style.background = 'gray';
        }

        document.getElementById('game').appendChild(position);
      }
    }
  }
}

class Piece {
  constructor(player, color, name, position) {
    
  }
}

let newGame = new Game(640);
newGame.makeBoard();