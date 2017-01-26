var marble = document.getElementById('marble');

var hole = document.getElementById('hole');
hole.addEventListener('click', () => {
  marble.style.top = '30%'
  marble.style.left = '30%'
})

window.addEventListener("deviceorientation", handleOrientation, true);
