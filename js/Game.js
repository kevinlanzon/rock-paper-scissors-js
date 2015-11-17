function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.RULES = {
  rock:     {beats: 'scissors'},
  paper:    {beats: 'rock'},
  scissors: {beats: 'paper'}
};

Game.prototype.winner = function() {
  if(this.sameChoice()) return null;

  if(this.RULES[this.player1.choice]['beats'] === this.player2.choice) {
    return this.player1;
  }
  return this.player2;
};

Game.prototype.sameChoice = function() {
  return this.player1.choice === this.player2.choice;
};
