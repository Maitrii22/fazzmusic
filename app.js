const sounds = {
	ocean: 'sounds/ocean.mp3',
	forest: 'sounds/forest.mp3',
	rain: 'sounds/rain.mp3',
	birds: 'sounds/birds.mp3'
  };
  
  function playSound(soundName) {
	const soundPlayer = document.querySelector('#soundPlayer');
	const soundSource = document.querySelector('#soundSource');
  
	const soundFile = sounds[soundName];
	if (soundFile) {
	  soundSource.setAttribute('src', soundFile);
	  soundPlayer.load();
	  soundPlayer.play();
	}
  }
  