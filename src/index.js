const View = require("./ttt-view.js") // require appropriate file
const Game = require("../solution/game.js") // require appropriate file

  $(function() { // This block is used to set up an environment to manipulate test objects/elements
    const ttt = $(".ttt") // figured out what this is assigned to because there was literally ONLY ONE element in the HTML that we would refer to !!!
    const game = new Game();
    const view = new View(game, ttt);// Your code here
  });

  window.Game = Game
  window.View = View
