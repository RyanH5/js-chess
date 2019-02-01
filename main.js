function play(game, move) {

}

class Game {
  constructor(size) {
    this.size = size;
    this.board = [];
    this.player1Turn = true;
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
      new Pawn('2'), new Pawn('2'), new Pawn('2'), new Pawn('2'), new Pawn('2'), new Pawn('2'), new Pawn('2'), new Pawn('2')
    ]
    this.board[7] = [
      new Rook('2'), new Bishop('2'), new Knight('2'), new King('2'), new Queen('2'),new Knight('2'), new Bishop('2'), new Rook('2')
    ]
    console.log(this.board)
    this.displayBoard()
  }

  displayBoard() {
    this.board.forEach((array, i) => {
      array.forEach((position, j) => {
        const square = document.createElement('div');
        square.setAttribute('id', `[${i}, ${j}]`)
        square.classList.add('square')
        document.getElementById('game').appendChild(square);
        if ((i + j) % 2) {
          square.style.background = '#663300';
        } else {
          square.style.background = 'rgb(233, 216, 189)';

        }
        if (position) {
          console.log(position.name)
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

  move(e) {
    console.log(e)
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


// class Game {
//   constructor(size) {
//     this.size = size;
//     this.grid = [];
//     this.occupied = [];
//   }

//   makeBoard() {
//     document.getElementById('game').style.height = `${this.size}px`;
//     document.getElementById('game').style.width = `${this.size}px`;
//     for (let i = 0; i < 8; i++) {
//       for (let j = 0; j < 8; j++) {
//         const position = document.createElement('div');
//         this.grid.push([j,i])
//         position.setAttribute('id', `[${j},${i}]`);
//         position.setAttribute('class', 'square');
//         position.style.height = `${this.size / 8}px`;
//         position.style.width = `${this.size / 8}px`;
//         if ((i + j) % 2) {
//           position.style.background = '#663300';
//         } else {
//           position.style.background = 'rgb(233, 216, 189)';

//         }
//         document.getElementById('game').appendChild(position);      
//       }
//     }
//   }
// }

// class Piece {
//   constructor(player, position) {
//     this.player = player;
//     this.position = position;
//     this.alive = true;
//   }
//   setPiece() {
//     const piece = document.createElement('div');
//     piece.textContent = this.name;
//     if (this.player === 1) {
//       piece.style.color = 'black'
//     } else {
//       piece.style.color = 'gray'
//     }
//     piece.classList.add('piece')
//     const parent = document.getElementById(this.position);
//     parent.appendChild(piece);
//   }
// }
// const pawns = []
// for (let i = 0; i < 8; i++) {
//   pawns[i] = new Pawn('1', 'pawn', `[${i}, 1]`)
//   console.log(pawns)
// }

// let p1Pawn1 = new Pawn(1, 'pawn', '[0,1]');
// let p1Pawn2 = new Pawn(1, 'pawn', '[1,1]');
// let p1Pawn3 = new Pawn(1, 'pawn', '[2,1]');
// let p1Pawn4 = new Pawn(1, 'pawn', '[3,1]');
// let p1Pawn5 = new Pawn(1, 'pawn', '[4,1]');
// let p1Pawn6 = new Pawn(1, 'pawn', '[5,1]');
// let p1Pawn7 = new Pawn(1, 'pawn', '[6,1]');
// let p1Pawn8  = new Pawn(1, 'pawn', '[7,1]');
// let p1Rook1 = new Rook(1, 'rook', '[0,0]');
// let p1Rook2 = new Rook(1, 'rook', '[7,0]');
// let p1Bishop1 = new Bishop(1, 'bishop', '[1,0]');
// let p1Bishop2 = new Bishop(1, 'bishop', '[6,0]');
// let p1Knight1 = new Knight(1, 'knight', '[2,0]');
// let p1Knight2 = new Knight(1, 'knight', '[5,0]');
// let p1King = new King(1, 'king', '[3,0]');
// let p1Queen = new Queen(1, 'queen', '[4,0]');



// let p2Pawn1  = new Pawn(2, 'pawn', '[0,6]');
// let p2Pawn2  = new Pawn(2, 'pawn', '[1,6]');
// let p2Pawn3  = new Pawn(2, 'pawn', '[2,6]');
// let p2Pawn4  = new Pawn(2, 'pawn', '[3,6]');
// let p2Pawn5  = new Pawn(2, 'pawn', '[4,6]');
// let p2Pawn6  = new Pawn(2, 'pawn', '[5,6]');
// let p2Pawn7  = new Pawn(2, 'pawn', '[6,6]');
// let p2Pawn8  = new Pawn(2, 'pawn', '[7,6]');
// let p2Rook1 = new Rook(2, 'rook', '[0,7]');
// let p2Rook2 = new Rook(2, 'rook', '[7,7]');
// let p2Bishop1 = new Bishop(2, 'bishop', '[1,7]');
// let p2Bishop2 = new Bishop(2, 'bishop', '[6,7]');
// let p2Knight1 = new Knight(2, 'knight', '[2,7]');
// let p2Knight2 = new Knight(2, 'knight', '[5,7]');
// let p2King = new King(2, 'king', '[4,7]');
// let p2Queen = new Queen(2, 'queen', '[3,7]');

// function displayPieces() {
//   a = p1Pawn1.setPiece();
//   p1Pawn2.setPiece();
//   p1Pawn3.setPiece();
//   p1Pawn4.setPiece();
//   p1Pawn5.setPiece();
//   p1Pawn6.setPiece();
//   p1Pawn7.setPiece();
//   p1Pawn8.setPiece();
//   p2Pawn1.setPiece();
//   p2Pawn2.setPiece();
//   p2Pawn3.setPiece();
//   p2Pawn4.setPiece();
//   p2Pawn5.setPiece();
//   p2Pawn6.setPiece();
//   p2Pawn7.setPiece();
//   p2Pawn8.setPiece();
//   p1Rook1.setPiece();
//   p1Rook2.setPiece();
//   p2Rook1.setPiece();
//   p2Rook2.setPiece();
//   p1Bishop1.setPiece();
//   p1Bishop2.setPiece();
//   p2Bishop1.setPiece();
//   p2Bishop2.setPiece();
//   p1Knight1.setPiece();
//   p1Knight2.setPiece();
//   p2Knight1.setPiece();
//   p2Knight2.setPiece();
//   p1King.setPiece();
//   p1Queen.setPiece();
//   p2King.setPiece();
//   p2Queen.setPiece();
// }

// displayPieces()