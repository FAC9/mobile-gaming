
var box = document.getElementById('marbleBox');
var marble = document.getElementById('marble');

var hole = document.getElementById('hole');
hole.style.top = "80%";
hole.style.left = "80%";

hole.addEventListener('click', () => {
  console.log("hole clicked");
})


window.addEventListener("deviceorientation", handleOrientation, true);



    const colourBox = (hue) => {
      const hslaString = `hsla(${hue}, 100%, 60%, 1)`
      console.log(hslaString);
      box.style.backgroundColor = hslaString;
    }

    var i = 0, max = 360, cnt = 10;
    const timer = function() {

      i += cnt;
      if (i===max) {cnt = -10;}
      if (i===0)  {cnt = 10;}
      colourBox(i)
      setTimeout(timer, 60);
    }

function handleOrientation(event) {
  var absolute = event.absolute;
  var z    = event.alpha;
  var x     = (event.beta + 90)/1.8;
  var y    = (event.gamma + 90)/1.8;

  if(y===90) y
  marble.style.top  = x + '%';
  marble.style.left = y + '%';

  let xupper = 82;
  let xlower = 78;
  let xtrue = (xupper > x && xlower < x);

  let yupper = 82;
  let ylower = 78;
  let ytrue = (xupper > y && xlower < y);




  if(xtrue && ytrue) {
    marble.style.display = 'none';
    window.navigator.vibrate(300);


    timer();

    //setInterval(timer, 3);



    setTimeout(() => {
      marble.style.display = 'inline-block';
    }, 1000);

  }

  // const output = document.getElementById('output');
  // output.innerHTML  = "beta : " + x + "\n";
  // output.innerHTML += "gamma: " + y + "\n";
}
