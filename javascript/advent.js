var grid = document.querySelector('.grid');

var pckry = new Packery( grid, {
  itemSelector: '.grid-item',
  stagger: 20,
});

grid.addEventListener( 'click', function( event ) {
  if ( !event.target.classList.contains('grid-item') ) {
    return;
  }
});
