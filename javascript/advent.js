var grid = document.querySelector('.grid');

var pckry = new Packery( grid, {
  itemSelector: '.grid-item',
  stagger: 30,
});

grid.addEventListener( 'click', function( event ) {
  if ( !event.target.classList.contains('grid-item') ) {
    return;
  }
  event.target.classList.toggle('grid-item--large');
  pckry.layout();
});
