function Bat(bat_x,bat_y,range)
{
    this.bat_x = bat_x;
    this.bat_y = bat_y;
    this.range = range;

    this.currentPos = bat_x;
    this.oscillate = 1; //to increment 

    this.update = function()
    {
        this.currentPos += this.oscillate

        if(this.currentPos >= this.bat_x + this.range)
        {
            this.oscillate = -1;
        }
        else if(this.currentPos < this.bat_x)
        {
            this.oscillate = 1;
        }
    }

    this.draw = function()
    {
        this.update();
        fill(148,76,55);
        ellipse(this.currentPos, this.bat_y-17,20,20); //body
        ellipse(this.currentPos,this.bat_y,20,30);
        triangle(this.currentPos-3,this.bat_y-25,this.currentPos-8,this.bat_y-23,this.currentPos-10,this.bat_y-33); //ears
        triangle(this.currentPos+3,this.bat_y-25,this.currentPos+8,this.bat_y-23,this.currentPos+10,this.bat_y-33);
        stroke(99,20,28);
        ellipse(this.currentPos-8,this.bat_y+2,8,20); //wings
        ellipse(this.currentPos+8,this.bat_y+2,8,20);
        fill(255);
        noStroke();
        ellipse(this.currentPos-3,this.bat_y-18,5,6); //eyes
        ellipse(this.currentPos+3,this.bat_y-18,5,6);
        fill(163,54,54);
        ellipse(this.currentPos-3,this.bat_y-17,3,3); //eyes
        ellipse(this.currentPos+3,this.bat_y-17,3,3);
        fill(56, 11, 4);
        ellipse(this.currentPos,this.bat_y-10,5,5); //mouth
        fill(148,76,55);
        ellipse(this.currentPos,this.bat_y-9,5,5);
    }

    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x,gc_y, this.currentPos, this.bat_y)
        if (d < 30)
        {
            return true;
        }

        return false;
    }
}
