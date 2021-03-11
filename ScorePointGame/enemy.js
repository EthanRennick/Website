
function enemy(width, height, color, x, y) 
{
    this.width = width;
    this.height = height;
    this.speedX = 2;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.gravity = 0.05;
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
        this.y += this.speedY + this.gravitySpeed;
        
        this.hitBottom(); //if enemy hits bottom of canvas
        this.hitSidesRight();
        this.hitSidesLeft();
    }
    this.hitBottom = function() 
    {
        var rockbottom = myGameArea.canvas.height - this.height - 1;
        if (this.y > rockbottom) 
        {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
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
