
function enemy2(width, height, color, x, y) 
{
    this.width = width;
    this.height = height;
    this.speedX = 2;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.gravity = -0.05;
    this.gravitySpeed = 0;

    this.update = function() 
    {
        ctx = myGameArea.context;       
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
    this.newPos = function() 
    {
        this.x += this.speedX;
        this.gravitySpeed += this.gravity;
        this.y += 0;      
        this.y += this.speedY + this.gravitySpeed;

        this.hitSidesRight();
        this.hitSidesLeft();
        this.hitTop();
    }
   
    this.hitSidesRight = function() 
    {
        var sides = myGameArea.canvas.width - this.width;
        if (this.x > sides) 
        {
            this.speedX = -2;
        }
    }
    this.hitSidesLeft = function() 
    {
        var sides = 2;
        if (this.x < sides) 
        {
            this.speedX = 2;
        }
    }  
    this.hitTop = function() 
    {
        var top = 0;
        if (this.y < top) 
        {
            this.y = top;
            this.gravity = 0;
            this.gravitySpeed = 0;
        
        }
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
