const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const textInput = document.getElementById('text-input');

let synth = window.speechSynthesis;
let utterance;

// Play button functionality
playBtn.addEventListener('click', () => {
  if (synth.speaking) return;

  utterance = new SpeechSynthesisUtterance(textInput.value);
  synth.speak(utterance);
});

// Pause button functionality
pauseBtn.addEventListener('click', () => {
  if (synth.speaking && !synth.paused) {
    synth.pause();
  }
});

// Stop button functionality
stopBtn.addEventListener('click', () => {
  synth.cancel();
});

// Resume when play is clicked again
playBtn.addEventListener('click', () => {
  if (synth.paused) {
    synth.resume();
  }
});
