// Global variables
var running = false;
var count = 0;
var timer;

// Buttons
var startStop = document.getElementById('startStop');
var reset =  document.getElementById('reset');
var recordTime = document.getElementById('recordTime');

// Event listeners
startStop.addEventListener('click', startStopTimer);

reset.addEventListener('click', resetTimer);

recordTime.addEventListener('click', recordCurrentTime);

document.addEventListener('keypress', handleKeyPress);

// Event handlers
function handleKeyPress(event){
  keyPressed = event.key.toUpperCase();

  switch(keyPressed){
    case 'S':
      startStopTimer();
      break;
    case 'R':
      resetTimer();
      break;
    case 'T':
      recordCurrentTime();
      break;
    default:
      // do nothing
      break;
  }
}

// Callback functions
function startStopTimer(){
  if (!running) {
    timer = setInterval(function(){
      count++
      document.getElementById('time').innerHTML = (count / 100).toFixed(2);
    }, 10);
    running = true;
  }
  else if (running) {
    clearInterval(timer);
    running = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  count = 0;
  running = false;
  document.getElementById('time').innerHTML = count;
  document.getElementById('recorded').innerHTML = "";
}

function recordCurrentTime() {
  var newRec = (count / 100).toFixed(2);
  document.getElementById('recorded').insertAdjacentHTML('beforeend', newRec + "<br>");
}
