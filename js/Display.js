"use strict";

document.addEventListener('DOMContentLoaded', function() {

  var player1 = new Player('Player1');
  var player2 = new Player('Computer');
  var game = new Game(player1, player2);

  [].forEach.call(document.querySelectorAll('img'), function(el) {
    el.addEventListener('click', function() {

      player1.chooses(this.getAttribute('data-choice'));
      player2.chooses(player2.random());

      var el = document.getElementById('results'),
      elChild = document.createElement('div');
      elChild.innerHTML = '<li>' + game.message() + '</li>';
      el.insertBefore(elChild, el.firstChild);
      console.log(player1);
      console.log(player2);
      console.log(game.message());

    }, false);

  });
});
