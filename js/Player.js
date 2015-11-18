"use strict";

function Player(name) {
  this.name = name;
}

Player.prototype.chooses = function(choice) {
  this.choice = choice;
};

Player.prototype.computer = function() {
  var choices = ['rock', 'paper', 'scissors']
  this.computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return this.computerChoice;
};
