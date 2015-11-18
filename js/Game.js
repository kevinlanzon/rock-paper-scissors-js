"use strict";

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
  if(this._sameChoice()) {
    return null;
  }

  if(this.RULES[this.player1.choice]['beats'] === this.player2.choice) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

Game.prototype.loser = function() {
  if(this.winner() === this.player1){
    return this.player2;
  }
  else {
    return this.player2;
  }
};

Game.prototype._sameChoice = function() {
  return this.player1.choice === this.player2.choice;
};

Game.prototype.message = function() {
  if(this._sameChoice() === true) {
    return "The Game is a Draw!";
  }
  else {
    return ((this.winner()).name + ' '  + 'Beats' + ' '  + (this.loser()).name);
  };
};
