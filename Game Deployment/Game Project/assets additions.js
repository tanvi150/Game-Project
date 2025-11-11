function preload()
{
	//images - assets
	treasureChestImage = loadImage("assets/treasure.png");
	jewelsImage = loadImage("assets/jewels.png");
	balloonsImage = loadImage("assets/air-balloons.png");
	heartImage = loadImage("assets/pixel-heart.png");

	//sounds - assets
	soundFormats('mp3', 'wav');
	jumpSound = loadSound("assets/mixkit-player-jumping-in-a-video-game-2043.wav");
	jumpSound.setVolume(0.1);
	collectCoinSound = loadSound("assets/mixkit-fairy-arcade-sparkle-866.wav");
	collectCoinSound.setVolume(0.1);
	fallingSound = loadSound("assets/mixkit-piano-falling-effect-408.wav");
	fallingSound.setVolume(0.1);
	gameOverSound = loadSound("assets/mixkit-player-losing-or-failing-2042.wav");
	gameOverSound.setVolume(0.1);
	levelFinishedSound = loadSound("assets/mixkit-game-level-completed-2059.wav");
	levelFinishedSound.setVolume(0.1);
	levelTwoFinishedSound = loadSound("assets/mixkit-multiple-fireworks-explosions-1689.wav");
	levelTwoFinishedSound.setVolume(0.1);
	levelIncompleteSound = loadSound("assets/mixkit-game-over-trombone-1940.wav");
	levelIncompleteSound.setVolume(0.1);
	backgroundSound = loadSound("assets/game-of-adventure-fun-quirky-animation-style-music-248086.mp3");
	backgroundSound.setVolume(0.1);
}