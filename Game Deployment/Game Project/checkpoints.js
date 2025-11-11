function drawFlagPole()
{ 
	//level 1 flagpole = 2650
	//level 2 flagpole = 5550
	push();

	fill(94);
	noStroke();
	rect(flagpolePos_x,floorPos_y-200,5,200); //pole
	rect(flagpolePos_x+2900,floorPos_y-200,5,200); //level 2 pole

	image(treasureChestImage, flagpolePos_x+10, floorPos_y-38, 40,40);
	image(treasureChestImage, flagpolePos_x+2910, floorPos_y-38, 40,40); //level 2 treasure chest
	image(balloonsImage,flagpolePos_x-70, floorPos_y-90, 70,70);
	image(balloonsImage,flagpolePos_x+2830, floorPos_y-90, 70,70); //level 2 balloons
	image(jewelsImage, flagpolePos_x-70, floorPos_y-45, 50,50);
	image(jewelsImage, flagpolePos_x+2830, floorPos_y-45, 50,50); //level 2 jewels

	fill(255,54,81); //flag colour
	noStroke();

	//for level 1
	if (isReachedLevel1 == true)
	{
		triangle(flagpolePos_x+4,235,flagpolePos_x+4,270,flagpolePos_x+50,250); //level 1 flag
	}
	else
	{
		triangle(flagpolePos_x+4,420,flagpolePos_x+4,455,flagpolePos_x+50,435);
	}
	

	// for level 2
    if (isReachedLevel2 == true)
	{
		triangle(flagpolePos_x+2904,235,flagpolePos_x+2904,270,flagpolePos_x+2950,250); //level 2 flag
	}
	else
	{
		triangle(flagpolePos_x+2904,420,flagpolePos_x+2904,455,flagpolePos_x+2950,435);
	}

	checkFlagPole();

	pop();
}

function checkFlagPole()
{
	if(gameChar_x >= flagpolePos_x && gameChar_x < flagpolePos_x + 1000 && gameScore == 25)
	{
		   isReachedLevel1 = true;
		   level = 2;
		   isLeft = false;

		   textSize(100);
		   textStyle(BOLD);
		   fill(0,174,110);
		   text("LEVEL 1 FINISHED!", cameraPos_x + 100, 200);

		   textSize(30);
		   textStyle(NORMAL);
		   fill(255);
		   text("Next up, Level 2!", cameraPos_x + 400, 250);

		if (!levelFinished)
		{
			levelFinished = true;
			levelFinishedSound.play();
		}

	}
	else if (gameChar_x >= flagpolePos_x + 2900 && gameScore == 50) //text displays for level 2
		{
		   isReachedLevel2 = true;
		   isLeft = false;
		   isRight = false;

		   textSize(100);
		   textStyle(BOLD);
		   fill(0,174,110);
		   text("GAME FINISHED!", cameraPos_x + 150, 200);

		   textSize(30);
		   textStyle(NORMAL);
		   fill(255);
		   text("Congrats! You've collected all the coins!", cameraPos_x + 270, 250);

		   if (!levelTwoFinished)
		   {
			  levelTwoFinished = true;
			  levelFinishedSound.play();
		   }

		   if (!fireworksDisplayed)
			{
				addFireworks(cameraPos_x+450,300);
				addFireworks(cameraPos_x+200,150);
				addFireworks(cameraPos_x+750,150);
				fireworksTimer = 1000;
				fireworksDisplayed = true;

				levelTwoFinishedSound.play();
			}
		}
	
	if (gameChar_x >= flagpolePos_x && gameScore < 25)
	{
		isReachedLevel1 = true;
		isLeft = false;
		isRight = false;

		textSize(100);
		textStyle(BOLD);
		fill(243,235,125);
		text("LEVEL INCOMPLETE!", cameraPos_x + 50, 200);

		textSize(30);
		textStyle(NORMAL);
		fill(0);
		text("AWWW! You left out some coins...", cameraPos_x + 300, 250);

		if(!levelIncomplete)
		{
			levelIncomplete = true;
			levelIncompleteSound.play();
		}
	}
	else if (gameChar_x >= flagpolePos_x + 2900 && gameScore < 50) //text displays for level 2
		{
			isReachedLevel2 = true;
			isLeft = false;
			isRight = false;

			textSize(100);
			textStyle(BOLD);
			fill(243,235,125);
			text("LEVEL INCOMPLETE!", cameraPos_x + 50, 200);
	
			textSize(30);
			textStyle(NORMAL);
			fill(255);
			text("AWWW! You left out some coins...", cameraPos_x + 300, 250);

			if(!levelTwoIncomplete)
				{
					levelTwoIncomplete = true;
					levelIncompleteSound.play();
				}
		}
}

function gameOver()
{
	if (level == 1)
	{
	  textSize(100);
	  textStyle(BOLD);
	  fill(139,0,0);
	  text("GAME OVER", cameraPos_x + 230, 200);

	  textSize(30);
	  textStyle(NORMAL);
	  fill(0);
	  text("You are out of lives :(", cameraPos_x + 390, 250);
	}
	else if (level == 2)
	{
	  textSize(100);
	  textStyle(BOLD);
	  fill(255,0,0);
      text("GAME OVER", cameraPos_x + 230, 200);

	  textSize(30);
	  textStyle(NORMAL);
	  fill(255);
	  text("You are out of lives :(", cameraPos_x + 390, 250);
	}

	fill(255,228,225);
	noStroke();
	rect(cameraPos_x+310, 265, 420, 50); //rectangular box outline

	textSize(30);
	textStyle(NORMAL);
	fill(139,0,139);
	text("Press 'Enter' to restart the game.", cameraPos_x + 320, 300); //for game restart

	if (!gameRestart)
	{
		gameRestart = true;
		gameOverSound.play();
	}
}