"use strict";

document.addEventListener('DOMContentLoaded', function() {

  var computer1 = new Player('Computer 1');
  var computer2 = new Player('Computer 2');
  var game = new Game(computer1, computer2);

  [].forEach.call(document.querySelectorAll('button'), function(el) {
    el.addEventListener('click', function() {

    computer1.chooses(computer1.random());
    computer2.chooses(computer2.random());

    var el = document.getElementById('results'),
    elChild = document.createElement('div');
    elChild.innerHTML = '<li>' + game.message() + '</li>';
    el.insertBefore(elChild, el.firstChild);
    console.log(computer1);
    console.log(computer2);
    console.log(game.message());

    }, false);

  });
});
