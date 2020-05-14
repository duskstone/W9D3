class View {
  constructor(game, $el) { //we need to initiate our constuctor method, and set up 
    this.game = game; // our proper variables  e.g(this.game, this.$el)
    this.$el = $el;  
    this.setupBoard();// also we call our .setupBoard method to see our grid upon loading our page
  }

  bindEvents() {
    $('ul').on("click", 'li', e => {
      e.currentTarget().toggleClass(untoggled, toggled)
    }) 
      
    
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul>'); // To create an element to play with
    this.$el.append($ul);


    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        const $li = $('<li class="untoggled">Ho</li>');
        $ul.append($li);

      }
    }
  }
}//ES6 syntax HollA!

module.exports = View;
