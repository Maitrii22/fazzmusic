const sounds = {
	ocean: 'ocean.mp3',
	forest: 'forest.mp3',
	rain: 'rain.mp3',
	birds: 'birds.mp3'
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
  
