//Game Project 8- Adding Enemies with Constructor Functions

let level = 1;

var blend;
var skyColor;

var floorPos_y;
var gameChar_x , gameChar_y;
var enemies;

var treePos_x = [90, 400, 710, 1020, 1330, 1640, 1950, 2260, 2570, 2880, 3190, 3500, 3810, 4120, 4430, 4740, 5050, 5360, 5670, 5980];
var treePos_y;

var mountainPos_x = [];
var mountainPos_y = [];

var cloudPos_x = [];
var cloudPos_y = [];
var cloudSpeed = [];

var canyonPos_x = [138, 638, 1138, 1638, 2138, 3138, 3638, 4138, 4638, 5138];
let isInCanyon = false;

var collectablePos_x = [];
var collectablePos_y = [];
var isFound = [];
var isOverlapping;
var collectablesCount;

var platformPos_x = [3000,3300,3600,3900,4200,4500,4800,5100];
var platformPos_y = [280,300,345,290,305,330,285,340];

var gameScore;
var flagpolePos_x;
var lives;
var livesPos_x, livesPos_y;
var hearts;

var starX = [];
var starY = [];

var fireworks = [];
var fireworksTimer;
let fireworksDisplayed = false;

let isLeft = false;
let isRight = false;
let isFalling = false;
let isPlummeting = false;
let isJumping = false;
let isJumpingLeft = false;
let isJumpingRight = false;
let isReachedLevel1 = false;
let isReachedLevel2 = false;
let levelFinished = false;
let levelTwoFinished = false;
let levelIncomplete = false;
let levelTwoIncomplete = false;
let gameRestart = false;

var cameraPos_x;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height*3/4;
	//Initialising lives count
	lives = 3;
	//Initialising time
	timeLeft = 90;	

	startGame();
}

function startGame()
{
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	//Initialise random positions and speed for clouds.
	for (var i=0; i<5; i++)
		{
			cloudPos_x[i] = random(-250,1500);
			cloudPos_y[i] = random(53,200);
			cloudSpeed[i] = random(0.5,1);
		}

	//Initialise random vertical heights for mountains.
	for(var i=0; i<36; i++)
	{
		mountainPos_x[i] = 190*i - 260
		mountainPos_y[i] = random(100,200);
	}
	
	//Initialise random horizontal positions for trees.
	treePos_y = floorPos_y - 40;

   //Initialise random positions for collectables for level 1

   for (var i=0; i<25; i++)
	{
		isFound[i] = false;
		collectablePos_x[i] = random (30,2550);

		isOverlapping = true;

		while (isOverlapping)
		{
			isOverlapping = false;

			for (var j=0; j < canyonPos_x.length; j++)
			{
				if (collectablePos_x[i] > canyonPos_x[j] + 20 && collectablePos_x[i] < canyonPos_x[j] + 140)
				{
					isOverlapping = true;
					collectablePos_x[i] = random (30,2550);
					break;
				}
			}
		}
	 
	  collectablePos_y[i] = floorPos_y - 17;
	}

  //Initialise random positions for collectables for level 2

   for (var i=25; i<50; i++)
	{
	   isFound[i] = false;
	   collectablePos_x[i] = random (2700,5400);
		
	   isOverlapping = true;
		
	   while (isOverlapping)
	   {
		  isOverlapping = false;
		
		  for (var j=0; j < canyonPos_x.length; j++)
		 {
			if (collectablePos_x[i] > canyonPos_x[j] + 20 && collectablePos_x[i] < canyonPos_x[j] + 140)
			{
			  isOverlapping = true;
			  collectablePos_x[i] = random (2700,5400);
			  break;
			}
		 }
	   }

	   collectablePos_y[i] = floorPos_y - 17;

	   var onPlatform = false;

	   for(var k=0; k < platformPos_x.length; k++)
	   {
		 if(collectablePos_x[i] > platformPos_x[k] && collectablePos_x[i] < platformPos_x[k] + 80)
		 {
			onPlatform = true;
			collectablePos_y[i] = platformPos_y[k] - 17;
			break;
		 }
	    }

		if(onPlatform = false)
		{
			collectablePos_y[i] = floorPos_y - 17
		}

		console.log("Collectible " + i + " initial position: (" + collectablePos_x[i] + ", " + collectablePos_y[i] + ")");

    }

	console.log ("Collectables initialised for Level: " , level);
	console.log ("Collectable positions: ", collectablePos_x);

	//Initialising stars
	for (let i=0; i<1000; i++)
	{
	  starX[i] = random(-250,5600);
	  starY[i] = random(height/2);
	}

	//Initialise flagpole position
	flagpolePos_x = 2650;

	//Initialising cameraPos
	cameraPos_x = 0;

	//Initialising game score count
	gameScore = 0;

	//Initialising fireworks timer
	fireworksTimer = 0;

	//initialise enemies for level 1
	enemies = [];
	for(i=0; i < 5; i++)
	{
		enemies.push(new Bat(300 + i*500, floorPos_y-10, 100));
	}

	//initialise enemies for level 2
	for(i=0; i < 5; i++)
	{
		enemies.push(new Bat(3000 + i*500, floorPos_y-10, 80));
	}

	backgroundSound.play();
}

function draw()
{
	cameraPos_x = gameChar_x-width/2;

	drawSetting();
	drawStars();
	drawCloud();
	drawMountain();
	drawTrees();
	drawCanyon(canyonPos_x);
	drawCollectables(collectablePos_x, collectablePos_y);
	drawPlatform();
	drawFireworks();
	drawFlagPole();
	drawLives(lives);
	checkPlayerDie();

	//the game character movement
	if(isLeft && isFalling && gameChar_x > -230)
		{
			cameraPos_x -= 4;
			gameChar_x -= 4;
		}
		else if(isRight && isFalling && gameChar_x < 5570)
		{
			cameraPos_x += 4;
			gameChar_x += 4;
		}
		else if(isLeft && gameChar_x > -230)
		{
			cameraPos_x -= 4;
			gameChar_x -= 4;
	
		}
		else if(isRight && gameChar_x < 5570)
		{
			cameraPos_x += 4;
			gameChar_x += 4;
	
		}
	
		if (isJumping) 
		{
			if (floorPos_y - 180 < gameChar_y)
			{
			   gameChar_y -= 3;
			}
		    else
		   {
			  isJumping = false;
		   }

		   isFalling = true;
	    }
		else if(isFalling || isPlummeting)
			{
				if (isPlummeting)
					{	
						gameChar_y +=5;
						console.log (gameChar_y);
					}
					else
					{
					   gameChar_y += 6; //gravity for falling
					}
			}
		
		if (checkContact(gameChar_x,gameChar_y))
		{
			isFalling = false;
			console.log("character is on the platform");
		}
		else
		{
			isFalling = true;
		}

		for (var i=0; i < canyonPos_x.length; i++)
		{
			if (gameChar_x > canyonPos_x[i] + 20 && gameChar_x < canyonPos_x[i] + 140)
			{
				if (gameChar_y >= floorPos_y)
				{
					isPlummeting = true;
				}
			}
			else
		   {
			if(gameChar_y >= floorPos_y && !(isPlummeting))
			{
				gameChar_y = floorPos_y;
				isFalling = false;
				isInCanyon = false;
			}
		   }
		}
	
		///////////INTERACTION CODE//////////
	
		if (isLeft)
		{
			if (isJumping)
			{
				drawIsJumpingLeft();
			}
			else
			{
				drawIsLeftandWalking();

			}
		}
		else if (isRight)
		{
			if (isJumping)
			{
				drawIsJumpingRight();
			}
			else
			{
				drawIsRightandWalking();
			}
		}
		else if (isJumping)
		{
			drawIsJumpingFront();
		}
		else
		{
			drawCharacter();
		}
}

pop();

function drawLives(lives)
{
	livesPos_x = 938 + cameraPos_x;
	livesPos_y = 30;

 if (!isInCanyon)
 {
	for(var i=0; i < lives; i++)
	{
		image(heartImage,livesPos_x+i*25,livesPos_y,20,20);
	}
 }
}

function checkCanyons(t_canyonPos_x,i)
{
	if (gameChar_x > t_canyonPos_x[i] + 20 && gameChar_x < t_canyonPos_x[i] + 140)
	{
		if (gameChar_y >= floorPos_y)
		{
		  isPlummeting = true;
		  console.log ("Plummeting started! Y position:" + gameChar_y);
		  isLeft = false;
		  isRight = false;
		  isJumping = false;
		}

	}
		
}

function checkPlayerDie()
{
	if(gameChar_y > height + 100) //player dies when it falls into the canyon for the third time
	{
		lives -= 1;

		if (lives > 0)
		{
			fallingSound.play();
			if (level == 1)
			{
				gameChar_x = width/2;
				gameChar_y = floorPos_y;
				isPlummeting = false;
			}
			else if (level == 2)
			{
				gameChar_x = 2700;
				gameChar_y = floorPos_y;
				isPlummeting = false;
			}
		}
		else
		{
			gameOver();
		}
	}

	for(var i = 0; i < enemies.length; i++) //check for enemy contact
		{
			enemies[i].draw();
	
			var isContact = enemies[i].checkContact(gameChar_x,gameChar_y);
	
			if(isContact)
			{
				lives -= 1;
				
				if(lives > 0)
				{
					fallingSound.play();
	
					if (level == 1)
					{
						gameChar_x = width/2;
						gameChar_y = floorPos_y;
					}
					else if (level == 2)
					{
						gameChar_x = 2700;
						gameChar_y = floorPos_y;
					}
				}
				else
				{
					gameOver();
					setTimeout(function(){noLoop();},50);
				}
			}
		}
}

function checkCollectables(t_collectablePos_x, t_collectablePos_y,i)
{
	let distance = dist(gameChar_x, gameChar_y, t_collectablePos_x[i], t_collectablePos_y[i]);
	if (distance < 30 && !isFound[i])
	{
		isFound[i] = true;
		console.log ("Collectable" + i + "collected!"); //to track if the collectable has been collected
		gameScore += 1;
		collectCoinSound.play();
	}
}

function keyPressed()
{
	if (keyCode == 37 || keyCode == 65)
	{
		isLeft = true;
	}

	if (keyCode == 39 || keyCode == 83)
	{
		isRight = true;
	}

	if ((keyCode == 32 || keyCode == 38))
	{
		if (gameChar_y == floorPos_y) //prevents double jumping
		{
		 isJumping = true;
		 jumpSound.play();
		}
		if (isLeft)
		{
			if(gameChar_y == floorPos_y)
			{
			 isJumpingLeft = true;
			}
		}
		else if (isRight)
		{
			if (gameChar_y == floorPos_y)
			{
			 isJumpingRight = true;
			}
		}
	}

	if (keyCode == 13 && gameRestart)
	{
	   startGame();
	   loop();
	   level = 1
	   gameRestart = false;
	   gameScore = 0;
	   lives = 3;
	   isPlummeting = false;
	}   

	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	if (keyCode == 37 || keyCode == 65)
		{
			isLeft = false;
		}
	
	if (keyCode == 39 || keyCode == 83)
		{
			isRight = false;
		}

	if ((keyCode == 32 || keyCode == 38))
			{
				isJumping = false;
				isJumpingLeft = false;
				isJumpingRight = false;
			}
		
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}