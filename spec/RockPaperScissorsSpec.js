describe('Rock Paper Scissors', function() {
  var player1, player2, computer, game;

  beforeEach(function() {
    player1 = new Player('Kev');
    player2 = new Player('Bob');
    computer = new Player('Mac');
    game = new Game(player1, player2);
  });

  describe('Rules of the game', function() {
    describe('rock', function() {
      it('should beat scissors', function() {
        player1.chooses('rock');
        player2.chooses('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.chooses('rock');
        player2.chooses('paper');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function() {
      it('should beat rock', function() {
        player1.chooses('paper');
        player2.chooses('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player1.chooses('paper');
        player2.chooses('scissors');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function() {
      it('should beat paper', function() {
        player1.chooses('scissors');
        player2.chooses('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.chooses('scissors');
        player2.chooses('rock');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('a draw', function() {
      it('should result in no winner', function() {
        var drawResults = ['rock', 'paper', 'scissors'].map(function(i) {
          player1.chooses(i);
          player2.chooses(i);
          return game.winner();
        });
        expect(drawResults).toEqual([null, null, null]);
        expect(game.message()).toEqual('The Game is a Draw!');
      });
    });
  });

  describe('Computer', function () {
    describe('when playing', function() {
      it('should randomly choose a weapon and return a string', function() {
        expect(computer.random()).toEqual(jasmine.any(String));
      });
    });
  });

  describe('Messages', function() {
    it('should return the winners name and the losers name', function() {
      player1.chooses('paper');
      player2.chooses('rock');
      expect(game.message()).toEqual('Kev\'s paper beats Bob\'s rock');
    });

    it('should return a message for a draw', function() {
      player1.chooses('paper');
      player2.chooses('paper');
      expect(game.message()).toEqual('The Game is a Draw!');
    });
  });
});
