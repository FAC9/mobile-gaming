var box = document.getElementById('marbleBox');

var marble = document.getElementById('marble');

var hole = document.getElementById('hole');
hole.style.top = "85%";
hole.style.left = "85%";

hole.addEventListener('click', () => {
  console.log("hole clicked");
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

  let xupper = 85 + 2;
  let xlower = 85 - 2;
  let xtrue = (xupper > x && xlower < x);

  let yupper = 85 + 2;
  let ylower = 85 - 2;
  let ytrue = (xupper > y && xlower < y);

  if(xtrue && ytrue) {
    marble.style.display = 'none';
    window.navigator.vibrate(300);

    let hslaString = `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`

    setTimeout(() => {
      marble.style.display = 'inline-block';
    }, 1000);

  }

  // const output = document.getElementById('output');
  // output.innerHTML  = "beta : " + x + "\n";
  // output.innerHTML += "gamma: " + y + "\n";
}
