var StateOver = {
  preload: function() {
    // load images into library
    game.load.spritesheet('buttons', 'images/ui/buttons.png', 264, 74, 8);
  },

  create: function() {
    // set up objects, variables
    // sounds, text
    // good guys, explosions
    this.btnPlayAgain = game.add.button(game.world.centerX, game.world.height - 150, "buttons", this.playAgain, this, 1, 0, 1);
    this.btnPlayAgain.anchor.set(0.5, 0.5);

    // Score Text
    this.scoreText = game.add.text(game.world.centerX, 150, score);
    this.scoreText.fill = "#ffffff";
    this.scoreText.fontSize = 64;
    this.scoreText.anchor.set(0.5,0.5);

    this.scoreLabel = game.add.text(game.world.centerX, 100, "score");
    this.scoreLabel.fill = "#ffffff";
    this.scoreLabel.fontSize = 32;
    this.scoreLabel.anchor.set(0.5,0.5);
  },

  playAgain: function() {
    game.state.start("StateMain");
  },

  update: function() {
    // constant running loop
  }
}
