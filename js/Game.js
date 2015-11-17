function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

RULES = {
  rock:     {beats: 'scissors'},
  paper:    {beats: 'rock'},
  scissors: {beats: 'paper'}
}

Game.prototype.winner = function() {
  if(RULES[this.player1.choice]['beats'] === this.player2.choice) {
    return this.player1;
  }
  return this.player2;
};
