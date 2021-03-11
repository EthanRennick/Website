function goal(width, height, color, x, y) 
{
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.draw = function() 
    {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}


function rgb(r, g, b) 
{ 
    return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')'; 
} 