function platform(width, height, color, x, y) 
{
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function() 
    {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    this.collision = function(otherobj) 
    {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var collision = true;
        if ((mybottom < othertop) ||
         (mytop > otherbottom) || 
         (myright < otherleft) || 
         (myleft > otherright)) 
        {
            collision = false;
        }
        return collision;
    }
}

