describe('Rock Paper Scissors', function() {
  var player1, player2, game;

  beforeEach(function() {
    player1 = new Player('Kev');
    player2 = new Player('Bob');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {
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
  });
});
