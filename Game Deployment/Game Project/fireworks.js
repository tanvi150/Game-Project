function FireworkParticle(x, y, velocity_X, velocity_Y, size, color)
{
	this.x = x;
	this.y = y;
	this.velocity_X = velocity_X;
	this.velocity_Y = velocity_Y;
	this.size = size;
	this.color = color;
	this.age = 50;

	this.draw = function()
	{
		fill(this.color);
        noStroke();
		ellipse(this.x,this.y,this.size);
	}

	this.update = function()
	{
		this.x += this.velocity_X;
		this.y += this.velocity_Y;
		this.age--;
	}
}

function FireworkEmitter(x, y, velocity_X, velocity_Y, size, color)
{
	this.x = x;
	this.y = y;
	this.velocity_X = velocity_X;
	this.velocity_Y = velocity_Y;
	this.size = size;
	this.color = color;

	this.initialParticles = 0;
	this.lifespan = 0;
    this.particles = [];  

	this.addParticle = function()
	{
		var f = new FireworkParticle(random(this.x-10, this.x+10), 
		random(this.y-10, this.y+10), 
		random(this.velocity_X-15, this.velocity_X+15), 
		random(this.velocity_Y-15, this.velocity_Y+15), 
		random(this.size-1, this.size+1), 
		this.color);

		return f;
	}
	this.start = function(numParticles, lifespan)
	{
		this.numParticles = numParticles;
		this.lifespan = lifespan;

		//start emitter with initial particles
		for(var i=0; i < numParticles; i++)
		{
			this.particles.push(this.addParticle());
		}
	}

	this.updateParticles = function()
	{
		//iterate through particles and draw to the screen

		var deadParticles = 0;

		for(var i = this.particles.length-1; i >= 0; i--)
		{
			this.particles[i].draw();
			this.particles[i].update();

			if(this.particles[i].age > random(0, this.lifespan))
			{
				this.particles.splice(i, 1);
				deadParticles++;
			}
		}
	}
}

function drawFireworks()
{
	for(var i = fireworks.length - 1; i >= 0; i--)
	{
		fireworks[i].updateParticles();
		
		if(fireworks[i].particles.length == 0)
		{
			fireworks.splice(i,1);
		}
	}

	if (fireworksTimer > 0)
	{
		fireworksTimer--;
	}

	if(fireworks.length == 0 && fireworksTimer > 0)
	{
		fireworksTimer = 0;
	}
}

function addFireworks(x,y)
{
	for (var i=0; i < 50; i++)
	{
		var firework = new FireworkEmitter(x,y,0,0,10,color(random(200,125),random(255,140),random(0,100),100));
		firework.start(200,200);
		fireworks.push(firework);
	}
}