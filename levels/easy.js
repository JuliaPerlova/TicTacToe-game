class Easy {

    constructor(game) {
      this.game = game;
    }
  
    move() {
      return this.game.getField()
        .slice()
        .reduce((acc, row, i) => {
          if (acc.length > 0) {
            return acc;
          }
          const c = row.indexOf(null);
          return (c !== -1) ? [i, c] : acc;
        }, []);
    }

  }
  
  export default Easy;