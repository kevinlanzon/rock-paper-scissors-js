function Game(player1, computer) {
  this.player1 = player1;
  this.computer = computer;
}

Game.prototype.RULES = {
  rock:     {beats: 'scissors'},
  paper:    {beats: 'rock'},
  scissors: {beats: 'paper'}
};

Game.prototype.winner = function() {
  if(this._sameChoice()) {
    return null;
  }

  if(this.RULES[this.player1.choice]['beats'] === this.computer.choice) {
    return this.player1;
  } else {
    return this.computer;
  }
};

Game.prototype._sameChoice = function() {
  return this.player1.choice === this.computer.choice;
};
