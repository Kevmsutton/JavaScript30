const playMusic = e => {
  //select audio key being hit for sound
  //select key being hit for animation
  //stop function from running all together as audio does not exist
  // reset the time on audio to zero on each key press
  // play audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

// function for removing css
const removeTransition = e => {
  e.target.classList.remove('playing');
};

// select all of the keys in order to remove the css
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playMusic);
