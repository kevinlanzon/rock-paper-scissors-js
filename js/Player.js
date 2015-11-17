function Player(name) {
  this.name = name;
}

Player.prototype.chooses = function(choice) {
  this.choice = choice;
};

