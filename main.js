
var box = document.getElementById('marbleBox');
var marble = document.getElementById('marble');

var hole = document.getElementById('hole');
hole.style.top = "80%";
hole.style.left = "80%";

var soundx = 100
var soundy = 100

var freeverb = new Tone.Freeverb().toMaster();

var feedbackDelay = new Tone.FeedbackDelay("8n", 0.7).connect(freeverb);
var pling = new Tone.Synth().connect(freeverb)
var am = new Tone.NoiseSynth().connect(freeverb);
var pluck = new Tone.PluckSynth().toMaster()



var loop2 = new Tone.Loop(function(time){
  pling.triggerAttack((soundx + 400) / 4 )
}, "4n").start(0);

var loop3 = new Tone.Loop(function(time){
  am.triggerAttack((soundy + 400) / 4 )
}, "2n").start(0);

var loop1 = new Tone.Loop(function(time){
  pling.triggerAttack(soundx/4)
}, "4n").start(0);

var loop4 = new Tone.Loop(function(time){
  pluck.triggerAttack(soundy/4)
}, "2n").start(0);


Tone.Transport.start();

document.onmousemove = (e) => {
  x = e.x
  y = e.y
}
// var button = document.getElementById('play')


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

  soundx = x
  soundy = y

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
