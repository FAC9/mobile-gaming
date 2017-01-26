var marble = document.getElementById('marble');

var hole = document.getElementById('hole');
hole.addEventListener('click', () => {
  marble.style.top = '30%'
  marble.style.left = '30%'
})

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  marble.style.top = '10%'
  marble.style.left = '10%'
  // Do stuff with the new orientation data
}
