/**
 * Use this state to load all of your assets
 */
var loadState = {
   preload: function() {
      loadingLabel = game.add.text(80, 150, 'loading...', {
         font: '30px Courier',
         fill: '#ffffff'
      });
    game.load.image("Bee", "assets/bee.png");
    game.load.image("Ant", "assets/ant.png");
    game.load.image("Snail", "assets/snail.png");
    
          // load all assets
   },

   create: function() {
      game.state.start('menu');
   }

};
