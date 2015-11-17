function Player(name) {
  this.name = name;
}

Player.prototype.chooses = function(choice) {
  this.choice = choice;
};

function Computer(name) {
  this.name = name;
}

Computer.prototype.chooses = function() {
  var choices = ['rock', 'paper', 'scissors']
  this.choice = choices[Math.floor(Math.random() * choices.length)];
};
