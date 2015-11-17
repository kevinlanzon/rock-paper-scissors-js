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
        player1.choice('rock');
        player2.choice('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.choice('rock');
        player2.choice('paper');
        expect(game.winner()).toBe(player2);
      });
    });
  });
});
