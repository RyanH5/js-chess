class Game {
  constructor(size) {
    this.size = size;
    this.board = [];
    this.player1Turn = true;
    this.activePiece = null;
    this.move = this.move.bind(this);
  }

  makeBoard() {
    document.getElementById('game').style.height = `${this.size}px`;
    document.getElementById('game').style.width = `${this.size}px`;
    this.board[0] = [
      new Rook('P1'), new Bishop('P1'), new Knight('P1'), new King('P1'), new Queen('P1'), new Knight('P1'), new Bishop('P1'), new Rook('P1')
    ]
    this.board[1] = [
      new Pawn('P1'), new Pawn('P1'), new Pawn('P1'), new Pawn('P1'), new Pawn('P1'), new Pawn('P1'), new Pawn('P1'), new Pawn('P1')
    ]
    this.board[2] = [null, null, null, null, null, null, null, null];
    this.board[3] = [null, null, null, null, null, null, null, null];
    this.board[4] = [null, null, null, null, null, null, null, null];
    this.board[5] = [null, null, null, null, null, null, null, null];
    this.board[6] = [
      new Pawn('P2'), new Pawn('P2'), new Pawn('P2'), new Pawn('P2'), new Pawn('P2'), new Pawn('P2'), new Pawn('P2'), new Pawn('P2')
    ]
    this.board[7] = [
      new Rook('P2'), new Bishop('P2'), new Knight('P2'), new King('P2'), new Queen('P2'),new Knight('P2'), new Bishop('P2'), new Rook('P2')
    ]
    this.displayBoard()
  }

  displayBoard() {
    const gameel = document.getElementById('game')
    gameel.innerHTML = "";
    this.board.forEach((array, i) => {
      array.forEach((position, j) => {
        const square = document.createElement('div');
        square.setAttribute('id', `[${i},${j}]`)
        square.classList.add('square');
        gameel.appendChild(square);
        if ((i + j) % 2) {
          square.style.background = '#663300';
        } else {
          square.style.background = 'rgb(233, 216, 189)';
        }
        if (position) {
          square.textContent = position.name;
          if (position.player === 'P1') {
            square.classList.add('p1')
          } else {
            square.classList.add('p2')
          }
        }
      })
    })
  }

  updateGame(currX, currY, to){
    if (!this.validMove(currX, currY, to)){
      console.log("bad move")
    } else {

      let piece = this.board[currX][currY];
      this.board[currX][currY] = null;
      this.board[to[0]][to[1]] = piece;
      this.displayBoard()
    }
  }

  validMove(from, to) {
    return true
  }

  move(e) {
    let squareId = document.getElementById(e.target.id);
    if (this.activePiece) {
      let newLocation = JSON.parse(e.target.id);
      let currentLocation = JSON.parse(this.activePiece.id)
      this.updateGame(currentLocation[0], currentLocation[1], newLocation)
      this.activePiece = null;
    } else {
      if (this.board[squareId.id[1]][squareId.id[3]]) {
        squareId.style.background = 'red';
        this.activePiece = squareId;
        var name = this.activePiece.innerHTML;
        switch(name) {
          case 'Pawn':
          let pawn1 = new Pawn('P2')
          pawn1.validMoves(this.activePiece)
        }
      }     
    }
  }
}

class Piece {
  constructor(player) {
    this.player = player;
  }
}

class Pawn extends Piece {
  constructor(player) {
    super(player)
    this.name = 'Pawn';
    this.firstMove = true;
  }
  validMoves(piece) {
    console.log(this)
    console.log(newGame.board)
    var location = JSON.parse(piece.id);
    console.log(location)
    if (this.player === 'P2') {
      if (this.firstMove) {
        const validMoves = [];
        console.log(newGame.board[location[0+1]][location[1]])
        if (newGame.board[location[0-1]][location[1]] === null ) {
          validMoves.push(newGame.board[location[0-1]][location[1]])
        }
        if (newGame.board[location[0-2]][location[1]] === null ) {
          validMoves.push(newGame.board[location[0+2]][location[1]])
        }
        console.log(validMoves)
        this.firstMove = false;
      }
    }
  }
}

class Rook extends Piece {
  constructor(player) {
    super(player);
    this.name = 'Rook' ;
  }
}

class Knight extends Piece {
  constructor(player) {
    super(player);
    this.name = 'Knight';
  }
}

class Bishop extends Piece {
  constructor(player) {
    super(player);
    this.name = 'Bishop';
  }
}

class King extends Piece {
  constructor(player) {
    super(player);
    this.name = 'King';
  }
}

class Queen extends Piece {
  constructor(player) {
    super(player);
    this.name = 'Queen';
  }
}


let newGame = new Game(640);
newGame.makeBoard();
document.addEventListener('click', newGame.move);