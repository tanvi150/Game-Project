function drawSetting()
{
 // Create a vertical gradient from Pastel Pink to Light Coral to Golden Yellow
 
 if (level == 1)
 {
	for (var i = 0; i < height; i++) 
		{
		// Determine color range based on the y position
		if (i < height / 2) // Top half
		{ 
		  blend = map(i, 0, height/2, 0, 1); // Map from Pastel Pink to Light Coral
		  skyColor = lerpColor(color(255, 132, 171), color(255, 171, 144), blend); // Blend Pastel Pink & Light Coral
		} 
		else // Bottom half
		{ 
		  blend = map(i, height/2, height, 0, 5); // Map from Light Coral to Golden Yellow
		  skyColor = lerpColor(color(255, 171, 144), color(255, 210, 118), blend); // Light Coral to Golden Yellow
		}
	
		stroke(skyColor); // Set the stroke color
		line(0, i, width, i); // Draw a horizontal line across the canvas
	  }

	noStroke();
	fill(34,139,34); //fill the ground forest green
	rect(0, 432, 1024, 144); //draw some green ground
	fill(150,150,150); //grey fill
	rect(0,432,1024,10); // pavement

	//Game score
	fill(255,255,0);
	noStroke();
	rect(935, 10, 75, 10); //rectangular box outline

	fill(0,0,128);
	textSize(19);
	textStyle(BOLDITALIC);
	text("Score: " + gameScore, 940,20);
 }

 if (level == 2)
 {
	for (var i = 0; i < height; i++) 
	{
		// Determine color range based on the y position
		if (i < height / 2) // Top half
		{ 
		  blend = map(i, 0, height/2, 0, 1); // Map from Deep Indigo to Light Coral
		  skyColor = lerpColor(color(18,20,124), color(105,9,121), blend); // Blend Deep Indigo & Deep Purple
		} 
		else // Bottom half
		{ 
		  blend = map(i, height/2, height, 0, 2); // Map from Deep Purple to Deep Magenta
		  skyColor = lerpColor(color(105,9,121), color(156,0,123), blend); // Deep Purple to Deep Magenta
		}
	
		stroke(skyColor); // Set the stroke color
		line(0, i, width, i); // Draw a horizontal line across the canvas
	}

	  //Full Moon
	  fill (200,204,201); //pale silver
	  noStroke();
	  ellipse(100,80,60,60);

	  fill(30,94,47); //fill the ground forest green
	  noStroke();
	  rect(0, 432, 1024, 144); //draw some green ground
	  fill(150,150,150); //grey fill
	  rect(0,432,1024,10); // pavement

	 //Game score
	 fill(255,228,225);
	 noStroke();
	 rect(935, 10, 75, 10); //rectangular box outline

	 fill(255,105,180); //hot pink
	 textSize(19);
	 textStyle(BOLDITALIC);
	 text("Score: " + gameScore, 940,20);
 }

	//Displays coordinates
	fill(255);
	textSize(16);
	textStyle(NORMAL);
	text("X: " + mouseX + ", Y: " + mouseY, 10, 20);

	push();
    translate(-cameraPos_x,0);
}

function drawStars()
{
	if (level == 2)
	{
		for(i=0; i < 1000; i++)
			{
				stroke(200,204,201);
				point(starX[i],starY[i]);
			}
	}
}

function drawCloud()
{
	if (level == 1)
	{
		noStroke();
		fill(255);
	
		//cloud loop
		for (var i=0; i<10; i++)
		{
		   ellipse(cloudPos_x[i], cloudPos_y[i], 80,80); //Main cloud body
		   ellipse(cloudPos_x[i] - 40, cloudPos_y[i], 60,60); //Left part of the cloud
		   ellipse(cloudPos_x[i] + 40, cloudPos_y[i], 60,60); //Right part of the cloud
	
		   cloudPos_x[i] += cloudSpeed[i]; // cloud moves horizontally
	
		 // reset cloud to the left when it goes off screen
		   if(cloudPos_x[i] > 2800)
		   {
			cloudPos_x[i] = -250; //reset to the left
			cloudPos_y[i] = random(45,200); //randomise vertical position
		   }
		}
	}
}

function drawMountain()
{
   if (level == 1)
	{
		noStroke();
		fill(56,40,34); //deep cocoa
	
		for(var i=0; i<36; i++)
		{
			let offsetX = mountainPos_x[i];
			triangle(offsetX+90, floorPos_y-mountainPos_y[i] - 50, offsetX, floorPos_y, offsetX + 190, floorPos_y);
		} 
	}

	if (level == 2)
		{
			noStroke();
			fill(34,34,36); //charcoal grey
		
			for(var i=0; i<36; i++)
			{
				let offsetX = mountainPos_x[i];
				triangle(offsetX+90, floorPos_y-mountainPos_y[i] - 50, offsetX, floorPos_y, offsetX + 190, floorPos_y);
			} 
		}

}

function drawTrees()
{
   if (level == 1)
	{
		for (var i=0; i<20; i++)
			{
			fill(120,100,40);
			rect(treePos_x[i],treePos_y,10,40);
		
			//branches
			fill(0,255,0); //green
			ellipse(treePos_x[i]-20,treePos_y-22,70,70);
			ellipse(treePos_x[i]+6,treePos_y-42,80,80);
			ellipse(treePos_x[i]+30,treePos_y-22,70,70);
			}
	}

	if (level == 2)
	{
		for (var i=0; i<20; i++)
			{
			fill(120,100,40);
			rect(treePos_x[i],treePos_y,10,40);
		
			//branches
			fill(61,131,54); //forest green
			ellipse(treePos_x[i]-20,treePos_y-22,70,70);
			ellipse(treePos_x[i]+6,treePos_y-42,80,80);
			ellipse(treePos_x[i]+30,treePos_y-22,70,70);
			}
	}	
			
}

function drawCanyon(t_canyonPos_x)
{
	for(var i=0; i < t_canyonPos_x.length; i++)
		{
			fill(205,133,63);
			rect(t_canyonPos_x[i],floorPos_y,150,600);
			fill(30,144,255);
			ellipse(t_canyonPos_x[i] + 75,floorPos_y + 148,155,50);

			checkCanyons(t_canyonPos_x,i);
		}
}

function drawCollectables(t_collectablePos_x, t_collectablePos_y)
{
		noStroke();
		fill(247,163,79);

		if (level == 1)
		{
			collectablesCount = 25;
		}
		else if (level == 2)
		{
			collectablesCount = 50;
		}
	
		for(var i=0; i<collectablesCount; i++)
		{
			if (!isFound[i])
			{
			  ellipse(t_collectablePos_x[i], t_collectablePos_y[i], 15, 15);
			}
	
			checkCollectables(t_collectablePos_x, t_collectablePos_y,i);
		}

}