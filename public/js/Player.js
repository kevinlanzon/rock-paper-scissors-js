"use strict";

function Player(name) {
  this.name = name;
}

Player.prototype.chooses = function(choice) {
  this.choice = choice;
};

Player.prototype.random = function() {
  var choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)];
};
