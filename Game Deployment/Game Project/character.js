function drawIsLeftandWalking()
{
    fill(0); 
	ellipse(gameChar_x+2,gameChar_y-60,25,55); //hair
	fill(220,170,121); 
	ellipse(gameChar_x-3,gameChar_y-60, 15, 25); /*face*/ 
	rect(gameChar_x-7,gameChar_y-40,2,20); //right hand
	
	fill(255);
	rect(gameChar_x-4,gameChar_y-42,15,20); //shirt

	fill(0); 
	ellipse(gameChar_x-9, gameChar_y-65, 3,7); /*left eye*/ 
	ellipse(gameChar_x-5,gameChar_y-65,3,7); //right eye

	fill(130,14,14); 
	triangle(gameChar_x-10,gameChar_y-55,gameChar_x-5,gameChar_y-55,gameChar_x-8,gameChar_y-51); //mouth

	fill(250,125,169); 
	ellipse(gameChar_x,gameChar_y-58,5,3); //left cheek

	//outfit
	fill(8,131,149); 
	rect(gameChar_x-7,gameChar_y-47,20,5); /*scarf*/ 
	fill(7,25,82); 
	ellipse(gameChar_x-4,gameChar_y-38,5,4); ellipse(gameChar_x-4,gameChar_y-33,5,4); ellipse(gameChar_x-4,gameChar_y-28,5,4); /*buttons*/
	fill(26,26,25); 
	rect(gameChar_x-2,gameChar_y-22,8,20); //pants

	fill(220,170,121); 
	rect(gameChar_x+2,gameChar_y-40,4,20); //left hand

	fill(128,0,128); 
	ellipse(gameChar_x,gameChar_y-2,10,5) //left shoe
}

function drawIsRightandWalking()
{
    fill(0); 
	ellipse(gameChar_x-9,gameChar_y-60,25,55); //hair
	fill(220,170,121); 
	ellipse(gameChar_x-4,gameChar_y-60, 15, 25); /*face*/ 
	rect(gameChar_x+4,gameChar_y-40,2,20); //left hand
	
	fill(255); 
	rect(gameChar_x-11,gameChar_y-42,15,20); //shirt

	fill(0); 
	ellipse(gameChar_x-2, gameChar_y-65, 3,7); /*right eye*/ 
	ellipse(gameChar_x+2,gameChar_y-65,3,7); //left eye

	fill(130,14,14); 
	triangle(gameChar_x-2,gameChar_y-55,gameChar_x+3,gameChar_y-55,gameChar_x,gameChar_y-52); //mouth

	fill(250,125,169); 
	ellipse(gameChar_x-7,gameChar_y-58,5,3); //right cheek

	//outfit
	fill(8,131,149); 
	rect(gameChar_x-14,gameChar_y-47,20,5); //scarf
	fill(7,25,82); 
	ellipse(gameChar_x+3,gameChar_y-37,5,4); ellipse(gameChar_x+3,gameChar_y-32,5,4); ellipse(gameChar_x+3,gameChar_y-27,5,4); //buttons
	fill(26,26,25); 
	rect(gameChar_x-7,gameChar_y-22,8,20); //pants

	fill(220,170,121); 
	rect(gameChar_x-7,gameChar_y-40,4,20); //right hand

	fill(128,0,128); 
	ellipse(gameChar_x,gameChar_y-2,10,5) //right shoe
}

function drawIsJumpingFront()
{
	fill(0); 
	ellipse(gameChar_x,gameChar_y-57,45,55); //hair
	fill(220,170,121); 
	ellipse(gameChar_x,gameChar_y-57, 35, 25); //face
	
	fill(255); 
	rect(gameChar_x-12,gameChar_y-39,25,20); //shirt
	fill(8,131,149); 
	rect(gameChar_x-15,gameChar_y-44,30,5); //scarf
	
	/*left hand*/
	fill(220,170,121); 
	push();
	translate(gameChar_x-14,gameChar_y-47);
	rotate(radians(-45));
	rect(-7,-10,4,20); 
	pop();

	/*right hand*/
	push();
	translate(gameChar_x+15,gameChar_y-47);
	rotate(radians(45));
	rect(3.5,-10,4,20); 
	pop();

	fill(0); 
	ellipse(gameChar_x-5,gameChar_y-62,5,7); /*left eye*/ ellipse(gameChar_x+5,gameChar_y-62,5,7); //right eye

	fill(130,14,14); 
	triangle(gameChar_x-5,gameChar_y-52,gameChar_x+5,gameChar_y-52,gameChar_x,gameChar_y-49); //mouth

	fill(250,125,169); 
	ellipse(gameChar_x-11,gameChar_y-55,5,3); /*left cheek*/ ellipse(gameChar_x+11,gameChar_y-55,5,3); //right cheek

	//outfit
	fill(7,25,82); 
	ellipse(gameChar_x,gameChar_y-34,5,4); ellipse(gameChar_x,gameChar_y-29,5,4); ellipse(gameChar_x,gameChar_y-24,5,4); //buttons
	fill(128,0,128); 
	ellipse(gameChar_x-9,gameChar_y-12,10,5); /*left shoe*/ ellipse(gameChar_x+8.5,gameChar_y-12,10,5) //right shoe
	fill(26,26,25); 
	rect(gameChar_x-10.5,gameChar_y-19,10,10); rect(gameChar_x,gameChar_y-19,10,10); //pants
}

function drawIsJumpingRight()
{
	fill(0); 
	ellipse(gameChar_x-2,gameChar_y-57,25,45); //hair
	fill(220,170,121); 
	ellipse(gameChar_x+3,gameChar_y-57,15,25); //face 
	
	fill(220,170,121);
	push();
	translate(gameChar_x+8,gameChar_y-37);
	rotate(radians(45));
	rect(-3,-18,4,20); //left hand
	pop();
	
	fill(255); 
	rect(gameChar_x-7,gameChar_y-39,15,20); //shirt

	fill(0); 
	ellipse(gameChar_x+9,gameChar_y-62,3,7); //right eye
	ellipse(gameChar_x+5,gameChar_y-62,3,7); //left eye

	fill(130,14,14); 
	triangle(gameChar_x+5,gameChar_y-52,gameChar_x+10,gameChar_y-52,gameChar_x+8,gameChar_y-49); //mouth

	fill(250,125,169); 
	ellipse(gameChar_x,gameChar_y-55,5,3); //right cheek

	//outfit
	fill(8,131,149); 
	rect(gameChar_x-10,gameChar_y-44,20,5); //scarf
	fill(7,25,82); 
	ellipse(gameChar_x+7,gameChar_y-34,5,4); ellipse(gameChar_x+7,gameChar_y-29,5,4); ellipse(gameChar_x+7,gameChar_y-24,5,4); //buttons
	fill(26,26,25); 
	rect(gameChar_x-3,gameChar_y-19,8,10); //pants

	fill(26,26,25);
	push();
	translate(gameChar_x+4.3,gameChar_y+2);
	rotate(radians(-60));
	rect(4,-20,6,15);
	pop(); //lower leg

	fill(220,170,121); 
	push();
	translate(gameChar_x,gameChar_y-37);
	rotate(radians(45)); 
	rect(-2,-18,4,20); //right hand
	pop();

	fill(128,0,128); 
	push();
	translate(gameChar_x+10,gameChar_y-12);
	rotate(radians(-65));
	ellipse(-5,-18,10,5) //right shoe
	pop();	
}

function drawIsJumpingLeft()
{
	fill(0); 
	ellipse(gameChar_x,gameChar_y-57,25,45); //hair
	fill(220,170,121); 
	ellipse(gameChar_x-5,gameChar_y-57,15, 25); //face 

	fill(220,170,121); 
	push();
	translate(gameChar_x-9,gameChar_y-37);
	rotate(radians(-45));
	rect(0,-18,4,20); //right hand
	pop();
	
	fill(255); 
	rect(gameChar_x-7,gameChar_y-39,15,20); //shirt

	fill(0); 
	ellipse(gameChar_x-11,gameChar_y-62,3,7); //left eye
	ellipse(gameChar_x-7,gameChar_y-62,3,7); //right eye

	fill(130,14,14); 
	triangle(gameChar_x-12,gameChar_y-52,gameChar_x-7,gameChar_y-52,gameChar_x-10,gameChar_y-49); //mouth

	fill(250,125,169); 
	ellipse(gameChar_x-2,gameChar_y-55,5,3); //left cheek

	//outfit
	fill(8,131,149); 
	rect(gameChar_x-10,gameChar_y-44,20,5); //scarf
	fill(7,25,82); 
	ellipse(gameChar_x-7,gameChar_y-34,5,4); ellipse(gameChar_x-7,gameChar_y-29,5,4); ellipse(gameChar_x-7,gameChar_y-24,5,4); //buttons
	fill(26,26,25); 
	rect(gameChar_x-5,gameChar_y-19,8,10); //pants

	fill(26,26,25);
	push();
	translate(gameChar_x-10,gameChar_y-12);
	rotate(radians(60));
	rect(5,-18,6,15);
	pop();

	fill(220,170,121);
	push();
	translate(gameChar_x,gameChar_y-37);
	rotate(radians(-45)); 
	rect(-2,-18,4,20); //left hand
	pop();

	fill(128,0,128); 
	push();
	translate(gameChar_x-10,gameChar_y-12);
	rotate(radians(65));
	ellipse(5,-18,10,5) //left shoe
	pop();
}

function drawCharacter()
{
	//Standing, facing frontwards
	fill(0); 
	ellipse(gameChar_x,gameChar_y-62,45,55); //hair
	fill(220,170,121); 
	ellipse(gameChar_x,gameChar_y-62, 35, 25); //face
	fill(255); 
	rect(gameChar_x-13,gameChar_y-43,25,20); //shirt
	fill(220,170,121); 
	rect(gameChar_x-15,gameChar_y-40,4,20); 
	rect(gameChar_x+10,gameChar_y-40,4,20); //hands

	fill(0); 
	ellipse(gameChar_x-5,gameChar_y-65,5,7); /*left eye*/ 
	ellipse(gameChar_x+5,gameChar_y-65,5,7); //right eye

	fill(130,14,14); 
	triangle(gameChar_x-5,gameChar_y-54,gameChar_x+5,gameChar_y-54,gameChar_x,gameChar_y-52); //mouth

	fill(250,125,169); 
	ellipse(gameChar_x-10,gameChar_y-58, 5,3); /*left cheek*/ 
	ellipse(gameChar_x+10,gameChar_y-58,5,3); //right cheek

	fill(8,131,149); 
	rect(gameChar_x-15,gameChar_y-48,30,5); //scarf
	fill(7,25,82); 
	ellipse(gameChar_x,gameChar_y-28,5,4); ellipse(gameChar_x,gameChar_y-33,5,4); ellipse(gameChar_x,gameChar_y-38,5,4); //buttons
	fill(26,26,25); 
	rect(gameChar_x-10.5,gameChar_y-23,10,20); rect(gameChar_x,gameChar_y-23,10,20); //pants

	fill(128,0,128); 
	ellipse(gameChar_x-6,gameChar_y-2,10,5); /*left shoe*/ 
	ellipse(gameChar_x+6,gameChar_y-2,10,5) //right shoe
}