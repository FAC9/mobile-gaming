var box = document.getElementById('marbleBox');

var marble = document.getElementById('marble');

var hole = document.getElementById('hole');

if(hole.style.top) {
  
}

hole.addEventListener('click', () => {
  marble.style.top = '70%'
  marble.style.left = '70%'
})

var maxX = box.clientWidth  - marble.clientWidth;
var maxY = box.clientHeight - marble.clientHeight;

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var z    = event.alpha;
  var x     = (event.beta + 90)/1.8;
  var y    = (event.gamma + 90)/1.8;

  if(y===90) y
  marble.style.top  = x + '%';
  marble.style.left = y + '%';

  const output = document.getElementsByClassName('output');
  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";
}
