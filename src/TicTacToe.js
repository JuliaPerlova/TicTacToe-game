import Easy from '../levels/easy.js';
import Normal from '../levels/normal.js';

class TicTacToe {

  constructor(level = 'easy') {
    this.player = [];
    this.computer = [];
    this.level = (level === 'easy') ? new Easy(this) : new Normal(this);
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getField() {
    return this.field;
  }

  add(row, col, side) {
    side.push([row, col]);
    return side;
  }

  go(row = null, col = null) {
    if (row === null) {
      const [key, value] = this.level.move();
      this.field[key][value] = 'Computer';
      return this.check(this.add(key, value, this.computer));
    }
    this.field[row][col] = 'Player';
    return this.check(this.add(row, col, this.player));
  }

  check(side) {
    const row = side[0][0];
    const col = side[0][1];

    const check1 = side.slice().filter(([key, value]) => key === value);
    if (check1.length === 3) {
      return true;
    }

    const check2 = side.slice().filter(([key]) => row === key);
    if (check2.length === 3) {
      return true;
    }

    const check3 = side.slice().filter(([, value]) => col === value);
    return check3.length === 3;
  }

}

export default TicTacToe;