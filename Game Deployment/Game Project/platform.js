function drawPlatform()
{
    if(level == 1)
    {
        if(platformPos_x[k] >= 300 && platformPos_x[k] <= 2400)
            {
                fill(42,99,73);
                rect(platformPos_x[k],platformPos_y[k],80,15);
            }
    }   

    if(level == 2)
    {
        for (var k=0; k < platformPos_x.length; k++)
        {
            fill(150);
            rect(platformPos_x[k],platformPos_y[k],80,15);
        }
    }   
    
    checkContact();
}

function checkContact(gc_x,gc_y)
{
    for (var k=0; k < platformPos_x.length; k++)
    {
        if (gc_x > platformPos_x[k] && gc_x < platformPos_x[k] + 80)
        {
            if (gc_y > platformPos_y[k] && gc_y < platformPos_y[k] + 15)
            {
                return true;
            }
        }
    }

    return false;
}